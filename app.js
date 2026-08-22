/* ========================================================
   Choose Your Tenue - Complete Matching Engine
   Created by Mallela Vedantheswar (@vedhuu_u)
   Pants Categorized Exclusively by Color Families
   Clean Lookbook & Download (No Names)
   Desktop & Mobile Responsive Edition
   ======================================================== */

// --- MASTER PANTS CATALOG CATEGORIZED EXCLUSIVELY BY COLOR FAMILY ---
const MASTER_PANTS = [
  {
    id: 'up-1',
    colorFamily: 'blue',
    pantName: 'Light Washed Wide-Leg Skate Jeans',
    colorName: 'Light Wash Blue',
    hex: '#8DA8C4',
    image: 'images/pant_page_1.jpg',
    desc: 'Light vintage bleach wash with an effortless wide-leg skater silhouette.',
    shoes: 'Chunky Skate Sneakers (Vans / Dunks / Campus 00s)',
    vibe: 'Light Blue Wash',
    contrast: 'Bright & Airy',
    fabric: '13.5oz Washed Denim',
    fitType: 'Baggy Wide-Leg',
    styleTag: 'LIGHT WASH BLUE',
    tagClass: 'tag-blue'
  },
  {
    id: 'up-2',
    colorFamily: 'black',
    pantName: 'Washed Black Baggy Wide-Leg Jeans',
    colorName: 'Washed Charcoal Black',
    hex: '#232529',
    image: 'images/pant_page_2.jpg',
    desc: 'Deep faded charcoal black with relaxed wide thigh and ankle drape.',
    shoes: 'Black Canvas High-Tops or Chunky Retro Sneakers',
    vibe: 'Washed Charcoal Black',
    contrast: 'Muted Dark Neutral',
    fabric: 'Heavy Baggy Denim',
    fitType: 'Baggy Fit',
    styleTag: 'WASHED BLACK',
    tagClass: 'tag-black'
  },
  {
    id: 'up-3',
    colorFamily: 'blue',
    pantName: 'Ice Blue Relaxed Denim Jeans',
    colorName: 'Ice Blue Wash',
    hex: '#AEC6DB',
    image: 'images/pant_page_3.jpg',
    desc: 'Crisp ice blue wash with clean relaxed lines for everyday campus wear.',
    shoes: 'Clean White Minimalist Sneakers (Air Force / Stan Smith)',
    vibe: 'Ice Blue Wash',
    contrast: 'Fresh Ice Contrast',
    fabric: '100% Cotton Denim',
    fitType: 'Relaxed Fit',
    styleTag: 'ICE BLUE',
    tagClass: 'tag-blue'
  },
  {
    id: 'up-4',
    colorFamily: 'blue',
    pantName: 'Vintage Ocean Blue Wide-Leg Jeans',
    colorName: 'Ocean Blue Denim',
    hex: '#3D5E7A',
    image: 'images/pant_page_4.jpg',
    desc: 'Classic mid-to-dark ocean wash with relaxed straight wide leg.',
    shoes: 'Brown Leather Chelsea Boots or White Low-Tops',
    vibe: 'Ocean Blue Denim',
    contrast: 'Classic Denim Contrast',
    fabric: 'Raw Vintage Denim',
    fitType: 'Straight Wide Fit',
    styleTag: 'OCEAN BLUE',
    tagClass: 'tag-blue'
  },
  {
    id: 'up-5',
    colorFamily: 'cream',
    pantName: 'Cream Linen Drawstring Resort Trousers',
    colorName: 'Cream / Off-White',
    hex: '#EBE5D8',
    image: 'images/pant_page_5.jpg',
    desc: 'Pure breathable linen blend in off-white ecru with elastic drawstring waist.',
    shoes: 'Beige Suede Loafers or Leather Espadrilles',
    vibe: 'Cream / Off-White Linen',
    contrast: 'Soft Cream Glow',
    fabric: '100% French Linen',
    fitType: 'Relaxed Fit',
    styleTag: 'CREAM ECRU',
    tagClass: 'tag-cream'
  },
  {
    id: 'up-6',
    colorFamily: 'blue',
    pantName: 'Classic Mid-Indigo Wide Straight Jeans',
    colorName: 'Mid-Blue Indigo',
    hex: '#28466E',
    image: 'images/pant_page_6.jpg',
    desc: 'Rich royal mid-blue indigo denim that pairs with virtually any shirt tone.',
    shoes: 'Brown Leather Boots or Retro Runners (NB 550)',
    vibe: 'Mid-Blue Indigo',
    contrast: 'Versatile Blue',
    fabric: 'Selvedge Cotton Denim',
    fitType: 'Straight Fit',
    styleTag: 'MID INDIGO',
    tagClass: 'tag-blue'
  },
  {
    id: 'up-7',
    colorFamily: 'brown',
    pantName: 'Desert Khaki Multi-Pocket Cargo Pants',
    colorName: 'Desert Khaki Tan',
    hex: '#C8B28B',
    image: 'images/pant_page_7.jpg',
    desc: 'Heavy-duty tactical cargo with top flaps and oversized side bellows pockets.',
    shoes: 'Tan Nubuck Timberland Boots or Chunky Runners',
    vibe: 'Desert Khaki Tan',
    contrast: 'Warm Sand Neutral',
    fabric: 'Cotton Ripstop Twill',
    fitType: 'Baggy Cargo Fit',
    styleTag: 'DESERT KHAKI',
    tagClass: 'tag-brown'
  },
  {
    id: 'up-8',
    colorFamily: 'black',
    pantName: 'Jet Black Wide-Leg Tailored Slacks',
    colorName: 'Jet Black',
    hex: '#111317',
    image: 'images/pant_page_8.jpg',
    desc: 'Sharp front crease with flowing wide-leg silhouette. Runway tailoring.',
    shoes: 'Polished Black Leather Dress Shoes or Loafers',
    vibe: 'Deep Jet Black',
    contrast: 'Bold Monochrome',
    fabric: 'Italian Wool Twill',
    fitType: 'Wide Tailored Fit',
    styleTag: 'JET BLACK',
    tagClass: 'tag-black'
  },
  {
    id: 'up-9',
    colorFamily: 'black',
    pantName: 'Black Pinstripe Drawstring Pleated Trousers',
    colorName: 'Black Chalk Pinstripe',
    hex: '#181A1F',
    image: 'images/pant_page_9.jpg',
    desc: 'Refined subtle chalk pinstripes with relaxed elastic waistband and front pleats.',
    shoes: 'Black Leather Penny Loafers or Monk Straps',
    vibe: 'Black Chalk Pinstripe',
    contrast: 'Subtle Pinstripe Texture',
    fabric: 'Wool Pinstripe Blend',
    fitType: 'Relaxed Pleated Fit',
    styleTag: 'PINSTRIPE BLACK',
    tagClass: 'tag-black'
  },
  {
    id: 'up-10',
    colorFamily: 'green',
    pantName: 'Army Olive Green Relaxed Cargo Pants',
    colorName: 'Army Olive Green',
    hex: '#48573D',
    image: 'images/pant_page_10.jpg',
    desc: 'Military green utility cargo with knee dart shaping and deep side pockets.',
    shoes: 'Green/White Runners or Black Work Boots',
    vibe: 'Army Olive Green',
    contrast: 'Earthy Olive Contrast',
    fabric: 'Durable Cotton Twill',
    fitType: 'Relaxed Cargo Fit',
    styleTag: 'ARMY OLIVE',
    tagClass: 'tag-green'
  },
  {
    id: 'up-11',
    colorFamily: 'blue',
    pantName: 'Mid-Wash Denim Utility Cargo Jeans',
    colorName: 'Denim Blue Cargo',
    hex: '#476587',
    image: 'images/pant_page_11.jpg',
    desc: 'Hybrid cargo jeans featuring double denim thigh pockets and carpenter loop.',
    shoes: 'Skate High-Tops or Retro Runners',
    vibe: 'Denim Blue Cargo',
    contrast: 'Denim Utility',
    fabric: 'Heavy Denim Twill',
    fitType: 'Baggy Cargo Fit',
    styleTag: 'DENIM BLUE',
    tagClass: 'tag-blue'
  },
  {
    id: 'up-12',
    colorFamily: 'black',
    pantName: 'Washed Charcoal Grey Straight Jeans',
    colorName: 'Mineral Charcoal Grey',
    hex: '#60646D',
    image: 'images/pant_page_12.jpg',
    desc: 'Mineral washed grey denim with subtle fading across knees and thigh.',
    shoes: 'White Leather Low-Tops or Black Boots',
    vibe: 'Mineral Charcoal Grey',
    contrast: 'Grayscale Neutral',
    fabric: '13oz Ring-Spun Denim',
    fitType: 'Straight Fit',
    styleTag: 'CHARCOAL GREY',
    tagClass: 'tag-black'
  },
  {
    id: 'up-13',
    colorFamily: 'brown',
    pantName: 'Sand Beige Drawstring Cargo Joggers',
    colorName: 'Sand Beige',
    hex: '#D7D1C2',
    image: 'images/pant_page_13.jpg',
    desc: 'Lightweight sand beige cargo with drawstring comfort waist and clean hems.',
    shoes: 'Beige Suede Runners or White Sneakers',
    vibe: 'Sand Beige',
    contrast: 'Bright Sand Neutral',
    fabric: 'Soft Cotton Poplin',
    fitType: 'Relaxed Fit',
    styleTag: 'SAND BEIGE',
    tagClass: 'tag-brown'
  },
  {
    id: 'up-14',
    colorFamily: 'black',
    pantName: 'Dark Slate Charcoal Utility Cargo Pants',
    colorName: 'Dark Slate Charcoal',
    hex: '#373C42',
    image: 'images/pant_page_14.jpg',
    desc: 'Low-profile charcoal tactical utility pants with reinforced knees.',
    shoes: 'Black Tactical Boots or Chunky Runners',
    vibe: 'Dark Slate Charcoal',
    contrast: 'Dark Slate Contrast',
    fabric: 'Ripstop Heavy Twill',
    fitType: 'Baggy Cargo Fit',
    styleTag: 'DARK SLATE',
    tagClass: 'tag-black'
  },
  {
    id: 'up-15',
    colorFamily: 'green',
    pantName: 'Olive Green Corduroy Relaxed Trousers',
    colorName: 'Olive Green Corduroy',
    hex: '#4F5338',
    image: 'images/pant_page_15.jpg',
    desc: 'Rich fine-wale olive corduroy trousers with warm velvety texture.',
    shoes: 'Dark Brown Suede Chelsea Boots or Loafers',
    vibe: 'Olive Green Corduroy',
    contrast: 'Textured Earth Tone',
    fabric: '100% Cotton Corduroy',
    fitType: 'Relaxed Fit',
    styleTag: 'OLIVE GREEN',
    tagClass: 'tag-green'
  },
  {
    id: 'up-16',
    colorFamily: 'brown',
    pantName: 'Tan Brown Corduroy Relaxed Trousers',
    colorName: 'Tan Brown Corduroy',
    hex: '#8E6743',
    image: 'images/pant_page_16.jpg',
    desc: 'Vintage autumn tan brown corduroy offering rich depth and classic warmth.',
    shoes: 'Brown Leather Brogues or White Canvas Low-Tops',
    vibe: 'Tan Brown Corduroy',
    contrast: 'Warm Camel Corduroy',
    fabric: 'Fine-Wale Corduroy',
    fitType: 'Relaxed Fit',
    styleTag: 'TAN BROWN',
    tagClass: 'tag-brown'
  },
  {
    id: 'up-17',
    colorFamily: 'brown',
    pantName: 'Sand Camel Double-Knee Carpenter Pants',
    colorName: 'Sand Camel Canvas',
    hex: '#BE9F76',
    image: 'images/pant_page_17.jpg',
    desc: 'Workwear heritage carpenter pants with double-panel knee patches and side tool loop.',
    shoes: 'Work Boots (Red Wing / Timberland) or Skate Shoes',
    vibe: 'Sand Camel Canvas',
    contrast: 'Camel Canvas',
    fabric: 'Heavy Duck Canvas',
    fitType: 'Baggy Carpenter Fit',
    styleTag: 'SAND CAMEL',
    tagClass: 'tag-brown'
  },
  {
    id: 'up-18',
    colorFamily: 'brown',
    pantName: 'Khaki Tactical Flap-Pocket Cargo Pants',
    colorName: 'Classic Khaki Tan',
    hex: '#CBB28D',
    image: 'images/pant_page_18.jpg',
    desc: 'Clean tailored straight-leg military cargo in versatile khaki tan.',
    shoes: 'Brown Leather Boots or White Sneakers',
    vibe: 'Classic Khaki Tan',
    contrast: 'Classic Khaki',
    fabric: 'Cotton Twill',
    fitType: 'Straight Fit',
    styleTag: 'KHAKI TAN',
    tagClass: 'tag-brown'
  },
  {
    id: 'up-19',
    colorFamily: 'black',
    pantName: 'Obsidian Black Contrast-Stitch Straight Jeans',
    colorName: 'Obsidian Black',
    hex: '#141416',
    image: 'images/pant_page_19.jpg',
    desc: 'Deep jet black denim highlighted with sharp white contrast topstitching.',
    shoes: 'Black Leather Loafers or White Minimalist Sneakers',
    vibe: 'Obsidian Black',
    contrast: 'High Contrast Stitch',
    fabric: 'Rigid Black Denim',
    fitType: 'Straight Fit',
    styleTag: 'OBSIDIAN BLACK',
    tagClass: 'tag-black'
  },
  {
    id: 'up-20',
    colorFamily: 'black',
    pantName: 'Black Contrast-Stitch Wide Skate Cargo Pants',
    colorName: 'Jet Black Utility',
    hex: '#121316',
    image: 'images/pant_page_20.jpg',
    desc: 'Oversized black utility skate pants with white stitching and deep utility pockets.',
    shoes: 'Chunky Skate Sneakers or Combat Boots',
    vibe: 'Jet Black Utility',
    contrast: 'Monochrome Detail',
    fabric: 'Heavy Cotton Twill',
    fitType: 'Baggy Wide-Leg Fit',
    styleTag: 'JET BLACK',
    tagClass: 'tag-black'
  },
  {
    id: 'up-21',
    colorFamily: 'cream',
    pantName: 'Ecru Off-White Seam-Detail Relaxed Trousers',
    colorName: 'Ecru Off-White',
    hex: '#EAE6DB',
    image: 'images/pant_page_21.jpg',
    desc: 'Architectural front-seam tailoring in light ecru canvas. Modern minimalism.',
    shoes: 'Tan Suede Loafers or White Low-Tops',
    vibe: 'Ecru Off-White',
    contrast: 'Clean Off-White',
    fabric: 'Cotton-Linen Canvas',
    fitType: 'Relaxed Straight Fit',
    styleTag: 'ECRU WHITE',
    tagClass: 'tag-cream'
  },
  {
    id: 'up-22',
    colorFamily: 'brown',
    pantName: 'Desert Sand Wide-Leg Multi-Pocket Cargo',
    colorName: 'Desert Sand Tan',
    hex: '#C9B592',
    image: 'images/pant_page_22.jpg',
    desc: 'Wide-leg loose drape cargo trousers with flap side and calf pockets.',
    shoes: 'Chunky Trail Shoes or Jordan 1 Lows',
    vibe: 'Desert Sand Tan',
    contrast: 'Warm Sand Neutral',
    fabric: 'Heavy Washed Twill',
    fitType: 'Baggy Fit',
    styleTag: 'DESERT SAND',
    tagClass: 'tag-brown'
  },
  {
    id: 'up-23',
    colorFamily: 'black',
    pantName: 'Faded Ombré Charcoal Skate Jeans',
    colorName: 'Faded Charcoal Black',
    hex: '#2B2D32',
    image: 'images/pant_page_23.jpg',
    desc: 'Gradual vintage fade from deep black waist into washed grey knees and leg.',
    shoes: 'Vans Knu Skool or Chunky Dunks',
    vibe: 'Faded Charcoal Black',
    contrast: 'Ombré Charcoal',
    fabric: '14oz Fade-Washed Denim',
    fitType: 'Baggy Fit',
    styleTag: 'FADED CHARCOAL',
    tagClass: 'tag-black'
  },
  {
    id: 'up-24',
    colorFamily: 'brown',
    pantName: 'Chocolate Brown Vintage Corduroy Wide Pants',
    colorName: 'Chocolate Brown',
    hex: '#5E483B',
    image: 'images/pant_page_25.jpg',
    desc: 'Rich deep chocolate brown corduroy with relaxed wide silhouette.',
    shoes: 'Dark Brown Boots or White Sneakers',
    vibe: 'Chocolate Brown',
    contrast: 'Rich Earth Contrast',
    fabric: 'Washed Heavy Corduroy',
    fitType: 'Wide Relaxed Fit',
    styleTag: 'CHOCOLATE BROWN',
    tagClass: 'tag-brown'
  },
  {
    id: 'up-25',
    colorFamily: 'brown',
    pantName: 'Washed Sand Beige Baggy Wide-Leg Jeans',
    colorName: 'Sand Beige Wash',
    hex: '#D7C4A5',
    image: 'images/pant_page_26.jpg',
    desc: 'Warm tinted sand denim with baggy 90s skater cut and soft drape.',
    shoes: 'White Retro Sneakers or Brown Loafers',
    vibe: 'Sand Beige Wash',
    contrast: 'Warm Neutral Glow',
    fabric: 'Tinted Washed Denim',
    fitType: 'Baggy Wide-Leg Fit',
    styleTag: 'SAND BEIGE',
    tagClass: 'tag-brown'
  }
];

