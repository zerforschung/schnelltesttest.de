import json
import csv
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("input", type=argparse.FileType('r'))
parser.add_argument("output", type=argparse.FileType('w'))
args = parser.parse_args()

def clean_row(source):
    translation = {"AT-Nr. / AT-No. ": "at_nr","Ref-Nr./ ID-No. * ":"ref_nr","Hersteller / Manufacturer ": "manufacturer","Testname / Test name ": "test_name","Zielantigen / target antigen ":"target_antigen","Cq <25 ":"sensitivity_cq<25","Cq 25-30 ": "sensitivity_cq25-30","Cq >30 ":"sensitivity_cq>30","Gesamt- Sensitvität / total sensitivity ": "sensitivity_total"}
    return {translation.get(k, k.strip()): v.strip() for k,v in source.items() if k}

reader = csv.DictReader(args.input)
data = {}
for row in reader:
    cleaned_row = clean_row(row)
    data[cleaned_row['at_nr']] = cleaned_row

json.dump(data, args.output, indent='\t')