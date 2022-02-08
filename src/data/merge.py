import csv
import sys

if __name__ == "__main__":
    data = []
    headers = set()
    for filename in sys.argv[1:-1]:
        with open(filename) as f:
            reader = csv.DictReader(f)
            for row in reader:
                cleaned_data = {k.strip(): v.strip() for k, v in row.items() if k}
                data.append(cleaned_data)
                headers |= cleaned_data.keys()
    with open(sys.argv[-1], "w") as f:
        writer = csv.DictWriter(f, fieldnames=sorted(list(headers)))
        writer.writeheader()
        for row in sorted(data, key=lambda x: x.get("AT-Nr. / AT-No.")):
            writer.writerow(row)