// --- SHIRT COLOR DATA WITH SMART COLOR PAIRINGS ---
const SHIRT_COLORS_DATA = {
  white: {
    id: 'white',
    name: 'Crisp White',
    hex: '#FFFFFF',
    combos: MASTER_PANTS
  },
  lightblue: {
    id: 'lightblue',
    name: 'Light / Sky Blue',
    hex: '#93C5FD',
    combos: [
      MASTER_PANTS[5], // Mid Indigo (Blue)
      MASTER_PANTS[1], // Washed Black (Black)
      MASTER_PANTS[4], // Cream Linen (Cream)
      MASTER_PANTS[6], // Desert Khaki (Brown)
      MASTER_PANTS[9], // Army Olive (Green)
      MASTER_PANTS[11], // Washed Charcoal (Black)
      MASTER_PANTS[14], // Olive Corduroy (Green)
      MASTER_PANTS[15], // Tan Corduroy (Brown)
      MASTER_PANTS[16], // Sand Camel (Brown)
      MASTER_PANTS[17], // Khaki Cargo (Brown)
      MASTER_PANTS[20], // Ecru Seam (Cream)
      MASTER_PANTS[23], // Chocolate Brown (Brown)
      MASTER_PANTS[24]  // Sand Beige (Brown)
    ]
  },
  navy: {
    id: 'navy',
    name: 'Classic Navy Blue',
    hex: '#1E293B',
    combos: [
      MASTER_PANTS[6], // Desert Khaki (Brown)
      MASTER_PANTS[0], // Light Washed (Blue)
      MASTER_PANTS[4], // Cream Linen (Cream)
      MASTER_PANTS[15], // Tan Corduroy (Brown)
      MASTER_PANTS[16], // Sand Camel (Brown)
      MASTER_PANTS[12], // Sand Beige (Brown)
      MASTER_PANTS[8], // Black Pinstripe (Black)
      MASTER_PANTS[9], // Army Olive (Green)
      MASTER_PANTS[11], // Washed Charcoal (Black)
      MASTER_PANTS[20], // Ecru Seam (Cream)
      MASTER_PANTS[23], // Chocolate Brown (Brown)
      MASTER_PANTS[24]  // Sand Beige (Brown)
    ]
  },
  black: {
    id: 'black',
    name: 'Sleek Black',
    hex: '#18181B',
    combos: [
      MASTER_PANTS[0], // Light Washed (Blue)
      MASTER_PANTS[2], // Ice Blue (Blue)
      MASTER_PANTS[6], // Desert Khaki (Brown)
      MASTER_PANTS[9], // Army Olive (Green)
      MASTER_PANTS[11], // Washed Charcoal (Black)
      MASTER_PANTS[13], // Dark Slate (Black)
      MASTER_PANTS[14], // Olive Corduroy (Green)
      MASTER_PANTS[15], // Tan Corduroy (Brown)
      MASTER_PANTS[16], // Sand Camel (Brown)
      MASTER_PANTS[18], // Obsidian Black (Black)
      MASTER_PANTS[19], // Jet Black Cargo (Black)
      MASTER_PANTS[20], // Ecru Seam (Cream)
      MASTER_PANTS[22], // Faded Ombre (Black)
      MASTER_PANTS[24]  // Sand Beige (Brown)
    ]
  },
  charcoal: {
    id: 'charcoal',
    name: 'Charcoal / Dark Grey',
    hex: '#334155',
    combos: [
      MASTER_PANTS[0], // Light Washed (Blue)
      MASTER_PANTS[2], // Ice Blue (Blue)
      MASTER_PANTS[4], // Cream Linen (Cream)
      MASTER_PANTS[6], // Desert Khaki (Brown)
      MASTER_PANTS[9], // Army Olive (Green)
      MASTER_PANTS[15], // Tan Corduroy (Brown)
      MASTER_PANTS[16], // Sand Camel (Brown)
      MASTER_PANTS[19], // Black Cargo (Black)
      MASTER_PANTS[20], // Ecru Seam (Cream)
      MASTER_PANTS[24]  // Sand Beige (Brown)
    ]
  },
  olive: {
    id: 'olive',
    name: 'Olive / Army Green',
    hex: '#556B2F',
    combos: [
      MASTER_PANTS[6], // Desert Khaki (Brown)
      MASTER_PANTS[15], // Tan Corduroy (Brown)
      MASTER_PANTS[16], // Sand Camel (Brown)
      MASTER_PANTS[1], // Washed Black (Black)
      MASTER_PANTS[4], // Cream Linen (Cream)
      MASTER_PANTS[11], // Washed Charcoal (Black)
      MASTER_PANTS[18], // Black Contrast Stitch (Black)
      MASTER_PANTS[20], // Ecru Seam (Cream)
      MASTER_PANTS[23], // Chocolate Brown (Brown)
      MASTER_PANTS[24]  // Sand Beige (Brown)
    ]
  },
  maroon: {
    id: 'maroon',
    name: 'Maroon / Burgundy',
    hex: '#721C24',
    combos: [
      MASTER_PANTS[5], // Mid Indigo (Blue)
      MASTER_PANTS[6], // Desert Khaki (Brown)
      MASTER_PANTS[15], // Tan Corduroy (Brown)
      MASTER_PANTS[16], // Sand Camel (Brown)
      MASTER_PANTS[1], // Washed Black (Black)
      MASTER_PANTS[7], // Jet Black (Black)
      MASTER_PANTS[11], // Washed Charcoal (Black)
      MASTER_PANTS[18], // Black Contrast Stitch (Black)
      MASTER_PANTS[20], // Ecru Seam (Cream)
      MASTER_PANTS[24]  // Sand Beige (Brown)
    ]
  }
};

