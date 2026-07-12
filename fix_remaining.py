import re

BASE = r"C:\Users\pixel\Downloads\obomocarev1-main\obomocarev1-main\src\pages"

for fname in ["Impact.tsx", "Stories.tsx"]:
    p = BASE + "\\" + fname
    with open(p, "r", encoding="utf-8") as f:
        text = f.read()

    if "PlaceholderImage" not in text:
        matches = list(re.finditer(r"^import .+;$", text, re.MULTILINE))
        if matches:
            last = matches[-1]
            text = text[: last.end()] + "\nimport PlaceholderImage from '../components/PlaceholderImage';" + text[last.end() :]
            print(fname, "import added")

    if "backgroundImage" in text:
        text = text.replace(
            "style={{ backgroundImage: `url('${IMAGES.impactHero}')` }}",
            "style={{ backgroundImage: `url('${IMAGES.impactHero}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}",
        )
        print(fname, "background fixed")

    with open(p, "w", encoding="utf-8") as f:
        f.write(text)

print("done")
