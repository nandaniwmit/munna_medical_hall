import { Medicine, Testimonial, FAQ, BlogPost, ServiceItem, CategoryItem, GalleryItem, WorkingProcessStep } from '../types';

export const MEDICINES_DATABASE: Medicine[] = [
  {
    id: 'med-1',
    name: 'Paracetamol 650mg (Dolo)',
    genericName: 'Paracetamol / Acetaminophen',
    category: 'Tablets',
    price: 32.00,
    available: true,
    packaging: 'Strip of 15 Tablets',
    description: 'An analgesic and antipyretic medicine widely used for treating mild to moderate pain and reducing high fever.',
    manufacturer: 'Micro Labs Ltd'
  },
  {
    id: 'med-2',
    name: 'Metformin Hydrochloride 500mg (Glycomet)',
    genericName: 'Metformin',
    category: 'Diabetic Care',
    price: 48.50,
    available: true,
    packaging: 'Strip of 10 Tablets',
    description: 'Oral anti-diabetic drug used to control high blood sugar levels in patients with type 2 diabetes.',
    manufacturer: 'USV Private Limited'
  },
  {
    id: 'med-3',
    name: 'Pantoprazole Gastro-resistant 40mg (Pan-40)',
    genericName: 'Pantoprazole',
    category: 'Tablets',
    price: 155.00,
    available: true,
    packaging: 'Strip of 15 Tablets',
    description: 'Proton pump inhibitor (PPI) that decreases the amount of acid produced in the stomach, treating acid reflux and ulcers.',
    manufacturer: 'Alkem Laboratories Ltd'
  },
  {
    id: 'med-4',
    name: 'Amoxicillin & Potassium Clavulanate (Augmentin 625)',
    genericName: 'Amoxicillin (500mg) + Clavulanic Acid (125mg)',
    category: 'Tablets',
    price: 223.40,
    available: true,
    packaging: 'Strip of 10 Tablets',
    description: 'Broad-spectrum penicillin antibiotic combined with a beta-lactamase inhibitor, used to treat various bacterial infections.',
    manufacturer: 'GlaxoSmithKline Pharmaceuticals Ltd'
  },
  {
    id: 'med-5',
    name: 'Cetirizine Hydrochloride 10mg (Okacet)',
    genericName: 'Cetirizine',
    category: 'Tablets',
    price: 18.00,
    available: true,
    packaging: 'Strip of 10 Tablets',
    description: 'An antihistamine that reduces the natural chemical histamine in the body, providing relief from allergy symptoms.',
    manufacturer: 'Cipla Ltd'
  },
  {
    id: 'med-6',
    name: 'Multivitamin & Minerals (Becadexamin)',
    genericName: 'Multivitamins, Minerals & Ginseng',
    category: 'Vitamins',
    price: 52.00,
    available: true,
    packaging: 'Bottle of 30 Capsules',
    description: 'A comprehensive daily nutritional supplement designed to support immunity, stamina, skin health, and general wellness.',
    manufacturer: 'GlaxoSmithKline'
  },
  {
    id: 'med-7',
    name: 'Digene Antacid Gel (Mint Flavor)',
    genericName: 'Magnesium Hydroxide + Aluminium Hydroxide + Simethicone',
    category: 'Syrups',
    price: 145.00,
    available: true,
    packaging: '200ml Bottle',
    description: 'An antacid and antiflatulent syrup that provides quick relief from acidity, gas, heartburn, and stomach upset.',
    manufacturer: 'Abbott India Ltd'
  },
  {
    id: 'med-8',
    name: 'Cough & Cold Syrup (Benadryl DR)',
    genericName: 'Dextromethorphan Hydrobromide',
    category: 'Syrups',
    price: 132.00,
    available: true,
    packaging: '100ml Bottle',
    description: 'A dry-cough suppressant that blocks cough signals to the brain, providing comfort from throat irritation and tickly coughs.',
    manufacturer: 'Johnson & Johnson'
  },
  {
    id: 'med-9',
    name: 'Dr. Morepen BG-03 Blood Glucose Monitor',
    genericName: 'Glucometer Device',
    category: 'Medical Equipment',
    price: 850.00,
    available: true,
    packaging: 'Box with Device + 10 Strips + Lancing Device',
    description: 'An ergonomic and highly accurate digital blood sugar monitoring system with automatic test result logging.',
    manufacturer: 'Dr. Morepen Laboratories'
  },
  {
    id: 'med-10',
    name: 'Omron HEM-7120 Fully Automatic Blood Pressure Monitor',
    genericName: 'Digital BP Monitor',
    category: 'Medical Equipment',
    price: 2490.00,
    available: true,
    packaging: 'Box with Monitor, Medium Cuff, & Batteries',
    description: 'Oscillometric digital blood pressure monitor for clinical-grade precision at home. Features Intellisense technology.',
    manufacturer: 'Omron Healthcare Co. Ltd'
  },
  {
    id: 'med-11',
    name: 'Himalaya Baby Powder (Gentle Care)',
    genericName: 'Himalayan Herbal Baby Dusting Powder',
    category: 'Baby Products',
    price: 185.00,
    available: true,
    packaging: '200g Pack',
    description: 'Gentle, talc-free powder enriched with olive and almond oils, designed to keep baby skin dry, soft, and rash-free.',
    manufacturer: 'The Himalaya Drug Company'
  },
  {
    id: 'med-12',
    name: 'Nivea Soft Light Moisturiser (Vitamin E)',
    genericName: 'Moisturising Cream',
    category: 'Skin Care',
    price: 210.00,
    available: true,
    packaging: '200ml Tub',
    description: 'An ultra-light, fast-absorbing refreshing cream with jojoba oil and Vitamin E for soft, supple skin all day long.',
    manufacturer: 'Nivea India Pvt Ltd'
  },
  {
    id: 'med-13',
    name: 'Protein Powder (Protinex Original)',
    genericName: 'High Protein Nutritional Supplement',
    category: 'Protein Supplements',
    price: 650.00,
    available: true,
    packaging: '400g Tin',
    description: 'High-quality soy protein supplement fortified with essential vitamins and minerals to improve energy levels and muscle mass.',
    manufacturer: 'Danone Nutricia'
  },
  {
    id: 'med-14',
    name: 'Orthopedic Knee Support (Tynor)',
    genericName: 'Knee Support Neoprene Sleeve',
    category: 'Orthopedic Support',
    price: 420.00,
    available: true,
    packaging: 'Single Piece (Select Size)',
    description: 'Provides uniform compression, warmth, and optimal support to the knee joints during arthritis, injury, or sports.',
    manufacturer: 'Tynor Orthotics Pvt Ltd'
  },
  {
    id: 'med-15',
    name: 'Dettol Antiseptic Liquid (Disinfectant)',
    genericName: 'Chloroxylenol',
    category: 'Personal Hygiene',
    price: 198.00,
    available: true,
    packaging: '500ml Bottle',
    description: 'A reliable and versatile household disinfectant liquid used for wound cleaning, personal hygiene, and surface sanitation.',
    manufacturer: 'Reckitt Benckiser India'
  },
  {
    id: 'med-16',
    name: 'Atorvastatin 10mg (Lipvas)',
    genericName: 'Atorvastatin',
    category: 'Tablets',
    price: 78.00,
    available: true,
    packaging: 'Strip of 15 Tablets',
    description: 'Used along with diet to lower "bad" cholesterol and fats, thereby helping in the prevention of heart attacks and strokes.',
    manufacturer: 'Cipla Ltd'
  },
  {
    id: 'med-17',
    name: 'Amoxycillin 500mg Capsule (Novamox)',
    genericName: 'Amoxycillin',
    category: 'Capsules',
    price: 98.40,
    available: true,
    packaging: 'Strip of 15 Capsules',
    description: 'An antibiotic used to treat bacterial infections of the ears, throat, urinary tract, and respiratory tract.',
    manufacturer: 'Cipla Ltd'
  },
  {
    id: 'med-18',
    name: 'Volini Pain Relief Gel (Instant Relief)',
    genericName: 'Diclofenac + Methyl Salicylate + Menthol',
    category: 'Skin Care',
    price: 135.00,
    available: true,
    packaging: '50g Tube',
    description: 'Deep-penetrating pain relief formula that instantly relieves musculoskeletal and joint pain, backache, and sprains.',
    manufacturer: 'Sun Pharmaceutical Industries Ltd'
  }
];