// --- APP STATE ---
const state = {
  user: {
    name: '',
    age: null
  },
  currentShirtKey: 'white',
  activeColorFilter: 'all',
  selectedPantCombo: null,
  uploadedImageSrc: null
};

// --- DOM ELEMENTS ---
const elements = {
  // Login
  loginSection: document.getElementById('loginSection'),
  loginForm: document.getElementById('loginForm'),
  userNameInput: document.getElementById('userName'),
  userAgeInput: document.getElementById('userAge'),

  // Header, Support Dropdown & User Badge
  supportDropdown: document.getElementById('supportDropdown'),
  userProfileBadge: document.getElementById('userProfileBadge'),
  displayUserName: document.getElementById('displayUserName'),
  displayUserAge: document.getElementById('displayUserAge'),
  logoutBtn: document.getElementById('logoutBtn'),

  // Main Studio
  mainStudio: document.getElementById('mainStudio'),

  // Upload Zone
  dropZone: document.getElementById('dropZone'),
  shirtImageInput: document.getElementById('shirtImageInput'),
  dropZoneContent: document.getElementById('dropZoneContent'),
  uploadStatus: document.getElementById('uploadStatus'),
  imageControls: document.getElementById('imageControls'),
  detectedColorLabel: document.getElementById('detectedColorLabel'),
  removeImageBtn: document.getElementById('removeImageBtn'),
  colorCanvas: document.getElementById('colorCanvas'),
  lookbookExportCanvas: document.getElementById('lookbookExportCanvas'),

  // Left Seamless Visualizer (3/4 Shirt Top + 3/4 Real Pant Below - No Names)
  lookbookPreviewCard: document.getElementById('lookbookPreviewCard'),
  lookbookCaptureZone: document.getElementById('lookbookCaptureZone'),
  uploadedPhotoPreview: document.getElementById('uploadedPhotoPreview'),
  visualizerPantRealImg: document.getElementById('visualizerPantRealImg'),

  // Advice & Meta
  stylingShoeAdvice: document.getElementById('stylingShoeAdvice'),
  vibePill: document.getElementById('vibePill'),
  contrastPill: document.getElementById('contrastPill'),
  fabricPill: document.getElementById('fabricPill'),

  // Download Lookbook Button
  downloadLookbookBtn: document.getElementById('downloadLookbookBtn'),
  downloadBtnText: document.getElementById('downloadBtnText'),

  // Right Pane (Combos & Counts)
  combosCard: document.getElementById('combosCard'),
  personalizedAgeTip: document.getElementById('personalizedAgeTip'),
  pantColorFilter: document.getElementById('pantColorFilter'),
  combosListContainer: document.getElementById('combosListContainer'),
  countAll: document.getElementById('countAll'),
  countBlue: document.getElementById('countBlue'),
  countBlack: document.getElementById('countBlack'),
  countGreen: document.getElementById('countGreen'),
  countCream: document.getElementById('countCream'),
  countBrown: document.getElementById('countBrown'),

  // Floating Easy Scroll Bar
  floatingScrollBar: document.getElementById('floatingScrollBar'),
  scrollToTopBtn: document.getElementById('scrollToTopBtn'),
  scrollToLookbookBtn: document.getElementById('scrollToLookbookBtn'),

  // Creator Data Vault (Private)
  adminVaultModal: document.getElementById('adminVaultModal'),
  closeVaultBtn: document.getElementById('closeVaultBtn'),
  vaultAuthSection: document.getElementById('vaultAuthSection'),
  vaultAuthForm: document.getElementById('vaultAuthForm'),
  vaultPinInput: document.getElementById('vaultPinInput'),
  vaultAuthError: document.getElementById('vaultAuthError'),
  vaultDashboardSection: document.getElementById('vaultDashboardSection'),
  vaultTotalUsers: document.getElementById('vaultTotalUsers'),
  vaultAvgAge: document.getElementById('vaultAvgAge'),
  vaultTotalVisits: document.getElementById('vaultTotalVisits'),
  vaultSearchInput: document.getElementById('vaultSearchInput'),
  vaultTableBody: document.getElementById('vaultTableBody'),
  exportCsvBtn: document.getElementById('exportCsvBtn'),
  clearVaultBtn: document.getElementById('clearVaultBtn'),
  lockVaultBtn: document.getElementById('lockVaultBtn')
};

