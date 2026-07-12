import os, re

BASE = r"C:\Users\pixel\Downloads\obomocarev1-main\obomocarev1-main\src\pages"

FILES = [
    ("Impact.tsx", ['url(\'{IMAGES.impactHero}\')']),
    ("News.tsx", ['src={item.image}']),
    ("ProgramDetail.tsx", ['src={IMAGES.programDetail}', 'src={IMAGES.programDetailInner}']),
    ("Programs.tsx", ['src={IMAGES.foodSupport}', 'src={IMAGES.maternalHealth}', 'src={IMAGES.householdCare}', 'src={IMAGES.volunteerCorps}']),
    ("Stories.tsx", ['src={IMAGES.storiesHero}', 'src={story.img}']),
    ("StoryDetail.tsx", ['src={(IMAGES as any)[story.imageKey]}', 'src={(IMAGES as any)[story.bodyImageKey]}']),
    ("Team.tsx", ['src={member.image}']),
    ("Transparency.tsx", ['src={IMAGES.transparency}', 'src={IMAGES.transparencyInner}']),
    ("Volunteer.tsx", ['src={IMAGES.volunteer}']),
    ("VolunteerCorps.tsx", ['src={IMAGES.volunteerCorps}', 'src={IMAGES.volunteerCorpsDetail}']),
]

LABELS = {
    'IMAGES.contactHero': 'contactHero',
    'IMAGES.aboutHero': 'aboutHero',
    'IMAGES.aboutFounder': 'aboutFounder',
    'IMAGES.elderlySupport': 'elderlySupport',
    'IMAGES.elderlySupportDetail': 'elderlySupportDetail',
    'IMAGES.foodSupport': 'foodSupport',
    'IMAGES.foodSupportDetail': 'foodSupportDetail',
    'IMAGES.maternalHealth': 'maternalHealth',
    'IMAGES.householdCare': 'householdCare',
    'IMAGES.householdCareDetail': 'householdCareDetail',
    'IMAGES.volunteerCorps': 'volunteerCorps',
    'IMAGES.volunteerCorpsDetail': 'volunteerCorpsDetail',
    'IMAGES.getInvolvedHero': 'getInvolvedHero',
    'IMAGES.impactHero': 'impactHero',
    'IMAGES.programDetail': 'programDetail',
    'IMAGES.programDetailInner': 'programDetailInner',
    'IMAGES.storiesHero': 'storiesHero',
    'IMAGES.transparency': 'transparency',
    'IMAGES.transparencyInner': 'transparencyInner',
    'IMAGES.volunteer': 'volunteer',
    'IMAGES.news1': 'news1',
    'IMAGES.news2': 'news2',
    'IMAGES.news3': 'news3',
    'IMAGES.story1': 'story1',
    'IMAGES.story2': 'story2',
    'IMAGES.story3': 'story3',
    'IMAGES.homeHero': 'homeHero',
    'IMAGES.team': 'homeHero',
    'item.image': 'news1',
    'story.img': 'story1',
    'member.image': 'homeHero',
    '(IMAGES as any)[story.imageKey]': 'story1',
    '(IMAGES as any)[story.bodyImageKey]': 'story1',
    '{IMAGES.impactHero}': 'impactHero',
}

def guess_label(src_expr):
    for key, label in LABELS.items():
        if key in src_expr:
            return label
    return 'homeHero'

for filename, srcs in FILES:
    filepath = os.path.join(BASE, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    if 'PlaceholderImage' not in text:
        last_import = None
        for m in re.finditer(r'^import .+;$', text, re.MULTILINE):
            last_import = m
        if last_import:
            insert_pos = last_import.end()
            text = text[:insert_pos] + "\nimport PlaceholderImage from '../components/PlaceholderImage';" + text[insert_pos:]

    # Replace background-image divs in Impact.tsx
    if filename == 'Impact.tsx':
        text = re.sub(
            r'<div\s+className="bg-cover bg-center w-full h-full object-cover scale-105"\s+style=\{\{ backgroundImage: `url\(\'([^\']+)\'` \}\}></div>',
            lambda m: f'<PlaceholderImage imgSrc={m.group(1)} fallbackLabel="impactHero" alt="Impact" className="w-full h-full object-cover scale-105" />',
            text
        )

    # Replace <img ... src=... ... /> with PlaceholderImage
    def replace_img(m):
        attrs_before = m.group(1).strip()
        src_expr = m.group(2).strip()
        attrs_after = m.group(3).strip()
        fallback = guess_label(src_expr)
        alt_m = re.search(r'alt="([^"]*)"', attrs_before + ' ' + attrs_after)
        alt_val = alt_m.group(1) if alt_m else 'OBOMOCARE'
        cls_m = re.search(r'className="([^"]*)"', attrs_before + ' ' + attrs_after)
        cls_val = cls_m.group(1) if cls_m else ''
        props = f'imgSrc={src_expr} fallbackLabel="{fallback}" alt="{alt_val}"'
        if cls_val:
            props += f' className="{cls_val}"'
        if 'onError' in attrs_after:
            onerror_m = re.search(r'onError=\{([^}]+)\}', attrs_after)
            if onerror_m:
                props += f' onError={onerror_m.group(1)}'
        if 'onClick' in attrs_after:
            onclick_m = re.search(r'onClick=\{([^}]+)\}', attrs_after)
            if onclick_m:
                props += f' onClick={onclick_m.group(1)}'
        if 'loading' in attrs_after:
            props += ' loading="lazy"'
        return f'<PlaceholderImage {props} />'

    new_text = re.sub(
        r'<img\s+([^>]*?)\s+(src=\{[^}]+\})\s*([^>]*?)/?>',
        replace_img,
        text,
        flags=re.DOTALL
    )

    if new_text != text:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_text)
        print(f"Updated {filename}")
    else:
        print(f"No changes in {filename}")

# Also handle Gallery.tsx - already had Partial PlaceholderImage use, just ensure full replacement
filepath = os.path.join(BASE, "Gallery.tsx")
with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

def replace_gallery(m):
    attrs_before = m.group(1).strip()
    src_expr = m.group(2).strip()
    attrs_after = m.group(3).strip()
    fallback = 'gallery'
    alt_m = re.search(r'alt="([^"]*)"', attrs_before + ' ' + attrs_after)
    alt_val = alt_m.group(1) if alt_m else 'OBOMOCARE'
    cls_m = re.search(r'className="([^"]*)"', attrs_before + ' ' + attrs_after)
    cls_val = cls_m.group(1) if cls_m else ''
    props = f'imgSrc={src_expr} fallbackLabel="{fallback}" alt="{alt_val}"'
    if cls_val:
        props += f' className="{cls_val}"'
    return f'<PlaceholderImage {props} />'

new_text = re.sub(
    r'<img\s+([^>]*?)\s+(src=\{[^}]+\})\s*([^>]*?)/?>',
    replace_gallery,
    text,
    flags=re.DOTALL
)
if new_text != text:
    if 'PlaceholderImage' not in new_text:
        new_text = "import PlaceholderImage from '../components/PlaceholderImage';\n" + new_text
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Updated Gallery.tsx")

print("Done!")
