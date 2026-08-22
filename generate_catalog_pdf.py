import os
from PIL import Image, ImageDraw, ImageFont

# Master Pants Catalog Data
PANTS_DATA = [
    # 1. BLUE & INDIGO
    {
        "family": "Blue & Indigo",
        "badge_bg": (219, 234, 254),
        "badge_fg": (30, 64, 175),
        "pantName": "Light Washed Wide-Leg Skate Jeans",
        "colorName": "Light Wash Blue",
        "hex": (141, 168, 196),
        "image": "images/pant_page_1.jpg",
        "fit": "Baggy Wide-Leg Fit",
        "fabric": "13.5oz Washed Denim",
        "shoes": "Chunky Skate Sneakers (Vans/Dunks)",
        "desc": "Light vintage bleach wash with effortless wide skater drape."
    },
    {
        "family": "Blue & Indigo",
        "badge_bg": (219, 234, 254),
        "badge_fg": (30, 64, 175),
        "pantName": "Ice Blue Relaxed Denim Jeans",
        "colorName": "Ice Blue Wash",
        "hex": (174, 198, 219),
        "image": "images/pant_page_3.jpg",
        "fit": "Relaxed Daily Fit",
        "fabric": "100% Cotton Denim",
        "shoes": "Clean White Minimalist Sneakers",
        "desc": "Crisp ice blue wash with clean lines for everyday wear."
    },
    {
        "family": "Blue & Indigo",
        "badge_bg": (219, 234, 254),
        "badge_fg": (30, 64, 175),
        "pantName": "Vintage Ocean Blue Wide-Leg Jeans",
        "colorName": "Ocean Blue Denim",
        "hex": (61, 94, 122),
        "image": "images/pant_page_4.jpg",
        "fit": "Straight Wide Fit",
        "fabric": "Raw Vintage Denim",
        "shoes": "Brown Leather Chelsea Boots",
        "desc": "Classic mid-to-dark ocean wash with relaxed straight leg."
    },
    {
        "family": "Blue & Indigo",
        "badge_bg": (219, 234, 254),
        "badge_fg": (30, 64, 175),
        "pantName": "Classic Mid-Indigo Straight Jeans",
        "colorName": "Mid-Blue Indigo",
        "hex": (40, 70, 110),
        "image": "images/pant_page_6.jpg",
        "fit": "Straight Fit",
        "fabric": "Selvedge Cotton Denim",
        "shoes": "Brown Leather Boots / Retro Runners",
        "desc": "Rich royal mid-blue indigo denim that pairs with any shirt tone."
    },
    {
        "family": "Blue & Indigo",
        "badge_bg": (219, 234, 254),
        "badge_fg": (30, 64, 175),
        "pantName": "Mid-Wash Denim Utility Cargo Jeans",
        "colorName": "Denim Blue Cargo",
        "hex": (71, 101, 135),
        "image": "images/pant_page_11.jpg",
        "fit": "Baggy Cargo Fit",
        "fabric": "Heavy Denim Twill",
        "shoes": "Skate High-Tops / Retro Runners",
        "desc": "Hybrid cargo jeans featuring double denim thigh pockets."
    },

    # 2. BLACK & CHARCOAL
    {
        "family": "Black & Charcoal",
        "badge_bg": (226, 232, 240),
        "badge_fg": (15, 23, 42),
        "pantName": "Washed Black Baggy Wide-Leg Jeans",
        "colorName": "Washed Charcoal Black",
        "hex": (35, 37, 41),
        "image": "images/pant_page_2.jpg",
        "fit": "Baggy Fit",
        "fabric": "Heavy Baggy Denim",
        "shoes": "Black Canvas High-Tops",
        "desc": "Deep faded charcoal black with relaxed wide thigh and ankle drape."
    },
    {
        "family": "Black & Charcoal",
        "badge_bg": (226, 232, 240),
        "badge_fg": (15, 23, 42),
        "pantName": "Jet Black Wide-Leg Tailored Slacks",
        "colorName": "Jet Black",
        "hex": (17, 19, 23),
        "image": "images/pant_page_8.jpg",
        "fit": "Wide Tailored Fit",
        "fabric": "Italian Wool Twill",
        "shoes": "Polished Dress Shoes or Loafers",
        "desc": "Sharp front crease with flowing wide-leg silhouette."
    },
    {
        "family": "Black & Charcoal",
        "badge_bg": (226, 232, 240),
        "badge_fg": (15, 23, 42),
        "pantName": "Black Pinstripe Pleated Trousers",
        "colorName": "Black Chalk Pinstripe",
        "hex": (24, 26, 31),
        "image": "images/pant_page_9.jpg",
        "fit": "Relaxed Pleated Fit",
        "fabric": "Wool Pinstripe Blend",
        "shoes": "Black Leather Penny Loafers",
        "desc": "Refined subtle chalk pinstripes with relaxed elastic waistband."
    },
    {
        "family": "Black & Charcoal",
        "badge_bg": (226, 232, 240),
        "badge_fg": (15, 23, 42),
        "pantName": "Washed Charcoal Grey Straight Jeans",
        "colorName": "Mineral Charcoal Grey",
        "hex": (96, 100, 109),
        "image": "images/pant_page_12.jpg",
        "fit": "Straight Fit",
        "fabric": "13oz Ring-Spun Denim",
        "shoes": "White Leather Low-Tops / Boots",
        "desc": "Mineral washed grey denim with subtle fading across knees."
    },
    {
        "family": "Black & Charcoal",
        "badge_bg": (226, 232, 240),
        "badge_fg": (15, 23, 42),
        "pantName": "Dark Slate Charcoal Utility Cargo",
        "colorName": "Dark Slate Charcoal",
        "hex": (55, 60, 66),
        "image": "images/pant_page_14.jpg",
        "fit": "Baggy Cargo Fit",
        "fabric": "Ripstop Heavy Twill",
        "shoes": "Black Tactical Boots / Runners",
        "desc": "Low-profile charcoal tactical utility pants with reinforced knees."
    },
    {
        "family": "Black & Charcoal",
        "badge_bg": (226, 232, 240),
        "badge_fg": (15, 23, 42),
        "pantName": "Obsidian Black Contrast-Stitch Jeans",
        "colorName": "Obsidian Black",
        "hex": (20, 20, 22),
        "image": "images/pant_page_19.jpg",
        "fit": "Straight Fit",
        "fabric": "Rigid Black Denim",
        "shoes": "Black Loafers / White Sneakers",
        "desc": "Deep jet black denim highlighted with sharp white contrast stitch."
    },
    {
        "family": "Black & Charcoal",
        "badge_bg": (226, 232, 240),
        "badge_fg": (15, 23, 42),
        "pantName": "Black Contrast-Stitch Skate Cargo",
        "colorName": "Jet Black Utility",
        "hex": (18, 19, 22),
        "image": "images/pant_page_20.jpg",
        "fit": "Baggy Wide-Leg Fit",
        "fabric": "Heavy Cotton Twill",
        "shoes": "Chunky Skate Sneakers",
        "desc": "Oversized black utility skate pants with white stitching."
    },
    {
        "family": "Black & Charcoal",
        "badge_bg": (226, 232, 240),
        "badge_fg": (15, 23, 42),
        "pantName": "Faded Ombre Charcoal Skate Jeans",
        "colorName": "Faded Charcoal Black",
        "hex": (43, 45, 50),
        "image": "images/pant_page_23.jpg",
        "fit": "Baggy Fit",
        "fabric": "14oz Fade-Washed Denim",
        "shoes": "Vans Knu Skool or Chunky Dunks",
        "desc": "Gradual vintage fade from deep black waist into washed grey knees."
    },

    # 3. OLIVE & GREEN
    {
        "family": "Olive & Green",
        "badge_bg": (220, 252, 231),
        "badge_fg": (22, 101, 52),
        "pantName": "Army Olive Green Cargo Pants",
        "colorName": "Army Olive Green",
        "hex": (72, 87, 61),
        "image": "images/pant_page_10.jpg",
        "fit": "Relaxed Cargo Fit",
        "fabric": "Durable Cotton Twill",
        "shoes": "Green/White Runners or Boots",
        "desc": "Military green utility cargo with knee dart shaping and deep pockets."
    },
    {
        "family": "Olive & Green",
        "badge_bg": (220, 252, 231),
        "badge_fg": (22, 101, 52),
        "pantName": "Olive Green Corduroy Trousers",
        "colorName": "Olive Green Corduroy",
        "hex": (79, 83, 56),
        "image": "images/pant_page_15.jpg",
        "fit": "Relaxed Fit",
        "fabric": "100% Cotton Corduroy",
        "shoes": "Suede Chelsea Boots / Loafers",
        "desc": "Rich fine-wale olive corduroy trousers with warm velvety texture."
    },

    # 4. CREAM & WHITE
    {
        "family": "Cream & White",
        "badge_bg": (254, 243, 199),
        "badge_fg": (146, 64, 14),
        "pantName": "Cream Linen Drawstring Resort Trousers",
        "colorName": "Cream / Off-White",
        "hex": (235, 229, 216),
        "image": "images/pant_page_5.jpg",
        "fit": "Relaxed Fit",
        "fabric": "100% French Linen",
        "shoes": "Beige Suede Loafers / Espadrilles",
        "desc": "Pure breathable linen blend in off-white ecru with drawstring waist."
    },
    {
        "family": "Cream & White",
        "badge_bg": (254, 243, 199),
        "badge_fg": (146, 64, 14),
        "pantName": "Ecru Off-White Seam Trousers",
        "colorName": "Ecru Off-White",
        "hex": (234, 230, 219),
        "image": "images/pant_page_21.jpg",
        "fit": "Relaxed Straight Fit",
        "fabric": "Cotton-Linen Canvas",
        "shoes": "Tan Suede Loafers / White Low-Tops",
        "desc": "Architectural front-seam tailoring in light ecru canvas."
    },

    # 5. BEIGE, TAN & BROWN
    {
        "family": "Beige, Tan & Brown",
        "badge_bg": (253, 230, 138),
        "badge_fg": (120, 53, 15),
        "pantName": "Desert Khaki Multi-Pocket Cargo",
        "colorName": "Desert Khaki Tan",
        "hex": (200, 178, 139),
        "image": "images/pant_page_7.jpg",
        "fit": "Baggy Cargo Fit",
        "fabric": "Cotton Ripstop Twill",
        "shoes": "Tan Timberlands / Runners",
        "desc": "Heavy-duty tactical cargo with top flaps and bellows pockets."
    },
    {
        "family": "Beige, Tan & Brown",
        "badge_bg": (253, 230, 138),
        "badge_fg": (120, 53, 15),
        "pantName": "Sand Beige Drawstring Joggers",
        "colorName": "Sand Beige",
        "hex": (215, 209, 194),
        "image": "images/pant_page_13.jpg",
        "fit": "Relaxed Fit",
        "fabric": "Soft Cotton Poplin",
        "shoes": "Beige Suede Runners / Sneakers",
        "desc": "Lightweight sand beige cargo with drawstring comfort waist."
    },
    {
        "family": "Beige, Tan & Brown",
        "badge_bg": (253, 230, 138),
        "badge_fg": (120, 53, 15),
        "pantName": "Tan Brown Corduroy Trousers",
        "colorName": "Tan Brown Corduroy",
        "hex": (142, 103, 67),
        "image": "images/pant_page_16.jpg",
        "fit": "Relaxed Fit",
        "fabric": "Fine-Wale Corduroy",
        "shoes": "Brown Leather Brogues / Low-Tops",
        "desc": "Vintage autumn tan brown corduroy offering rich warmth."
    },
    {
        "family": "Beige, Tan & Brown",
        "badge_bg": (253, 230, 138),
        "badge_fg": (120, 53, 15),
        "pantName": "Sand Camel Carpenter Pants",
        "colorName": "Sand Camel Canvas",
        "hex": (190, 159, 118),
        "image": "images/pant_page_17.jpg",
        "fit": "Baggy Carpenter Fit",
        "fabric": "Heavy Duck Canvas",
        "shoes": "Red Wing / Timberland Boots",
        "desc": "Workwear heritage carpenter pants with double-panel knee patches."
    },
    {
        "family": "Beige, Tan & Brown",
        "badge_bg": (253, 230, 138),
        "badge_fg": (120, 53, 15),
        "pantName": "Khaki Tactical Flap-Pocket Cargo",
        "colorName": "Classic Khaki Tan",
        "hex": (203, 178, 141),
        "image": "images/pant_page_18.jpg",
        "fit": "Straight Fit",
        "fabric": "Cotton Twill",
        "shoes": "Brown Leather Boots / Sneakers",
        "desc": "Clean tailored straight-leg military cargo in versatile khaki tan."
    },
    {
        "family": "Beige, Tan & Brown",
        "badge_bg": (253, 230, 138),
        "badge_fg": (120, 53, 15),
        "pantName": "Desert Sand Multi-Pocket Cargo",
        "colorName": "Desert Sand Tan",
        "hex": (201, 181, 146),
        "image": "images/pant_page_22.jpg",
        "fit": "Baggy Fit",
        "fabric": "Heavy Washed Twill",
        "shoes": "Trail Shoes or Jordan 1 Lows",
        "desc": "Wide-leg loose drape cargo trousers with flap side pockets."
    },
    {
        "family": "Beige, Tan & Brown",
        "badge_bg": (253, 230, 138),
        "badge_fg": (120, 53, 15),
        "pantName": "Chocolate Brown Corduroy Wide Pants",
        "colorName": "Chocolate Brown",
        "hex": (94, 72, 59),
        "image": "images/pant_page_25.jpg",
        "fit": "Wide Relaxed Fit",
        "fabric": "Washed Heavy Corduroy",
        "shoes": "Dark Brown Boots / White Sneakers",
        "desc": "Rich deep chocolate brown corduroy with relaxed wide silhouette."
    },
    {
        "family": "Beige, Tan & Brown",
        "badge_bg": (253, 230, 138),
        "badge_fg": (120, 53, 15),
        "pantName": "Washed Sand Beige Baggy Jeans",
        "colorName": "Sand Beige Wash",
        "hex": (215, 196, 165),
        "image": "images/pant_page_26.jpg",
        "fit": "Baggy Wide-Leg Fit",
        "fabric": "Tinted Washed Denim",
        "shoes": "White Retro Sneakers / Loafers",
        "desc": "Warm tinted sand denim with baggy 90s skater cut."
    }
]

