import json
import csv
import argparse
import re

parser = argparse.ArgumentParser()
parser.add_argument("input", type=argparse.FileType('r'))
parser.add_argument("output", type=argparse.FileType('w'))
args = parser.parse_args()

def cleaned_value(value):
    value = value.strip()
    if re.match(r'[0-9,]+%', value):
        nums = value.rstrip("%")
        return float(nums.replace(",", "."))
    return value
def clean_row(source):
    translation = {"AT-Nr. / AT-No. ": "at_nr","Ref-Nr./ ID-No. * ":"ref_nr","Hersteller / Manufacturer ": "manufacturer","Testname / Test name ": "test_name","Zielantigen / target antigen ":"target_antigen","Cq <25 ":"sensitivity_cq<25","Cq 25-30 ": "sensitivity_cq25-30","Cq >30 ":"sensitivity_cq>30","Gesamt- Sensitvität / total sensitivity ": "sensitivity_total"}
    return {translation.get(k, k.strip()): cleaned_value(v) for k,v in source.items() if k}
def split_at_nrs(at_nr):
    match = re.match(r'(AT\d{3}/\d{2}) \((AT\d{3}/\d{2})\)', at_nr)
    if match:
        return match.groups() + (at_nr,)
    else:
        return [at_nr]

reader = csv.DictReader(args.input)
data = {}
for row in reader:
    cleaned_row = clean_row(row)
    for at_nr in split_at_nrs(cleaned_row['at_nr']):
        data[at_nr] = cleaned_row

json.dump(data, args.output, indent='  ')