// ========================================================
// INITIALIZATION & USER PROFILE MANAGEMENT
// ========================================================
function initApp() {
  bindEvents();
  bindVaultEvents();
  loadSavedUser();
}

function loadSavedUser() {
  const savedName = localStorage.getItem('huestyle_user_name');
  const savedAge = localStorage.getItem('huestyle_user_age');

  if (savedName && savedAge) {
    state.user.name = savedName;
    state.user.age = parseInt(savedAge, 10);
    recordUserInVault(state.user.name, state.user.age);
    showStudio();
  }
}

function saveUser(name, age) {
  state.user.name = name.trim();
  state.user.age = parseInt(age, 10);

  localStorage.setItem('huestyle_user_name', state.user.name);
  localStorage.setItem('huestyle_user_age', state.user.age);

  // Record user permanently in the private Creator Data Vault
  recordUserInVault(state.user.name, state.user.age);

  showStudio();
}

// ========================================================
// GOOGLE SHEETS LIVE CLOUD DATABASE CONFIGURATION
// ========================================================
// Paste your Google Apps Script Web App URL below to sync all worldwide visitors:
const GOOGLE_SHEET_API_URL = ''; // e.g. 'https://script.google.com/macros/s/.../exec'

// Record User into Private Creator Vault & Sync to Google Sheet
function recordUserInVault(name, age) {
  try {
    let vault = JSON.parse(localStorage.getItem('huestyle_users_vault') || '[]');
    const now = new Date().toISOString();
    const existingIndex = vault.findIndex(u => u.name.toLowerCase() === name.toLowerCase());

    if (existingIndex !== -1) {
      vault[existingIndex].age = age;
      vault[existingIndex].lastLogin = now;
      vault[existingIndex].loginCount = (vault[existingIndex].loginCount || 1) + 1;
    } else {
      vault.push({
        id: 'usr_' + Date.now(),
        name: name,
        age: age,
        createdAt: now,
        lastLogin: now,
        loginCount: 1
      });
    }

    localStorage.setItem('huestyle_users_vault', JSON.stringify(vault));

    // Live Sync to Google Sheets Cloud Database
    syncToGoogleSheet(name, age, now);
  } catch (e) {
    console.error('Could not record user into vault:', e);
  }
}