# Page dimensions: A4 at 150 DPI = 1240 x 1754 px
PAGE_W = 1240
PAGE_H = 1754

def get_font(size, bold=False):
    font_names = [
        "arialbd.ttf" if bold else "arial.ttf",
        "segoeuib.ttf" if bold else "segoeui.ttf",
        "calibrib.ttf" if bold else "calibri.ttf",
        "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    ]
    for name in font_names:
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            continue
    return ImageFont.load_default()

def draw_header(draw, title_text, page_num, total_pages):
    # Top banner background
    draw.rectangle([0, 0, PAGE_W, 110], fill=(245, 243, 255))
    draw.line([0, 110, PAGE_W, 110], fill=(221, 214, 254), width=2)
    
    # Logo / Badge
    font_badge = get_font(18, bold=True)
    draw.text((45, 24), "CHOOSE YOUR TENUE", fill=(109, 40, 217), font=font_badge)
    
    font_sub = get_font(14, bold=False)
    draw.text((45, 52), "Master Pants & Jeans Fashion Catalog • Curated by Vedantheswar M (@vedhuu_u)", fill=(100, 116, 139), font=font_sub)
    
    font_sec = get_font(18, bold=True)
    draw.text((45, 76), f"• {title_text}", fill=(15, 23, 42), font=font_sec)
    
    # Page indicator
    font_pg = get_font(14, bold=True)
    draw.text((PAGE_W - 130, 48), f"Page {page_num} of {total_pages}", fill=(109, 40, 217), font=font_pg)

def draw_footer(draw, page_num, total_pages):
    draw.rectangle([0, PAGE_H - 50, PAGE_W, PAGE_H], fill=(248, 250, 252))
    draw.line([0, PAGE_H - 50, PAGE_W, PAGE_H - 50], fill=(226, 232, 240), width=1)
    
    font_f = get_font(12, bold=False)
    footer_text = "Choose Your Tenue © 2026 Vedantheswar M (@vedhuu_u) • All rights reserved • Styling Guide & Color Harmonies"
    draw.text((45, PAGE_H - 34), footer_text, fill=(148, 163, 184), font=font_f)
    
    font_f_bold = get_font(12, bold=True)
    draw.text((PAGE_W - 120, PAGE_H - 34), f"{page_num} / {total_pages}", fill=(109, 40, 217), font=font_f_bold)

def draw_pant_card(canvas, pant, x, y, w, h):
    draw = ImageDraw.Draw(canvas)
    
    # Card background & border
    draw.rounded_rectangle([x, y, x + w, y + h], radius=14, fill=(255, 255, 255), outline=(226, 232, 240), width=2)
    
    # Pant Image Box
    img_h = int(h * 0.54)
    img_box = (x + 8, y + 8, x + w - 8, y + 8 + img_h)
    
    # Load and crop/paste pant image
    if os.path.exists(pant["image"]):
        try:
            with Image.open(pant["image"]) as img:
                img_rgb = img.convert("RGB")
                # Crop to fit
                target_w = img_box[2] - img_box[0]
                target_h = img_box[3] - img_box[1]
                
                # Resize with cover crop
                src_w, src_h = img_rgb.size
                src_ratio = src_w / src_h
                tgt_ratio = target_w / target_h
                
                if src_ratio > tgt_ratio:
                    new_h = src_h
                    new_w = int(src_h * tgt_ratio)
                    crop_x = (src_w - new_w) // 2
                    crop_y = 0
                else:
                    new_w = src_w
                    new_h = int(src_w / tgt_ratio)
                    crop_x = 0
                    crop_y = int((src_h - new_h) * 0.15)
                
                cropped = img_rgb.crop((crop_x, crop_y, crop_x + new_w, crop_y + new_h))
                resized = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)
                canvas.paste(resized, (img_box[0], img_box[1]))
        except Exception as e:
            draw.rectangle(img_box, fill=(15, 23, 42))
    else:
        draw.rectangle(img_box, fill=(15, 23, 42))
    
    # Color Dot on image top right
    dot_x = img_box[2] - 22
    dot_y = img_box[1] + 8
    draw.ellipse([dot_x, dot_y, dot_x + 14, dot_y + 14], fill=pant["hex"], outline=(255, 255, 255), width=2)
    
    # Content area
    content_y = img_box[3] + 10
    
    # Color Badge
    font_badge = get_font(11, bold=True)
    badge_text = pant["colorName"].upper()
    bbox = font_badge.getbbox(badge_text)
    badge_w = (bbox[2] - bbox[0]) + 14
    badge_h = 20
    draw.rounded_rectangle([x + 12, content_y, x + 12 + badge_w, content_y + badge_h], radius=10, fill=pant["badge_bg"])
    draw.text((x + 19, content_y + 3), badge_text, fill=pant["badge_fg"], font=font_badge)
    
    # Title
    title_y = content_y + 26
    font_title = get_font(13, bold=True)
    title_text = pant["pantName"]
    # Truncate if needed
    if len(title_text) > 34:
        title_text = title_text[:32] + "..."
    draw.text((x + 12, title_y), title_text, fill=(15, 23, 42), font=font_title)
    
    # Divider line
    div_y = title_y + 24
    draw.line([x + 12, div_y, x + w - 12, div_y], fill=(241, 245, 249), width=1)
    
    # Details: Fit, Fabric, Shoes
    font_lbl = get_font(11, bold=True)
    font_val = get_font(11, bold=False)
    
    row1_y = div_y + 6
    draw.text((x + 12, row1_y), "Fit: ", fill=(109, 40, 217), font=font_lbl)
    lbl_w = font_lbl.getbbox("Fit: ")[2]
    draw.text((x + 12 + lbl_w, row1_y), pant["fit"][:24], fill=(51, 65, 85), font=font_val)
    
    row2_y = row1_y + 17
    draw.text((x + 12, row2_y), "Fabric: ", fill=(109, 40, 217), font=font_lbl)
    lbl_w = font_lbl.getbbox("Fabric: ")[2]
    draw.text((x + 12 + lbl_w, row2_y), pant["fabric"][:22], fill=(51, 65, 85), font=font_val)
    
    row3_y = row2_y + 17
    draw.text((x + 12, row3_y), "Shoes: ", fill=(109, 40, 217), font=font_lbl)
    lbl_w = font_lbl.getbbox("Shoes: ")[2]
    shoes_txt = pant["shoes"]
    if len(shoes_txt) > 28:
        shoes_txt = shoes_txt[:26] + ".."
    draw.text((x + 12 + lbl_w, row3_y), shoes_txt, fill=(51, 65, 85), font=font_val)

