import csv
import json
data = {}
with open("sheet.csv", encoding='utf-8-sig') as f:
    reader = csv.reader(f, delimiter=";")
    for row in reader:
        at_nr = row[0]
        ids = list(set(x.strip() for x in row[1].split(";") if x.strip().isdigit()))
        for id in ids:
            if id in data:
                raise Exception("Duplicate EAN:", id)
            data[id] = at_nr

with open("ean_map.json", "w") as f:
    json.dump(data, f, indent='\t')