export const CATEGORIES: CategoryItem[] = [
  { name: 'Tablets', slug: 'tablets', iconName: 'Pil', count: 420, description: 'Genuine prescription & OTC oral tablet formulations', bgColor: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400' },
  { name: 'Capsules', slug: 'capsules', iconName: 'Pill', count: 180, description: 'Hard & soft gel capsules for medications & vitamins', bgColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
  { name: 'Syrups', slug: 'syrups', iconName: 'CupSoda', count: 150, description: 'Liquid suspensions, pediatric formulas, and cough syrups', bgColor: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
  { name: 'Injection', slug: 'injection', iconName: 'Syringe', count: 85, description: 'Sterile injection vials, ampoules, and prefilled syringes', bgColor: 'bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400' },
  { name: 'Medical Equipment', slug: 'medical-equipment', iconName: 'Activity', count: 64, description: 'BP monitors, Glucometers, Nebulizers, and Oximeters', bgColor: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400' },
  { name: 'Protein Supplements', slug: 'protein-supplements', iconName: 'Flame', count: 45, description: 'Adult protein powders, mass gainers, and energy drinks', bgColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' },
  { name: 'Vitamins', slug: 'vitamins', iconName: 'Sparkles', count: 110, description: 'Daily multivitamins, Calcium, Vitamin D3, and Zinc tablets', bgColor: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
  { name: 'Skin Care', slug: 'skin-care', iconName: 'Sparkle', count: 135, description: 'Dermatologist recommended creams, ointments, and lotions', bgColor: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
  { name: 'Baby Products', slug: 'baby-products', iconName: 'Baby', count: 95, description: 'Baby powders, diapers, lotions, gentle washes, and baby food', bgColor: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
  { name: 'Personal Hygiene', slug: 'personal-hygiene', iconName: 'Droplet', count: 120, description: 'Antiseptics, hand sanitizers, masks, soaps, and body care', bgColor: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400' },
  { name: 'Orthopedic Support', slug: 'orthopedic-support', iconName: 'ShieldAlert', count: 50, description: 'Knee supports, belts, neck collars, and ankle binders', bgColor: 'bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400' },
  { name: 'Diabetic Care', slug: 'diabetic-care', iconName: 'HeartPulse', count: 72, description: 'Insulin syringes, low GI food, diabetic tablets & monitors', bgColor: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Medicine Sales',
    description: 'Extensive inventory of prescription and over-the-counter (OTC) medications available at discounted rates.',
    iconName: 'ShoppingBag',
    longDescription: 'At Munna Medical Hall, we inventory a vast selection of pharmaceuticals. From routine analgesics to complex chronic medications, we procure our stocks exclusively from certified distributors to guarantee absolute safety and therapeutic efficiency.',
    features: ['100% genuine guaranteed', 'Careful temperature storage', 'Discounted pricing on bulk orders']
  },
  {
    id: 'serv-2',
    title: 'Prescription Medicines',
    description: 'Safe and certified dispensing of schedule drugs backed by rigorous validation of physical or digital prescriptions.',
    iconName: 'FileText',
    longDescription: 'We adhere strictly to drugs and cosmetics rules. Our experienced team carefully reviews all details, offering accurate guidelines on dosage, storage instruction, and warning of any critical contraindications.',
    features: ['Pharmacist validation', 'Substituted generics guidance', 'Compliance with drug regulations']
  },
  {
    id: 'serv-3',
    title: 'OTC Medicines',
    description: 'Instant accessibility to general wellness, digestive remedies, pain reliefs, and common cold medications.',
    iconName: 'Heart',
    longDescription: 'For minor ailments, we offer immediate access to clinically-approved over-the-counter options. Our trained staff can help recommend proper over-the-counter remedies for safe symptom relief.',
    features: ['No prescription required', 'Fast-acting common remedies', 'Clear dosage guidelines']
  },
  {
    id: 'serv-4',
    title: 'Baby Care Products',
    description: 'Ultra-gentle formulas, dermatologically-tested baby hygiene products, nutritious baby foods, and diapers.',
    iconName: 'Baby',
    longDescription: 'We carry specialized formulations for your infant’s delicate skin. Choose from standard brands like Himalaya, Johnson & Johnson, Sebamed, and Lactogen baby formulas.',
    features: ['Hypoallergenic brands', 'Baby food & milk powders', 'Soft diapers and sensitive skin wipes']
  },
  {
    id: 'serv-5',
    title: 'Personal Care Products',
    description: 'Everyday skin care, oral health, hair care, and hygiene solutions curated for the entire family.',
    iconName: 'Smile',
    longDescription: 'Maintain healthy everyday grooming. From specialized face-washes to clinical anti-dandruff shampoos and dental essentials, our personal care catalog supports clean lifestyles.',
    features: ['Dermacare options', 'Oral and dental essentials', 'Herbal and organic options available']
  },
  {
    id: 'serv-6',
    title: 'Diabetic Care',
    description: 'Targeted support for diabetic lifestyles: glucometers, low-GI foods, blood sugar test strips, and insulin supplies.',
    iconName: 'HeartPulse',
    longDescription: 'We provide comprehensive tools and supplies for efficient blood sugar tracking, helping chronic diabetic patients safely log metrics and maintain active glycaemic control.',
    features: ['Discounted glucometer test strips', 'Insulin syringe needles & pens', 'Diabetic nutritional supplements']
  },
  {
    id: 'serv-7',
    title: 'Blood Pressure Monitor',
    description: 'Clinical-grade automatic digital and mercury-based BP monitors to check blood pressure values in safety.',
    iconName: 'Activity',
    longDescription: 'We sell and calibrate high-quality digital Sphygmomanometers from trusted brands (e.g. Omron). Track cardiovascular health safely from the comfort of home.',
    features: ['Brand warranties included', 'Complimentary on-site testing demo', 'Irregular heartbeat indicators']
  },
  {
    id: 'serv-8',
    title: 'First Aid Supplies',
    description: 'Compact home first-aid boxes, antiseptic sprays, adhesive bandages, sterile gauze, and surgical tapes.',
    iconName: 'ShieldAlert',
    longDescription: 'Be prepared for emergencies. We construct customizable medical kits for schools, corporate offices, vehicles, or homes with standard emergency components.',
    features: ['Compact ready kits', 'Sterilized non-stick dressings', 'Antiseptic solutions & burn creams']
  },
  {
    id: 'serv-9',
    title: 'Surgical Items',
    description: 'High-quality medical disposable supplies, surgical masks, sterile gloves, wound dressings, and sutures.',
    iconName: 'Scissors',
    longDescription: 'Providing clinical-grade materials for doctors, home nursing setups, and small clinics. All items are packaged securely to maintain absolute sterilization.',
    features: ['Sterile surgical dressings', 'Premium quality masks and gloves', 'Clinic-level surgical instruments']
  },
  {
    id: 'serv-10',
    title: 'Health Supplements',
    description: 'Immunity builders, daily multivitamins, calcium complexes, herbal drops, and energy-boosting capsules.',
    iconName: 'Sparkles',
    longDescription: 'Bridge nutrition gaps. We host vitamin formulations, calcium-D3 supplements, and iron capsules designed to optimize metabolic health, bone density, and standard immunity.',
    features: ['Vitamins and joint enhancers', 'Herbal wellness capsules', 'Authorized health brands only']
  },
  {
    id: 'serv-11',
    title: 'Medical Devices',
    description: 'High-performance home devices: nebulizers, digital thermometers, pulse oximeters, and steam inhalers.',
    iconName: 'Briefcase',
    longDescription: 'Empower immediate therapeutic response. Nebulizers for asthma relief, oximeters for oxygen-saturation tracking, and digital thermometers for precision fever reading.',
    features: ['One-year replacement guarantee', 'Instructional guides provided', 'Clinical calibration']
  },
  {
    id: 'serv-12',
    title: 'Home Care Products',
    description: 'Mobility support aids, orthopedic chairs, adult diapers, hot water bottles, and clinical disinfectants.',
    iconName: 'Home',
    longDescription: 'We help facilitate comfortable home recovery. Offering adult incontinence solutions, anti-decubitus air mattresses, wheelchair accessories, and specialized room sanitizers.',
    features: ['Comfort adult diapers', 'Anti-bedsore air mattresses', 'Lightweight walking aids']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sanjeev Kumar',
    rating: 5,
    comment: 'Munna Medical Hall is my go-to store near Bata More for the last 8 years. Their medicines are always genuine, and they give a great discount on chronic disease prescriptions. Extremely helpful staff!',
    role: 'Local Resident',
    location: 'Bata More, Gaya',
    date: 'June 18, 2026'
  },
  {
    id: 't-2',
    name: 'Renu Devi',
    rating: 5,
    comment: 'I order my husband\'s diabetic medicines on WhatsApp and they arrange the home delivery very fast. Sending prescriptions on WhatsApp is so easy. Very grateful for their prompt service!',
    role: 'Home Maker',
    location: 'Tekari Road, Gaya',
    date: 'July 02, 2026'
  },
  {
    id: 't-3',
    name: 'Dr. Amitabh Sen',
    rating: 5,
    comment: 'As a local medical practitioner, I always recommend Munna Medical Hall to my patients. They store surgical items, diabetic care supplies, and cold-chain medications under proper temperature control. Very professional.',
    role: 'General Physician',
    location: 'Maroof Ganj, Gaya',
    date: 'May 12, 2026'
  },
  {
    id: 't-4',
    name: 'Abhishek Mishra',
    rating: 5,
    comment: 'We needed a nebulizer and oximeter urgently for my father at midnight. The team was so compassionate, they helped us purchase the device immediately and explained the instructions so carefully. Best customer support in Gaya.',
    role: 'Business Owner',
    location: 'Gaya Cantt, Gaya',
    date: 'April 29, 2026'
  },
  {
    id: 't-5',
    name: 'Md. Farhan',
    rating: 5,
    comment: 'Munna Medical Hall never says "no medicine." If some specific capsule is not in stock, they proactively order it from Patna/Ranchi within 24 hours. Their commitment to patient care is unmatched.',
    role: 'Civil Engineer',
    location: 'Maroof Ganj, Gaya',
    date: 'June 30, 2026'
  },
  {
    id: 't-6',
    name: 'Pooja Singh',
    rating: 4,
    comment: 'Highly reliable pharmacy. They give neat, itemized bills and explain the medicine schedule clearly. Their baby care collection (Himalaya and Sebamed) is always fresh and stocked. Extremely neat and clean store.',
    role: 'School Teacher',
    location: 'Madanpur, Gaya',
    date: 'July 10, 2026'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Are all medicines available at Munna Medical Hall genuine?',
    answer: 'Absolutely. We practice 100% genuine medicine sourcing. We procure products directly from authorized company distributors and pharmaceutical depots. Every item is verified for batch numbers, seals, and long-term expiry dates.',
    category: 'Product Quality'
  },
  {
    id: 'faq-2',
    question: 'How do I place an order for medicines on WhatsApp?',
    answer: 'It is very easy! Click our floating WhatsApp button or fill out the "WhatsApp Order Form" on our website. Enter your name, delivery details, list of medicines, and snap a picture of your prescription. It will auto-compile a professional message format which you can send in one click to our business number (08797611171).',
    category: 'Ordering Process'
  },
  {
    id: 'faq-3',
    question: 'Can I purchase prescription-only (Schedule H/X) medicines without a prescription?',
    answer: 'No, we adhere strictly to Indian FDA drug regulations and safe pharmacy practices. Prescription-only medicines (e.g. antibiotics, hormones, sedatives) will only be dispensed upon validation of a genuine medical prescription from a registered practitioner.',
    category: 'Regulations'
  },
  {
    id: 'faq-4',
    question: 'Do you offer home delivery of medicines in Gaya?',
    answer: 'Yes, we offer nearby home delivery for emergency medicines and senior citizens in areas close to Bata More, Tekari Road, and Maroof Ganj. For locations slightly further, we coordinate swift delivery. Please reach out to us at 08797611171 to verify local delivery coordinates.',
    category: 'Home Delivery'
  },
  {
    id: 'faq-5',
    question: 'Do you offer discounts on monthly chronic medications?',
    answer: 'Yes, we support our chronic care patients with competitive pricing. We provide excellent, customer-friendly discounts on recurring, monthly medicines for diabetes, heart health, high blood pressure, and thyroid care. Bring or send your prescription to receive our optimal pricing structure.',
    category: 'Discounts & Pricing'
  },
  {
    id: 'faq-6',
    question: 'What are the payment methods accepted at your store?',
    answer: 'We support all popular payment modes including digital UPI (PhonePe, Google Pay, Paytm, BHIM), major Credit and Debit Cards, Net Banking, and cash. We provide proper digital invoices for your insurance or personal tracking needs.',
    category: 'Payments'
  },
  {
    id: 'faq-7',
    question: 'What are the operating hours of Munna Medical Hall?',
    answer: 'Our physical store in Gaya is open 7 days a week, from 08:30 AM to 10:00 PM. Our WhatsApp inquiry and digital prescription uploads are active for review at all times, and we process orders first thing in the morning.',
    category: 'Working Hours'
  },
  {
    id: 'faq-8',
    question: 'Do you keep medical devices like Nebulizers, BP monitors and Oximeters in stock?',
    answer: 'Yes, we are a major dealer of medical equipment and devices in Gaya. We keep high-quality blood pressure monitors, digital oximeters, blood glucose testing kits, steam inhalers, orthopedic heating pads, and pediatric nebulizers in ready stock.',
    category: 'Surgical & Devices'
  },
  {
    id: 'faq-9',
    question: 'Can I return medicines if they are no longer required?',
    answer: 'Yes, we accept returns on unused, unopened, and sealed medicine strips/bottles within 15 days of purchase, provided you present the original cash memo. Please note that high-value cold-chain medicines (like insulin) and temperature-sensitive biologicals are strictly non-returnable to preserve product integrity.',
    category: 'Returns & Refund'
  },
  {
    id: 'faq-10',
    question: 'Do you also store Ayurvedic, baby food, and cosmetic products?',
    answer: 'Yes! Along with standard allopathic pharmaceuticals, we house an extensive range of wellness and lifestyle products: Himalaya and Dabur Ayurvedic remedies, premium baby formulas (Lactogen, Similac), baby skin hygiene products, premium dermatological skin cares, and daily personal hygiene essentials.',
    category: 'Product Quality'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'p-1',
    title: 'Understanding Diabetes Management: Key Metrics to Track at Home',
    excerpt: 'Maintaining glycaemic control is key to avoiding chronic diabetes complications. Learn how to accurately use a home glucometer and track your health.',
    content: 'For chronic diabetic patients, tracking blood glucose levels at home is paramount. Using a modern digital glucometer (such as Dr. Morepen BG-03) lets you log precise post-prandial and fasting sugar values. A fasting level under 100 mg/dL and post-meal under 140 mg/dL are standard healthy benchmarks. Always ensure you wash your hands before pricking, use a fresh lancing needle, and store test strips in a sealed dry container to avoid ambient moisture corruption.',
    date: 'July 05, 2026',
    readTime: '4 min read',
    category: 'Diabetic Care',
    author: 'Munna Pharmacist Team',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'p-2',
    title: 'Safe Use of Antibiotics: Why You Should Complete Your Prescribed Course',
    excerpt: 'Stopping antibiotics early can lead to bacterial mutation and severe resistance. Discover the pharmacology of antibiotic compliance.',
    content: 'We often see patients discontinue their antibiotic capsules (like Amoxicillin or Azithromycin) the moment their fever subsides. This is a highly dangerous medical habit. Stopping early allows the strongest, semi-resistant bacteria to survive and multiply, leading to severe antibiotic resistance. Always consult with a registered medical practitioner, buy genuine medications from authorized pharmacies, and finish the complete 5 or 7-day strip even if you feel completely healed.',
    date: 'June 22, 2026',
    readTime: '5 min read',
    category: 'Medication Safety',
    author: 'Munna Pharmacist Team',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'p-3',
    title: 'Home First-Aid Essentials: A Comprehensive Guide for Every Household',
    excerpt: 'From basic minor burns to sudden cuts, having a well-stocked emergency medical kit can save crucial moments. Read our top recommendations.',
    content: 'An emergency can happen at any moment. A standard family first-aid kit should contain antiseptic liquid (such as Dettol), burn creams (like Silverex), adhesive dressings, medical cotton, sterile bandages, scissors, and a clinical digital thermometer. Keep these in an accessible, cool cabinet away from young children, and inspect expiry dates every six months. At Munna Medical Hall, we customize complete first-aid kits for homes and vehicles.',
    date: 'May 18, 2026',
    readTime: '3 min read',
    category: 'First Aid Support',
    author: 'Munna Pharmacist Team',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=600&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Store Front Entrance',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b255f946?q=80&w=600&auto=format&fit=crop',
    description: 'Our beautifully lit modern storefront located at Bata More, Gaya. Welcoming customer service layout.'
  },
  {
    id: 'g-2',
    title: 'Organized Medicine Shelves',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600&auto=format&fit=crop',
    description: 'We follow advanced categorization and strict temperature rules to preserve chemical composition and vaccine safety.'
  },
  {
    id: 'g-3',
    title: 'Precision Blood Pressure Monitors',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format&fit=crop',
    description: 'Clinical grade diagnostic equipment including digital monitors, oximeters, and premium stethoscopes.'
  },
  {
    id: 'g-4',
    title: 'Customer Consulting Space',
    category: 'customer',
    imageUrl: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=600&auto=format&fit=crop',
    description: 'Dedicated patient-counseling desk where our experienced pharmacists explain medicine dosages and storage rules.'
  },
  {
    id: 'g-5',
    title: 'Infant Nutrition & Care Rack',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?q=80&w=600&auto=format&fit=crop',
    description: 'Dedicated baby shelf with premium organic formulas, soft wet-wipes, rash-creams, and natural dusting powder.'
  },
  {
    id: 'g-6',
    title: 'Surgical & Orthopedic Support Kits',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop',
    description: 'Tynor knee sleeves, orthopedic binders, customized first-aid boxes, and sanitary surgical dressings.'
  }
];

export const WORKING_PROCESS: WorkingProcessStep[] = [
  {
    step: 1,
    title: 'Submit Prescription',
    description: 'Share your prescription in person or easily upload it through our digital WhatsApp form.',
    iconName: 'ClipboardCheck'
  },
  {
    step: 2,
    title: 'Pharmacist Review',
    description: 'Our experienced staff reviews the dosage, validates schedule laws, and selects genuine stock batches.',
    iconName: 'ShieldCheck'
  },
  {
    step: 3,
    title: 'Pack & Verify',
    description: 'Medicines are securely sealed and itemized with a clear explanation of times and guidelines.',
    iconName: 'PackageCheck'
  },
  {
    step: 4,
    title: 'Instant Delivery / Pick-up',
    description: 'Complete smooth payments via UPI or Card and collect your medicines or receive home delivery.',
    iconName: 'Handshake'
  }
];

export const BUSINESS_TIMELINE = [
  { year: '1998', title: 'The Humble Beginning', desc: 'Munna Medical Hall opened its doors in Gaya with a dream to provide honest medicine pricing.' },
  { year: '2005', title: 'Catalog Expansion', desc: 'Introduced comprehensive surgical items, hospital disposables, and specialized pediatric supplements.' },
  { year: '2012', title: 'Chronic Care Support Program', desc: 'Launched structured heavy-discount structures for long-term cardiac and diabetic patients.' },
  { year: '2019', title: 'Modernization & Digitalization', desc: 'Inaugurated full barcode trackability, proper air-conditioned inventory storage, and digital billing.' },
  { year: '2026', title: 'WhatsApp Care & SPA Launch', desc: 'Extended rapid local delivery, real-time medicine search databases, and online prescription orders.' }
];