def build_pdf():
    # Page setup: 3 columns x 2 rows = 6 cards per page
    # Page 1: 5 Blue & Indigo pants (with special header banner card for 6th slot)
    # Page 2: 6 Black & Charcoal pants
    # Page 3: 2 Black & Charcoal + 2 Olive & Green + 2 Cream & White = 6 pants
    # Page 4: 8 Beige, Tan & Brown pants (3x3 grid on 4th page)
    
    pages = []
    
    # 1. PAGE 1: BLUE & INDIGO (5 pants + 1 summary feature card)
    p1 = Image.new("RGB", (PAGE_W, PAGE_H), (255, 255, 255))
    d1 = ImageDraw.Draw(p1)
    draw_header(d1, "BLUE & INDIGO DENIM (5 STYLES)", 1, 4)
    draw_footer(d1, 1, 4)
    
    cols = 3
    card_w = 360
    card_h = 490
    start_x = 45
    gap_x = 35
    start_y = 145
    gap_y = 35
    
    blue_pants = [p for p in PANTS_DATA if p["family"] == "Blue & Indigo"]
    for i, pant in enumerate(blue_pants):
        c = i % cols
        r = i // cols
        cx = start_x + c * (card_w + gap_x)
        cy = start_y + r * (card_h + gap_y)
        draw_pant_card(p1, pant, cx, cy, card_w, card_h)
    
    # 6th Slot on Page 1: Feature / Creator Palette Info Card
    slot6_x = start_x + 2 * (card_w + gap_x)
    slot6_y = start_y + 1 * (card_h + gap_y)
    d1.rounded_rectangle([slot6_x, slot6_y, slot6_x + card_w, slot6_y + card_h], radius=14, fill=(245, 243, 255), outline=(221, 214, 254), width=2)
    f_card_title = get_font(18, bold=True)
    f_card_body = get_font(13, bold=False)
    f_card_bold = get_font(13, bold=True)
    
    d1.text((slot6_x + 24, slot6_y + 35), "🎨 Color Harmony Guide", fill=(109, 40, 217), font=f_card_title)
    d1.text((slot6_x + 24, slot6_y + 75), "Denim Blue Color Rules:", fill=(15, 23, 42), font=f_card_bold)
    
    info_lines = [
        "• Light Wash Blue pairs best with White,",
        "  Pastel Lavender, Charcoal, and Navy.",
        "",
        "• Mid Indigo is universal — matches crisp",
        "  white, warm earth tones & black tops.",
        "",
        "• Ice Blue provides fresh summer contrast",
        "  with minimal white leather sneakers.",
        "",
        "Curated by Vedantheswar M (@vedhuu_u)",
        "Choose Your Tenue Master Edition"
    ]
    cur_y = slot6_y + 105
    for line in info_lines:
        d1.text((slot6_x + 24, cur_y), line, fill=(71, 85, 105), font=f_card_body)
        cur_y += 24
    
    pages.append(p1)
    
    # 2. PAGE 2: BLACK & CHARCOAL (6 pants)
    p2 = Image.new("RGB", (PAGE_W, PAGE_H), (255, 255, 255))
    d2 = ImageDraw.Draw(p2)
    draw_header(d2, "BLACK & CHARCOAL PANTS (PART 1)", 2, 4)
    draw_footer(d2, 2, 4)
    
    black_pants = [p for p in PANTS_DATA if p["family"] == "Black & Charcoal"]
    for i in range(min(6, len(black_pants))):
        pant = black_pants[i]
        c = i % cols
        r = i // cols
        cx = start_x + c * (card_w + gap_x)
        cy = start_y + r * (card_h + gap_y)
        draw_pant_card(p2, pant, cx, cy, card_w, card_h)
    
    pages.append(p2)
    
    # 3. PAGE 3: REMAINING BLACK (2) + OLIVE & GREEN (2) + CREAM & WHITE (2) = 6 PANTS
    p3 = Image.new("RGB", (PAGE_W, PAGE_H), (255, 255, 255))
    d3 = ImageDraw.Draw(p3)
    draw_header(d3, "BLACK, OLIVE & CREAM COLLECTION", 3, 4)
    draw_footer(d3, 3, 4)
    
    remaining_black = black_pants[6:8]
    green_pants = [p for p in PANTS_DATA if p["family"] == "Olive & Green"]
    cream_pants = [p for p in PANTS_DATA if p["family"] == "Cream & White"]
    
    p3_pants = remaining_black + green_pants + cream_pants
    for i, pant in enumerate(p3_pants):
        c = i % cols
        r = i // cols
        cx = start_x + c * (card_w + gap_x)
        cy = start_y + r * (card_h + gap_y)
        draw_pant_card(p3, pant, cx, cy, card_w, card_h)
    
    pages.append(p3)
    
    # 4. PAGE 4: BEIGE, TAN & BROWN (8 pants)
    # Compact 8-card grid (4 rows x 2 cols or 3 cols with adjusted height)
    # Let's do 3 columns x 3 rows with card_h = 470
    p4 = Image.new("RGB", (PAGE_W, PAGE_H), (255, 255, 255))
    d4 = ImageDraw.Draw(p4)
    draw_header(d4, "BEIGE, TAN & BROWN PANTS (8 STYLES)", 4, 4)
    draw_footer(d4, 4, 4)
    
    brown_pants = [p for p in PANTS_DATA if p["family"] == "Beige, Tan & Brown"]
    card_h4 = 470
    gap_y4 = 24
    
    for i in range(len(brown_pants)):
        pant = brown_pants[i]
        c = i % cols
        r = i // cols
        cx = start_x + c * (card_w + gap_x)
        cy = start_y + r * (card_h4 + gap_y4)
        draw_pant_card(p4, pant, cx, cy, card_w, card_h4)
    
    # 9th slot on Page 4: Official Conclusion & Contact Card
    slot9_x = start_x + 2 * (card_w + gap_x)
    slot9_y = start_y + 2 * (card_h4 + gap_y4)
    d4.rounded_rectangle([slot9_x, slot9_y, slot9_x + card_w, slot9_y + card_h4], radius=14, fill=(254, 243, 199), outline=(252, 211, 77), width=2)
    
    d4.text((slot9_x + 24, slot9_y + 35), "✨ Creator Attribution", fill=(146, 64, 14), font=f_card_title)
    d4.text((slot9_x + 24, slot9_y + 75), "Vedantheswar M", fill=(15, 23, 42), font=f_card_bold)
    
    credit_lines = [
        "📸 Instagram: @vedhuu_u",
        "✉️ Email: vedantheswarmalleal104@gmail.com",
        "",
        "Choose Your Tenue is an original color",
        "harmonization and wardrobe styling",
        "platform designed for effortless fashion.",
        "",
        "© 2026 Vedantheswar M.",
        "All Rights Reserved."
    ]
    cur_y = slot9_y + 105
    for line in credit_lines:
        d4.text((slot9_x + 24, cur_y), line, fill=(120, 53, 15), font=f_card_body)
        cur_y += 24
        
    pages.append(p4)
    
    # Save all pages as multi-page PDF!
    pdf_filename = "Choose_Your_Tenue_Pants_Catalog.pdf"
    pages[0].save(
        pdf_filename,
        "PDF",
        resolution=150.0,
        save_all=True,
        append_images=pages[1:]
    )
    print(f"Successfully generated {pdf_filename} with {len(pages)} pages!")

if __name__ == "__main__":
    build_pdf()