// Send Visitor Data to Google Sheet
function syncToGoogleSheet(name, age, timestamp) {
  if (!GOOGLE_SHEET_API_URL || GOOGLE_SHEET_API_URL.trim() === '') {
    return; // Google Sheet URL not configured yet
  }

  try {
    fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        age: age,
        timestamp: timestamp || new Date().toLocaleString(),
        device: window.innerWidth <= 768 ? 'Mobile' : 'Desktop'
      })
    }).catch(err => console.log('Google sheet sync background notice:', err));
  } catch (err) {
    console.log('Sheet sync notice:', err);
  }
}

function showStudio() {
  elements.loginSection.classList.add('hidden');
  elements.mainStudio.classList.remove('hidden');
  elements.userProfileBadge.classList.remove('hidden');

  elements.displayUserName.textContent = state.user.name;
  elements.displayUserAge.textContent = `Age ${state.user.age}`;

  updateAgeStylingTip();
  updateShirtSelection(state.currentShirtKey);
}

function handleLogout() {
  localStorage.removeItem('huestyle_user_name');
  localStorage.removeItem('huestyle_user_age');
  state.user.name = '';
  state.user.age = null;

  elements.mainStudio.classList.add('hidden');
  elements.userProfileBadge.classList.add('hidden');
  elements.loginSection.classList.remove('hidden');
  elements.userNameInput.value = '';
  elements.userAgeInput.value = '';
}

// Age-based styling customized advice
function updateAgeStylingTip() {
  const age = state.user.age || 22;
  let tipText = '';

  if (age <= 22) {
    tipText = `Hey ${state.user.name}! At age ${age}, Light Blue Washed Jeans, Washed Charcoal Black, and Desert Tan Cargo are trending choices.`;
  } else if (age <= 30) {
    tipText = `Looking sharp, ${state.user.name}! At age ${age}, Mid Indigo Denim, Earthy Olive Green, and Off-White Cream give effortless style.`;
  } else if (age <= 45) {
    tipText = `Distinguished look, ${state.user.name}! At age ${age}, Jet Black Slacks, Cream Linen, and Deep Indigo Denim stand out.`;
  } else {
    tipText = `Timeless elegance, ${state.user.name}! Classic Black Trousers, Cream Linen slacks, and refined Tan Corduroy offer sophisticated harmony.`;
  }

  elements.personalizedAgeTip.textContent = tipText;
}

// ========================================================
// SHIRT & COMBOS MATCHING
// ========================================================
function updateShirtSelection(colorKey) {
  const selectedKey = SHIRT_COLORS_DATA[colorKey] ? colorKey : 'white';
  state.currentShirtKey = selectedKey;
  const shirtData = SHIRT_COLORS_DATA[selectedKey];

  // Update Count Badges on Color Filters
  updateColorCounts(shirtData.combos);

  // Select first recommended pant by default
  state.selectedPantCombo = shirtData.combos[0];
  renderPantVisualizer(state.selectedPantCombo);

  // Render Combos on Right Pane
  renderCombosList();
}

function updateColorCounts(combos) {
  elements.countAll.textContent = combos.length;
  elements.countBlue.textContent = combos.filter(c => c.colorFamily === 'blue').length;
  elements.countBlack.textContent = combos.filter(c => c.colorFamily === 'black').length;
  elements.countGreen.textContent = combos.filter(c => c.colorFamily === 'green').length;
  elements.countCream.textContent = combos.filter(c => c.colorFamily === 'cream').length;
  elements.countBrown.textContent = combos.filter(c => c.colorFamily === 'brown').length;
}

