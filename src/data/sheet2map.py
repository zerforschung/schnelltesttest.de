import csv
import json
import sys
data = {}
with open(sys.argv[1], encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        at_nr = row['AT-Nr. / AT-No.']
        ids = list(set(x.strip() for x in row['EANs alle'].split(";") if x.strip().isdigit()))
        for id in ids:
            if id in data:
                print("Duplicate EAN:", id)
                continue
            data[id] = at_nr

with open("ean_map.json", "w") as f:
    json.dump(data, f, indent='  ', sort_keys=True)
    f.write('\n')
