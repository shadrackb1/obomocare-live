import re, os

BASE = r"C:\Users\pixel\Downloads\obomocarev1-main\obomocarev1-main\src\pages"

files_to_update = [
    ("Impact.tsx", ["IMAGES.impactHero"]),
    ("Stories.tsx", ["IMAGES.storiesHero", "story.img"]),
    ("VolunteerCorps.tsx", ["IMAGES.volunteerCorps", "IMAGES.volunteerCorpsDetail"]),
    ("ProgramDetail.tsx", ["IMAGES.programDetail", "IMAGES.programDetailInner"]),
    ("Programs.tsx", ["IMAGES.foodSupport", "IMAGES.maternalHealth", "IMAGES.householdCare", "IMAGES.volunteerCorps"]),
    ("Transparency.tsx", ["IMAGES.transparency", "IMAGES.transparencyInner"]),
    ("Volunteer.tsx", ["IMAGES.volunteer"]),
    ("ElderlySupport.tsx", ["IMAGES.elderlySupport", "IMAGES.elderlySupportDetail"]),
    ("FoodSupport.tsx", ["IMAGES.foodSupport", "IMAGES.foodSupportDetail"]),
    ("HouseholdCare.tsx", ["IMAGES.householdCare", "IMAGES.householdCareDetail"]),
]

def guess_label(src_expr):
    for key, label in [
        ("aboutHero", "aboutHero"),
        ("aboutFounder", "aboutFounder"),
        ("contactHero", "contactHero"),
        ("impactHero", "impactHero"),
        ("getInvolvedHero", "getInvolvedHero"),
        ("foodSupportDetail", "foodSupportDetail"),
        ("foodSupport", "foodSupport"),
        ("maternalHealth", "maternalHealth"),
        ("householdCareDetail", "householdCareDetail"),
        ("householdCare", "householdCare"),
        ("volunteerCorpsDetail", "volunteerCorpsDetail"),
        ("volunteerCorps", "volunteerCorps"),
        ("elderlySupportDetail", "elderlySupportDetail"),
        ("elderlySupport", "elderlySupport"),
        ("storiesHero", "storiesHero"),
        ("programDetailInner", "programDetailInner"),
        ("programDetail", "programDetail"),
        ("news1", "news1"),
        ("news2", "news2"),
        ("news3", "news3"),
        ("transparencyInner", "transparencyInner"),
        ("transparency", "transparency"),
        ("volunteer", "volunteer"),
        ("story1", "story1"),
        ("story2", "story2"),
        ("story3", "story3"),
        ("homeHero", "homeHero"),
    ]:
        if key in src_expr:
            return label
    return "homeHero"

for fname, src_keys in files_to_update:
    filepath = os.path.join(BASE, fname)
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # Check if we need import
    has_import = any("PlaceholderImage" in l for l in lines)
    import_idx = None
    for i, l in enumerate(lines):
        if l.startswith("import "):
            import_idx = i

    new_lines = []
    changed = False
    for i, line in enumerate(lines):
        stripped = line.lstrip()
        indent = line[: len(line) - len(stripped)]

        # Check if this line contains one of our target src expressions
        matched_src = None
        for src_key in src_keys:
            if f"src={{{src_key}}}" in line or f"src={{{{{src_key}}}}}" in line:
                matched_src = src_key
                break

        if matched_src and "<img" in line:
            # Get the rest of the img tag (may span multiple lines)
            img_block = line
            j = i
            while "</img>" not in img_block and "/>" not in img_block and j < len(lines) - 1:
                j += 1
                img_block += lines[j]

            # Extract alt
            alt_m = re.search(r'alt="([^"]*)"', img_block)
            alt_val = alt_m.group(1) if alt_m else "OBOMOCARE"

            # Extract className
            cls_m = re.search(r'className="([^"]*)"', img_block)
            cls_val = cls_m.group(1) if cls_m else ""

            # Determine src expression from this block
            src_m = re.search(r'src=(\{[^}]+\})', img_block)
            src_expr = src_m.group(1) if src_m else f"{{{matched_src}}}"

            fallback = guess_label(src_expr)

            props = f'imgSrc={src_expr} fallbackLabel="{fallback}" alt="{alt_val}"'
            if cls_val:
                props += f' className="{cls_val}"'

            # Check for onError/onClick/loading
            if "onError" in img_block:
                onerr_m = re.search(r'onError=\{([^}]+)\}', img_block)
                if onerr_m:
                    props += f' onError={onerr_m.group(1)}'
            if "onClick" in img_block:
                onclick_m = re.search(r'onClick=\{([^}]+)\}', img_block)
                if onclick_m:
                    props += f' onClick={onclick_m.group(1)}'
            if 'loading="lazy"' in img_block:
                props += ' loading="lazy"'

            replacement = f"{indent}<PlaceholderImage {props} />\n"

            # Skip the lines we consumed
            new_lines.append(replacement)
            for k in range(i + 1, j + 1):
                lines[k] = ""  # mark as consumed
            changed = True
            break
        else:
            new_lines.append(line)

    if changed:
        if not has_import and import_idx is not None:
            new_lines.insert(import_idx + 1, "import PlaceholderImage from '../components/PlaceholderImage';\n")
        with open(filepath, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
        print(f"Updated {fname}")
    else:
        print(f"No changes in {fname}")

print("done")