// ========================================================
// COMBOS LIST RENDERING
// ========================================================
function renderCombosList() {
  const shirtData = SHIRT_COLORS_DATA[state.currentShirtKey] || SHIRT_COLORS_DATA.white;
  if (!shirtData) return;

  const colorFilter = state.activeColorFilter;
  const filteredCombos = shirtData.combos.filter(combo => {
    if (colorFilter === 'all') return true;
    return combo.colorFamily === colorFilter;
  });

  elements.combosListContainer.innerHTML = '';

  if (filteredCombos.length === 0) {
    elements.combosListContainer.innerHTML = `
      <div style="text-align:center; padding: 2rem; color: var(--text-dim);">
        <p>No pants found in this color category. Click '✨ All Colors' to view all available pairings.</p>
      </div>
    `;
    return;
  }

  filteredCombos.forEach(combo => {
    const isSelected = state.selectedPantCombo && state.selectedPantCombo.id === combo.id;

    const item = document.createElement('div');
    item.className = `combo-item ${isSelected ? 'selected' : ''}`;
    
    const tagClass = combo.tagClass || 'tag-blue';
    const pantImgSrc = combo.image || 'images/pant_page_1.jpg';

    item.innerHTML = `
      <div class="combo-thumb-box">
        <img src="${pantImgSrc}" alt="${combo.pantName}" class="combo-thumb-img">
      </div>
      <div class="combo-info">
        <div class="combo-title-row">
          <span class="combo-title">${combo.pantName}</span>
          <span class="category-tag ${tagClass}">${combo.styleTag || combo.colorName}</span>
        </div>
        <p class="combo-desc">${combo.desc}</p>
        <div class="combo-shoes-row">
          <strong>Best Shoes:</strong> ${combo.shoes}
        </div>
      </div>
      <button class="combo-action-btn" type="button">
        ${isSelected ? '✓ Paired' : 'Select'}
      </button>
    `;

    // Click to select & pair pant
    item.addEventListener('click', () => {
      state.selectedPantCombo = combo;
      renderPantVisualizer(combo);
      renderCombosList();

      // On mobile screens, auto-scroll to the lookbook smoothly
      if (window.innerWidth <= 1040) {
        elements.lookbookPreviewCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    elements.combosListContainer.appendChild(item);
  });
}

function renderPantVisualizer(combo) {
  if (!combo) return;

  // Update 3/4 Real Pant Photo seamlessly below the shirt
  const imgSrc = combo.image || 'images/pant_page_1.jpg';
  elements.visualizerPantRealImg.src = imgSrc;

  // Update Styling Advice Box (No Pant Name)
  elements.stylingShoeAdvice.textContent = `Pair with ${combo.shoes}.`;
  elements.vibePill.textContent = combo.colorName || 'Pant Color';
  elements.contrastPill.textContent = combo.contrast || 'Balanced Harmony';
  elements.fabricPill.textContent = combo.fabric || 'Quality Fabric';
}

// ========================================================
// DOWNLOADABLE OUTFIT LOOKBOOK (CLEAN PHOTO - NO NAMES)
// ========================================================
function downloadOutfitLookbook() {
  const shirtImg = elements.uploadedPhotoPreview;
  const pantImg = elements.visualizerPantRealImg;
  const combo = state.selectedPantCombo;

  if (!combo || !shirtImg || !pantImg) return;

  elements.downloadBtnText.textContent = 'Generating Lookbook...';
  elements.downloadLookbookBtn.disabled = true;

  const canvas = elements.lookbookExportCanvas;
  const ctx = canvas.getContext('2d');

  // Clean High-Resolution Lookbook Dimensions (1080 x 1400 px)
  const width = 1080;
  const height = 1400;
  canvas.width = width;
  canvas.height = height;

  // 1. Studio Background Gradient (Ultra Clean Aesthetic)
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, '#F8FAFC');
  bgGrad.addColorStop(0.5, '#EDE9FE');
  bgGrad.addColorStop(1, '#F5F3FF');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Background Frosted Card Box
  const cardX = 35;
  const cardY = 35;
  const cardW = width - 70;
  const cardH = height - 70;
  const cardRadius = 28;

  ctx.save();
  drawRoundedRect(ctx, cardX, cardY, cardW, cardH, cardRadius);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#FFFFFF';
  ctx.stroke();
  ctx.restore();

  // 2. Pure Visual Combined Outfit Frame (3/4 Shirt + 3/4 Pant - NO NAMES)
  const frameX = 70;
  const frameY = 70;
  const frameW = width - 140;
  const shirtH = 550; // 3/4 Shirt Height
  const pantH = 590;  // 3/4 Pant Height
  const totalFrameH = shirtH + pantH;

  // Dark studio backdrop inside outfit frame
  ctx.save();
  drawRoundedRect(ctx, frameX, frameY, frameW, totalFrameH, 24);
  ctx.fillStyle = '#0B0F19';
  ctx.fill();
  ctx.clip();

  // Draw 3/4 Shirt on Top
  drawImageThreeQuarter(ctx, shirtImg, frameX, frameY, frameW, shirtH, 0.2);

  // Draw Clean Seam Divider
  const seamY = frameY + shirtH;
  const seamGrad = ctx.createLinearGradient(frameX, seamY, frameX + frameW, seamY);
  seamGrad.addColorStop(0, 'rgba(255,255,255,0.05)');
  seamGrad.addColorStop(0.5, 'rgba(255,255,255,0.65)');
  seamGrad.addColorStop(1, 'rgba(255,255,255,0.05)');
  ctx.fillStyle = seamGrad;
  ctx.fillRect(frameX, seamY - 1.5, frameW, 3);

  // Draw 3/4 Pant on Bottom
  drawImageThreeQuarter(ctx, pantImg, frameX, seamY, frameW, pantH, 0.15);
  ctx.restore();

  // Specular Border around Outfit Frame
  ctx.save();
  drawRoundedRect(ctx, frameX, frameY, frameW, totalFrameH, 24);
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.stroke();
  ctx.restore();

  // 3. Footwear Styling Box Below (Pure Style Tips - NO NAMES)
  const infoY = frameY + totalFrameH + 20;
  const infoH = 110;
  ctx.save();
  drawRoundedRect(ctx, frameX, infoY, frameW, infoH, 18);
  ctx.fillStyle = 'rgba(237, 233, 254, 0.88)';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(196, 181, 253, 0.85)';
  ctx.stroke();

  // Shoes Recommendation
  ctx.fillStyle = '#1E293B';
  ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`👟 Footwear Pairing: ${combo.shoes}`, frameX + 28, infoY + 45);

  // Pills Row (Color Tone & Fabric)
  ctx.fillStyle = '#6D28D9';
  ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`✨ ${combo.colorName}   •   👖 ${combo.fitType}   •   🧵 ${combo.fabric}`, frameX + 28, infoY + 85);
  ctx.restore();

  // 4. Trigger Instant Image Download
  setTimeout(() => {
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `tenue_lookbook_outfit.png`;
      downloadLink.href = dataUrl;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Success State
      elements.downloadBtnText.textContent = '✓ Lookbook Saved!';
      elements.downloadLookbookBtn.classList.add('download-success');

      setTimeout(() => {
        elements.downloadBtnText.textContent = 'Download Outfit Lookbook';
        elements.downloadLookbookBtn.classList.remove('download-success');
        elements.downloadLookbookBtn.disabled = false;
      }, 2500);
    } catch (err) {
      console.error('Error generating lookbook:', err);
      alert('Could not download lookbook directly. Please try again.');
      elements.downloadBtnText.textContent = 'Download Outfit Lookbook';
      elements.downloadLookbookBtn.disabled = false;
    }
  }, 200);
}

