import csv
import json
import sys

SKIP_LIST = ["-", "#REF!"]
data = {}
with open(sys.argv[1], encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        at_nr = row["AT-Nr. / AT-No."]
        ids = list(
            set(x.strip() for x in row["EANs alle"].split(";") if x.strip() and x.strip() not in SKIP_LIST)
        )
        for i in ids:
            if not i.isdigit():
                print("Warning, non-digit ean", i)
        for id in ids:
            if id in data:
                print("ERROR: Duplicate EAN:", id)
                continue
            data[id] = at_nr

with open("ean_map.json", "w") as f:
    json.dump(data, f, indent="  ", sort_keys=True)
    f.write("\n")
