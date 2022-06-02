import argparse
from openpyxl import load_workbook
import os.path
import json
import re
import requests
import tempfile
import atexit
import shutil
from pathlib import Path

XLSX_URL = "https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests-excel.xlsx?__blob=publicationFile"

parser = argparse.ArgumentParser()
parser.add_argument("output")
args = parser.parse_args()

tmpdir = tempfile.mkdtemp()
atexit.register(shutil.rmtree, tmpdir)
tmppath = Path(tmpdir)
data_file = tmppath / "data.xlsx"

xlsx_req = requests.get(XLSX_URL)
xlsx_req.raise_for_status()
with open(data_file, "wb") as f:
    f.write(xlsx_req.content)

old_data = {}
if os.path.exists(args.output):
    with open(args.output) as f:
        old_data = json.load(f)["tests"]

wb = load_workbook(filename=data_file)
sheet = wb["zur Veröffentlichung"]
translation = {
    "AT-Nr. / AT-No.": "at_nr",
    "AT-Nr. ----------AT-No.": "at_nr",
    "AT-Nr. Selbsttest / AT-No. selftest": "at_nr_self",
    "AT-Nr. Selbsttest / AT-No. self-test": "at_nr_self",
    "AT-Nr. Selbsttest # ------------------ AT-No. self-test #": "at_nr_self",
    "Ref-Nr./ ID-No.": "ref_nr",
    "Ref-Nr./ ID-No. *": "ref_nr",
    "Ref-Nr. * --------------ID-No. *": "ref_nr",
    "Hersteller / Manufacturer": "manufacturer",
    "Hersteller ---------------------Manufacturer": "manufacturer",
    "Testname / Test name": "test_name",
    "Testname  -----------------Test name": "test_name",
    "Zielantigen / target antigen": "target_antigen",
    "Zielantigen /target antigen": "target_antigen",
    "Zielantigen ---------------------target antigen": "target_antigen",
    "Cq <25": "sensitivity_cq<25",
    "Cq ≤25": "sensitivity_cq<=25",
    "Cq 25-30": "sensitivity_cq25-30",
    "Cq >30": "sensitivity_cq>30",
    "Cq ≥30": "sensitivity_cq>=30",
    "Gesamt- Sensitvität / total sensitivity": "sensitivity_total",
    "Gesamt- Sensitvität ----------------- total sensitivity": "sensitivity_total",
    "Omikron Erkennung entsprechend der Bridging Prüfung  ---------------------------Omicron detection by bridging": "omicron_bridging",
}


def map_headers(row):
    vals = []
    for cell in row:
        if cell.value is None:
            vals.append("")
            continue
        value = cell.value or ""
        value = value.replace("\n", "").strip()
        translated_name = translation[value]
        vals.append(translated_name)
    return vals


def map_row(row):
    vals = []
    for cell in row:
        if cell.value is None:
            vals.append("")
            continue
        value = cell.value
        if value is None:
            value = ""
        if isinstance(value, str):
            value = value.replace("\n", "").strip()
        if isinstance(value, (int, float)):
            if cell.number_format == "0.0%":
                value = float(round(value * 100, 1))
            else:
                value = str(value)
        vals.append(value)
    return vals


comments = {}
for row in sheet.rows:
    first_cell = row[0]
    first_value = first_cell.value or ""
    first_value = first_value.replace("\n", "").strip()
    if m := re.match("(\d+)\) (.*)", first_value):
        text = m.group(2).split("/")[0].strip()
        comment_nr = m.group(1)
        comments[comment_nr] = text

data = {}
keep_keys = ["legal_threat", "notice"]
file_date = None

for row in sheet.rows:
    first_cell = row[0]
    first_value = first_cell.value or ""
    first_value = first_value.replace("\n", "").strip()
    if first_value.startswith("AT-Nr"):  # This is a header row
        headers = map_headers(row)

    if "Stand" in first_value:
        date = re.search("\d+.\d+.\d+", first_value).group()
        print("Stand", date)
        file_date = date

    if re.match("AT(\d+)/(\d+)", first_value):
        test_data = dict((k, v) for k, v in zip(headers, map_row(row)) if k)
        if m := re.match("(AT\d+/\d+) (\d+)\)", test_data["at_nr"]):
            at_nr, comment = m.groups()
            comment_text = comments[comment]
            test_data["at_nr"] = at_nr
            test_data["notice"] = comment_text

        test_data["omicron_bridging"] = test_data.get("omicron_bridging", "") == "Ja"

        old_test_data = old_data.get(test_data["at_nr"], {})
        for key in keep_keys:
            if key in old_test_data:
                if key in test_data and old_test_data[key] != test_data[key]:
                    print(
                        f"WARNING, overwriting {key} from xlsx ('{test_data[key]}') with old data ('{old_test_data[key]}')"
                    )
                else:
                    test_data[key] = old_test_data[key]
        data[test_data["at_nr"]] = test_data

with open(args.output, "w") as f:
    json.dump(
        {"tests": data, "metadata": {"date": file_date, "source": XLSX_URL}},
        f,
        indent="  ",
        sort_keys=True,
    )
    f.write("\n")