// Canvas Helper: Rounded Rect
function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Canvas Helper: Draw 3/4 Proportional Image (Cover with vertical focal point)
function drawImageThreeQuarter(ctx, img, x, y, w, h, focalPointY = 0.2) {
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const targetRatio = w / h;
  let sWidth, sHeight, sx, sy;

  if (imgRatio > targetRatio) {
    sHeight = img.naturalHeight;
    sWidth = img.naturalHeight * targetRatio;
    sx = (img.naturalWidth - sWidth) / 2;
    sy = 0;
  } else {
    sWidth = img.naturalWidth;
    sHeight = img.naturalWidth / targetRatio;
    sx = 0;
    sy = Math.max(0, (img.naturalHeight - sHeight) * focalPointY);
  }

  ctx.drawImage(img, sx, sy, sWidth, sHeight, x, y, w, h);
}

// ========================================================
// IMAGE UPLOAD & CANVAS COLOR EXTRACTION
// ========================================================
function handleImageUpload(file) {
  if (!file || !file.type.startsWith('image/')) {
    alert('Please upload a valid image file (PNG, JPG, or WEBP).');
    return;
  }

  elements.uploadStatus.classList.remove('hidden');
  elements.dropZoneContent.classList.add('hidden');

  const reader = new FileReader();
  reader.onload = function(e) {
    const imgSrc = e.target.result;
    state.uploadedImageSrc = imgSrc;

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
      // Analyze color using Canvas
      const detectedKey = detectDominantColor(img);

      // Display uploaded photo in 3/4 size in seamless outfit preview
      elements.uploadedPhotoPreview.src = imgSrc;
      
      // Update UI controls
      elements.uploadStatus.classList.add('hidden');
      elements.dropZoneContent.classList.add('hidden');
      elements.imageControls.classList.remove('hidden');
      elements.detectedColorLabel.textContent = `Detected: ${SHIRT_COLORS_DATA[detectedKey]?.name || 'Shirt Color'}`;

      // Update active selection to detected color
      updateShirtSelection(detectedKey);
    };
    img.src = imgSrc;
  };
  reader.readAsDataURL(file);
}

function detectDominantColor(img) {
  const canvas = elements.colorCanvas;
  const ctx = canvas.getContext('2d');
  
  const size = 60;
  canvas.width = size;
  canvas.height = size;
  ctx.drawImage(img, 0, 0, size, size);

  const imgData = ctx.getImageData(0, 0, size, size).data;
  let totalR = 0, totalG = 0, totalB = 0, count = 0;

  const startX = Math.floor(size * 0.2);
  const endX = Math.floor(size * 0.8);
  const startY = Math.floor(size * 0.2);
  const endY = Math.floor(size * 0.8);

  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      const idx = (y * size + x) * 4;
      const r = imgData[idx];
      const g = imgData[idx + 1];
      const b = imgData[idx + 2];
      const a = imgData[idx + 3];

      if (a > 128) {
        totalR += r;
        totalG += g;
        totalB += b;
        count++;
      }
    }
  }

  if (count === 0) return 'white';

  const avgR = Math.round(totalR / count);
  const avgG = Math.round(totalG / count);
  const avgB = Math.round(totalB / count);

  return findClosestFashionColor(avgR, avgG, avgB);
}

function findClosestFashionColor(r, g, b) {
  let closestKey = 'white';
  let minDistance = Infinity;

  const referencePalette = {
    white: { r: 245, g: 245, b: 245 },
    lightblue: { r: 147, g: 197, b: 253 },
    navy: { r: 30, g: 41, b: 59 },
    black: { r: 24, g: 24, b: 27 },
    charcoal: { r: 51, g: 65, b: 85 },
    olive: { r: 85, g: 107, b: 47 },
    maroon: { r: 114, g: 28, b: 36 }
  };

  for (const [key, targetRgb] of Object.entries(referencePalette)) {
    const dR = r - targetRgb.r;
    const dG = g - targetRgb.g;
    const dB = b - targetRgb.b;
    const dist = Math.sqrt(0.3 * (dR * dR) + 0.59 * (dG * dG) + 0.11 * (dB * dB));

    if (dist < minDistance) {
      minDistance = dist;
      closestKey = key;
    }
  }

  return closestKey;
}

// ========================================================
// EVENT BINDINGS & SCROLL LISTENERS
// ========================================================
function bindEvents() {
  // Login Form Submit
  elements.loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = elements.userNameInput.value;
    const age = elements.userAgeInput.value;
    if (name && age) {
      saveUser(name, age);
    }
  });

  // Logout / Change User
  elements.logoutBtn.addEventListener('click', handleLogout);

  // Support Dropdown Mobile Click Toggle
  if (elements.supportDropdown) {
    const trigger = elements.supportDropdown.querySelector('.support-trigger-btn');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.supportDropdown.classList.toggle('open');
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!elements.supportDropdown.contains(e.target)) {
        elements.supportDropdown.classList.remove('open');
      }
    });
  }

  // Pant Color Categories Filter Buttons
  elements.pantColorFilter.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    document.querySelectorAll('#pantColorFilter .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    state.activeColorFilter = btn.getAttribute('data-color-filter');
    renderCombosList();
  });

  // Download Lookbook Button
  elements.downloadLookbookBtn.addEventListener('click', downloadOutfitLookbook);

  // File Upload Dropzone Events
  elements.dropZone.addEventListener('click', () => {
    elements.shirtImageInput.click();
  });

  elements.shirtImageInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImageUpload(e.target.files[0]);
    }
  });

  // Drag & Drop
  elements.dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    elements.dropZone.classList.add('dragover');
  });

  elements.dropZone.addEventListener('dragleave', () => {
    elements.dropZone.classList.remove('dragover');
  });

  elements.dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    elements.dropZone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  });

  // Re-upload Button
  elements.removeImageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    elements.shirtImageInput.click();
  });

  // Window Scroll Listener for Floating Scroll Controls
  window.addEventListener('scroll', () => {
    if (window.scrollY > 280) {
      elements.floatingScrollBar.classList.add('visible');
    } else {
      elements.floatingScrollBar.classList.remove('visible');
    }
  });

  // Scroll to Top Action Button
  elements.scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Global Button Click Ripple & Elastic Bounce Animation Handler
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, .btn, .filter-btn, .combo-action-btn, .btn-scroll-action, .support-trigger-btn, .footer-link-pill, .creator-tag, .disclaimer-link-pill, .btn-text-action, .btn-logout');
    if (!btn) return;

    // 1. Create and position expanding glass ripple
    createButtonRipple(e, btn);

    // 2. Trigger Spring Bounce Animation
    btn.classList.remove('btn-clicked');
    void btn.offsetWidth; // Force DOM reflow to retrigger animation
    btn.classList.add('btn-clicked');

    setTimeout(() => {
      btn.classList.remove('btn-clicked');
    }, 450);
  });
}

