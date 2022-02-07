import sys
import json

with open(sys.argv[1], "r") as f:
    data = json.load(f)
with open(sys.argv[1], "w") as f:
    json.dump(data, f, indent="  ", sort_keys=True)
    f.write("\n")