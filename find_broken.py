import os, re

BASE = r"C:\Users\pixel\Downloads\obomocarev1-main\obomocarev1-main\src"
for root, dirs, files in os.walk(BASE):
    for f in files:
        if not f.endswith(".tsx"):
            continue
        p = os.path.join(root, f)
        with open(p, "r", encoding="utf-8") as fh:
            text = fh.read()
        if "imgSrc=src=" in text:
            print(p, "-> broken imgSrc")
        if 'alt="OBOMOCARE"' in text and "PlaceholderImage" in text:
            print(p, "-> bad alt")