// Function to calculate and render liquid glass ripple at click coordinates
function createButtonRipple(event, button) {
  const rect = button.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height) * 1.5;
  const radius = diameter / 2;

  const ripple = document.createElement('span');
  ripple.className = 'btn-ripple';

  // Calculate click coordinates relative to the button
  const clientX = event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : rect.left + rect.width / 2);
  const clientY = event.clientY || (event.touches && event.touches[0] ? event.touches[0].clientY : rect.top + rect.height / 2);

  const x = clientX - rect.left - radius;
  const y = clientY - rect.top - radius;

  ripple.style.width = `${diameter}px`;
  ripple.style.height = `${diameter}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Remove existing ripples if any
  const existingRipple = button.querySelector('.btn-ripple');
  if (existingRipple) {
    existingRipple.remove();
  }

  button.appendChild(ripple);

  // Clean up ripple after animation completes
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// ========================================================
// PRIVATE CREATOR DATA VAULT (PIN: vedhu)
// ========================================================
const CREATOR_MASTER_PIN = 'vedhu'; // Master Passcode for Mallela Vedantheswar

function bindVaultEvents() {
  // Secret Shortcut: Ctrl + Shift + A or Alt + V to open Creator Vault
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'v')) {
      e.preventDefault();
      openVaultModal();
    }
  });

  // Secret URL Parameter: Opening yoursite.vercel.app?vault=1 or ?admin=1 automatically opens the vault
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('vault') || urlParams.has('admin')) {
    setTimeout(openVaultModal, 400);
  }

  // Secret Mobile Trigger: Tap the brand logo 4 times quickly on mobile/desktop
  let logoTapCount = 0;
  let logoTapTimer = null;
  const logoWrapper = document.querySelector('.logo-img-wrapper');
  if (logoWrapper) {
    logoWrapper.addEventListener('click', (e) => {
      logoTapCount++;
      clearTimeout(logoTapTimer);
      logoTapTimer = setTimeout(() => {
        logoTapCount = 0;
      }, 1200);

      if (logoTapCount >= 4) {
        logoTapCount = 0;
        openVaultModal();
      }
    });
  }

  // Secret Click: Long-press or right-click any creator tag
  document.querySelectorAll('.creator-tag, .creator-badge').forEach(tag => {
    tag.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      openVaultModal();
    });
  });

  // Open Vault Buttons (Header & Floating Bar)
  const headerVaultBtn = document.getElementById('openVaultHeaderBtn');
  if (headerVaultBtn) {
    headerVaultBtn.addEventListener('click', openVaultModal);
  }
  const floatingVaultBtn = document.getElementById('openVaultFloatingBtn');
  if (floatingVaultBtn) {
    floatingVaultBtn.addEventListener('click', openVaultModal);
  }

  // Close Vault
  if (elements.closeVaultBtn) {
    elements.closeVaultBtn.addEventListener('click', closeVaultModal);
  }
  if (elements.adminVaultModal) {
    elements.adminVaultModal.addEventListener('click', (e) => {
      if (e.target === elements.adminVaultModal) {
        closeVaultModal();
      }
    });
  }

  // Vault Unlock Form Submit
  if (elements.vaultAuthForm) {
    elements.vaultAuthForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPin = elements.vaultPinInput.value.trim();

      if (enteredPin === CREATOR_MASTER_PIN) {
        elements.vaultAuthError.classList.add('hidden');
        elements.vaultAuthSection.classList.add('hidden');
        elements.vaultDashboardSection.classList.remove('hidden');
        renderVaultDashboard();
      } else {
        elements.vaultAuthError.classList.remove('hidden');
      }
    });
  }

  // Search Filter in Vault
  if (elements.vaultSearchInput) {
    elements.vaultSearchInput.addEventListener('input', (e) => {
      renderVaultTable(e.target.value);
    });
  }

  // Export to Excel / CSV
  if (elements.exportCsvBtn) {
    elements.exportCsvBtn.addEventListener('click', exportVaultToCsv);
  }

  // Clear Vault Data
  if (elements.clearVaultBtn) {
    elements.clearVaultBtn.addEventListener('click', clearVaultData);
  }

  // Lock Vault
  if (elements.lockVaultBtn) {
    elements.lockVaultBtn.addEventListener('click', () => {
      elements.vaultDashboardSection.classList.add('hidden');
      elements.vaultAuthSection.classList.remove('hidden');
      elements.vaultPinInput.value = '';
    });
  }
}

function openVaultModal() {
  elements.adminVaultModal.classList.remove('hidden');
  elements.adminVaultModal.setAttribute('aria-hidden', 'false');
  elements.vaultPinInput.focus();
}

function closeVaultModal() {
  elements.adminVaultModal.classList.add('hidden');
  elements.adminVaultModal.setAttribute('aria-hidden', 'true');
  elements.vaultAuthError.classList.add('hidden');
}

function getVaultUsers() {
  try {
    return JSON.parse(localStorage.getItem('huestyle_users_vault') || '[]');
  } catch (e) {
    return [];
  }
}

function renderVaultDashboard() {
  const users = getVaultUsers();
  const total = users.length;
  const totalVisits = users.reduce((acc, u) => acc + (u.loginCount || 1), 0);
  const avgAge = total > 0 ? Math.round(users.reduce((acc, u) => acc + (Number(u.age) || 0), 0) / total) : 0;

  elements.vaultTotalUsers.textContent = total;
  elements.vaultTotalVisits.textContent = totalVisits;
  elements.vaultAvgAge.textContent = total > 0 ? `${avgAge} yrs` : 'N/A';

  renderVaultTable('');
}

function renderVaultTable(searchQuery = '') {
  const users = getVaultUsers();
  const query = searchQuery.trim().toLowerCase();

  const filtered = query
    ? users.filter(u => u.name.toLowerCase().includes(query))
    : users;

  elements.vaultTableBody.innerHTML = '';

  if (filtered.length === 0) {
    elements.vaultTableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding: 2rem; color: #64748B;">
          ${users.length === 0 ? 'No user data registered yet.' : 'No users match your search query.'}
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach((user, index) => {
    const row = document.createElement('tr');
    const createdDate = user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recent';
    const lastLogin = user.lastLogin ? new Date(user.lastLogin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Active';

    row.innerHTML = `
      <td><strong>${index + 1}</strong></td>
      <td><strong>${user.name}</strong></td>
      <td><span class="user-age-pill">${user.age}</span></td>
      <td>${createdDate}</td>
      <td>${lastLogin}</td>
      <td><strong>${user.loginCount || 1}</strong></td>
    `;
    elements.vaultTableBody.appendChild(row);
  });
}

function exportVaultToCsv() {
  const users = getVaultUsers();
  if (users.length === 0) {
    alert('No user records available to export.');
    return;
  }

  let csvContent = 'data:text/csv;charset=utf-8,ID,Name,Age,First_Joined,Last_Login,Total_Visits\n';

  users.forEach(u => {
    const row = [
      `"${u.id || ''}"`,
      `"${u.name || ''}"`,
      u.age || '',
      `"${u.createdAt || ''}"`,
      `"${u.lastLogin || ''}"`,
      u.loginCount || 1
    ].join(',');
    csvContent += row + '\n';
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `choose_your_tenue_users_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function clearVaultData() {
  if (confirm('Are you sure you want to clear all user database records? This cannot be undone.')) {
    localStorage.removeItem('huestyle_users_vault');
    renderVaultDashboard();
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initApp);
