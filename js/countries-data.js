/* =============================================
   STAMP STORIES - Countries Data
   150+ Countries with Visa Information
   Updated 2026
   ============================================= */

const countriesData = {
  // ============ ASIA ============
  "IN": {
    name: "India",
    code: "IN",
    region: "Asia",
    flagLetters: "IN",
    heroDescription: "Discover India's rich heritage, diverse culture, and streamlined visa process for international travelers.",
    quickStats: {
      visaTypes: "12+",
      processingTime: "3-7 Days",
      fees: "From INR 2,500",
      popularity: "Most Visited"
    },
    visaTypes: [
      {
        name: "Tourist Visa (e-Tourist)",
        description: "For leisure travel, sightseeing, and visiting friends or family. Available as e-Visa for many nationalities.",
        fee: "INR 2,500 - INR 10,000",
        processing: "3-5 Business Days",
        validity: "Up to 1 Year",
        stayPeriod: "Up to 90 Days"
      },
      {
        name: "Business Visa (e-Business)",
        description: "For business meetings, conferences, trade fairs, and business-related activities.",
        fee: "INR 8,000 - INR 25,000",
        processing: "3-7 Business Days",
        validity: "Up to 5 Years",
        stayPeriod: "Up to 180 Days"
      },
      {
        name: "Medical Visa (e-Medical)",
        description: "For those seeking medical treatment at recognized hospitals in India.",
        fee: "INR 3,500 - INR 12,000",
        processing: "2-4 Business Days",
        validity: "Up to 1 Year",
        stayPeriod: "Up to 60 Days"
      },
      {
        name: "Student Visa (X-1)",
        description: "For international students enrolled in Indian educational institutions.",
        fee: "INR 7,000 - INR 18,000",
        processing: "7-15 Business Days",
        validity: "Duration of Course",
        stayPeriod: "Course Duration"
      },
      {
        name: "Conference Visa",
        description: "For delegates attending international conferences, seminars, or workshops.",
        fee: "INR 5,000 - INR 15,000",
        processing: "5-10 Business Days",
        validity: "Up to 6 Months",
        stayPeriod: "Conference Duration"
      }
    ],
    requirements: [
      "Valid passport with minimum 6 months validity",
      "Recent passport-size photographs (2x2 inches)",
      "Completed visa application form",
      "Proof of travel itinerary and accommodation",
      "Bank statements for last 6 months",
      "Return flight ticket booking",
      "Travel insurance coverage",
      "Yellow fever vaccination (if applicable)",
      "Cover letter explaining purpose of visit",
      "Additional documents for specific visa types"
    ],
    process: [
      { title: "Determine Visa Type", description: "Identify the appropriate visa category based on your travel purpose. India offers e-Visa, regular visa, and specialized visa categories for different travel needs." },
      { title: "Complete Application", description: "Fill out the online visa application form on the official Indian Visa Online portal. Ensure all details match your passport information exactly." },
      { title: "Upload Documents", description: "Upload scanned copies of required documents including passport, photograph, and supporting documents based on visa type." },
      { title: "Pay Visa Fees", description: "Pay the applicable visa fees online using credit/debit card or net banking. Fees vary based on visa type and nationality." },
      { title: "Schedule Appointment", description: "For regular visas, schedule an appointment at the nearest Indian embassy or consulate for biometric submission." },
      { title: "Receive Visa Decision", description: "E-Visa applicants receive approval via email. Regular visa applicants can track status online and collect passport with visa stamp." }
    ],
    fees: [
      { type: "e-Tourist Visa (30 Days)", fee: "INR 2,500", processingTime: "3-5 Days", validity: "30 Days" },
      { type: "e-Tourist Visa (1 Year)", fee: "INR 6,000", processingTime: "3-5 Days", validity: "1 Year" },
      { type: "e-Business Visa (1 Year)", fee: "INR 8,000", processingTime: "5-7 Days", validity: "1 Year" },
      { type: "e-Medical Visa", fee: "INR 3,500", processingTime: "2-4 Days", validity: "60 Days" },
      { type: "Regular Tourist Visa", fee: "INR 7,500", processingTime: "7-15 Days", validity: "6 Months" },
      { type: "Student Visa", fee: "INR 7,000", processingTime: "10-15 Days", validity: "Course Duration" }
    ],
    embassyLink: "https://indianvisaonline.gov.in/",
    embassyName: "Indian Visa Online Portal",
    infographics: [
      { value: "1.4B+", label: "Population", desc: "World's most populous nation with vast cultural diversity" },
      { value: "29+", label: "States & UTs", desc: "Each with unique visa and travel regulations" },
      { value: "12+", label: "Visa Categories", desc: "Comprehensive visa options for all travel purposes" },
      { value: "169+", label: "Countries Eligible", desc: "e-Visa facility available for most nationalities" }
    ],
    faqs: [
      { q: "What is the processing time for an Indian e-Visa in 2026?", a: "Indian e-Visa processing typically takes 3-5 business days for tourist visas and 5-7 business days for business visas. Urgent processing may be available for an additional fee. It is recommended to apply at least 7 days before your planned travel date." },
      { q: "Can I extend my Indian e-Visa while in India?", a: "Generally, Indian e-Visas cannot be extended or converted to another visa type while in India. If you need to stay longer, you must apply for a new visa from your home country. However, in exceptional medical emergencies, extension may be considered by the FRRO (Foreigners Regional Registration Office)." },
      { q: "What are the passport validity requirements for an Indian visa?", a: "Your passport must be valid for at least 6 months from the date of arrival in India. It should also have at least two blank pages for immigration stamps. This requirement applies to all visa categories." },
      { q: "Is travel insurance mandatory for an Indian visa?", a: "Travel insurance is not mandatory for e-Visa applications but is highly recommended. It provides coverage for medical emergencies, trip cancellations, and other unforeseen circumstances during your stay in India." },
      { q: "What is the difference between e-Tourist Visa and regular Tourist Visa?", a: "The e-Tourist Visa is applied online and allows entry through 29 designated airports and 5 seaports. It is valid for 30 days, 1 year, or 5 years. The regular Tourist Visa requires a visit to the embassy and allows entry through any port. Processing times and fees also differ." },
      { q: "Can I work on a tourist visa in India?", a: "No, tourist visa holders are strictly prohibited from engaging in any employment, business, or professional activities in India. You must obtain a Business Visa or Employment Visa for such purposes." },
      { q: "What documents are required for a Medical Visa to India?", a: "Medical Visa requires: valid passport, recent photographs, medical certificate from a recognized hospital in your home country, referral letter from the Indian hospital where treatment is sought, financial proof to cover treatment costs, and an attendant visa for accompanying persons if needed." },
      { q: "How many entries are allowed on an Indian e-Visa?", a: "The 30-day e-Tourist Visa allows double entry. The 1-year and 5-year e-Tourist Visas allow multiple entries with continuous stay limited to 90 days per visit. Business e-Visas allow multiple entries." },
      { q: "What happens if I overstay my Indian visa?", a: "Overstaying an Indian visa can result in penalties ranging from INR 500 to INR 20,000 depending on the duration of overstay. Serious overstays may lead to detention, deportation, and future visa bans. Always apply for extension before your visa expires." },
      { q: "Do children need a separate visa to visit India?", a: "Yes, all travelers including infants and children require a separate visa. Parents or guardians must apply on behalf of minors with additional documents including birth certificate and parental consent if traveling with one parent." },
      { q: "Are there any restricted areas in India for foreign tourists?", a: "Yes, certain areas in India require special permits including parts of Jammu and Kashmir, Northeast states (Arunachal Pradesh, Nagaland, Mizoram, Manipur), Andaman and Nicobar Islands, and Lakshadweep. Protected Area Permits (PAP) or Restricted Area Permits (RAP) are needed." },
      { q: "What is the fee for an Indian Business Visa in 2026?", a: "Indian Business Visa fees vary by nationality. For most countries, the fee ranges from INR 8,000 to INR 25,000 for a 1-year multiple-entry visa. Longer duration visas (up to 5 years) cost more. The exact fee can be checked on the Indian Visa Online portal." },
      { q: "Can I apply for an Indian visa if I have a criminal record?", a: "Having a criminal record does not automatically disqualify you from getting an Indian visa. However, you must disclose your criminal history in the application. Serious offenses may lead to rejection. Each case is reviewed individually by the embassy." },
      { q: "What are the photo requirements for an Indian visa?", a: "Photograph must be 2x2 inches (51x51 mm), taken within the last 6 months, with white background. The face should cover 50-69% of the photo, with neutral expression and both eyes open. No glasses, hats, or head coverings unless for religious purposes." },
      { q: "How early should I apply for an Indian visa before my trip?", a: "For e-Visa, apply at least 7-10 days before travel. For regular visas, apply 3-4 weeks in advance. Peak seasons may require longer processing. It's advisable to apply as early as possible but not more than 120 days before travel for e-Visa." }
    ]
  },

  "TH": {
    name: "Thailand",
    code: "TH",
    region: "Asia",
    flagLetters: "TH",
    heroDescription: "Experience the beauty of Thailand with its tropical beaches, rich culture, and straightforward visa policies for global travelers.",
    quickStats: {
      visaTypes: "8+",
      processingTime: "1-5 Days",
      fees: "From INR 1,500",
      popularity: "Top Destination"
    },
    visaTypes: [
      {
        name: "Tourist Visa (TR)",
        description: "For tourism, leisure, and visiting family. Available as single or multiple entry with extensions possible.",
        fee: "INR 1,500 - INR 5,000",
        processing: "1-3 Business Days",
        validity: "3-6 Months",
        stayPeriod: "Up to 60 Days"
      },
      {
        name: "Visa on Arrival (VoA)",
        description: "Available for eligible nationalities arriving at Thai airports. Quick processing at immigration counters.",
        fee: "INR 2,000",
        processing: "Same Day",
        validity: "15 Days",
        stayPeriod: "Up to 15 Days"
      },
      {
        name: "Non-Immigrant B Visa (Business)",
        description: "For business activities, working in Thailand, or establishing a company.",
        fee: "INR 8,000 - INR 20,000",
        processing: "5-10 Business Days",
        validity: "Up to 1 Year",
        stayPeriod: "Up to 90 Days"
      },
      {
        name: "Education Visa (Non-ED)",
        description: "For international students enrolled in Thai educational institutions or learning programs.",
        fee: "INR 6,000 - INR 15,000",
        processing: "7-14 Business Days",
        validity: "Up to 1 Year",
        stayPeriod: "Course Duration"
      },
      {
        name: "Retirement Visa (Non-OA)",
        description: "For individuals aged 50+ wishing to retire in Thailand with financial proof.",
        fee: "INR 12,000 - INR 25,000",
        processing: "10-20 Business Days",
        validity: "1 Year (Renewable)",
        stayPeriod: "1 Year"
      }
    ],
    requirements: [
      "Valid passport with 6+ months validity",
      "Two recent passport photographs",
      "Completed visa application form",
      "Confirmed flight itinerary",
      "Hotel booking confirmation",
      "Bank statement showing sufficient funds (minimum INR 50,000)",
      "Travel insurance (recommended)",
      "Proof of employment or financial means"
    ],
    process: [
      { title: "Select Visa Category", description: "Choose between e-Visa, Visa on Arrival, or embassy visa based on your nationality and travel purpose." },
      { title: "Prepare Documents", description: "Gather all required documents including passport, photos, flight itinerary, accommodation proof, and financial statements." },
      { title: "Submit Application", description: "Apply online through the Thai e-Visa portal or visit the Royal Thai Embassy/Consulate in your jurisdiction." },
      { title: "Pay Processing Fees", description: "Complete payment of visa fees online or at the embassy. Keep the payment receipt for reference." },
      { title: "Receive Visa", description: "E-Visa sent via email. Embassy visas are stamped in passport. VoA is issued upon arrival at Thai airports." }
    ],
    fees: [
      { type: "Tourist Visa (Single Entry)", fee: "INR 1,500", processingTime: "1-3 Days", validity: "3 Months" },
      { type: "Tourist Visa (Multiple Entry)", fee: "INR 5,000", processingTime: "3-5 Days", validity: "6 Months" },
      { type: "Visa on Arrival", fee: "INR 2,000", processingTime: "Same Day", validity: "15 Days" },
      { type: "Non-Immigrant B (Business)", fee: "INR 8,000", processingTime: "5-10 Days", validity: "1 Year" },
      { type: "Education Visa (Non-ED)", fee: "INR 6,000", processingTime: "7-14 Days", validity: "1 Year" },
      { type: "Retirement Visa (Non-OA)", fee: "INR 12,000", processingTime: "10-20 Days", validity: "1 Year" }
    ],
    embassyLink: "https://www.thaievisa.go.th/",
    embassyName: "Royal Thai e-Visa Portal",
    infographics: [
      { value: "39M+", label: "Annual Visitors", desc: "One of the world's most visited tourism destinations" },
      { value: "6+", label: "Major Airports", desc: "Well-connected with direct flights from major Indian cities" },
      { value: "8+", label: "Visa Types", desc: "Diverse visa options for tourism, business, education, and retirement" },
      { value: "₹1,500", label: "Starting Fee", desc: "Affordable visa fees starting from INR 1,500" }
    ],
    faqs: [
      { q: "What is the visa-free policy for Indian citizens visiting Thailand in 2026?", a: "As of 2026, Indian citizens can enjoy visa-free travel to Thailand for up to 30 days. This is part of Thailand's tourism promotion policy. For longer stays, a Tourist Visa (TR) or appropriate visa category is required." },
      { q: "How can I extend my stay in Thailand beyond the visa-free period?", a: "You can apply for a 30-day extension at any Thai Immigration office. The fee is approximately INR 1,900. You must apply before your current permission to stay expires. Overstaying incurs fines of INR 500 per day." },
      { q: "What are the requirements for a Thailand Retirement Visa?", a: "Requirements include: age 50+, valid passport, criminal background check, medical certificate, proof of pension/investment income of at least THB 65,000/month or THB 800,000 in a Thai bank account. The visa is valid for 1 year and renewable annually." },
      { q: "Can I work in Thailand on a Tourist Visa?", a: "No, working on a Tourist Visa is illegal and can result in arrest, fines, deportation, and blacklisting. You must obtain a Non-Immigrant B (Business) Visa and a work permit before engaging in any employment in Thailand." },
      { q: "What is the Thailand Elite Visa program?", a: "Thailand Elite is a special long-term residency program offering 5, 10, or 20-year visas with VIP services. Fees range from THB 600,000 to THB 2.14 million. Benefits include fast-track immigration, airport limousine, and exclusive lounge access." },
      { q: "What documents are needed for a Thailand Student Visa?", a: "Required documents include: valid passport, completed application form, acceptance letter from a Thai educational institution, proof of financial means, academic transcripts, police clearance certificate, and medical certificate." },
      { q: "How much bank balance is required for a Thailand Tourist Visa?", a: "For a Tourist Visa, you need to show a bank balance of at least INR 50,000 (approximately THB 20,000) for single applicants and INR 1,00,000 for families. The funds should be in your account for at least 6 months." },
      { q: "Is travel insurance mandatory for visiting Thailand?", a: "While not mandatory for visa application, travel insurance is highly recommended. Thailand requires proof of COVID-19 insurance or general travel insurance covering medical expenses up to USD 10,000 for certain visa categories." },
      { q: "What are the prohibited items when entering Thailand?", a: "Prohibited items include: illegal drugs, pornographic materials, firearms without permit, certain medicines, fruits/plants without permit, and counterfeit goods. Strict penalties apply for drug offenses including life imprisonment or death penalty." },
      { q: "Can I convert a Tourist Visa to a Non-Immigrant Visa in Thailand?", a: "Yes, you can apply to convert a Tourist Visa to a Non-Immigrant Visa at Thai Immigration. However, you must have a valid reason (business, education, retirement) and meet all requirements. An agent or lawyer can assist with the process." },
      { q: "What is the processing time for a Thailand e-Visa in 2026?", a: "Thailand e-Visa processing takes 5-7 business days for most applicants. Some applications may require additional verification, taking up to 15 business days. Apply at least 2-3 weeks before your planned travel date." },
      { q: "Do children need a separate visa for Thailand?", a: "Yes, all travelers including infants must have their own visa or qualify under visa exemption. However, children under 14 years old are exempt from visa fees for certain visa categories." },
      { q: "What are the COVID-19 related travel requirements for Thailand?", a: "As of 2026, Thailand has removed most COVID-19 restrictions. No pre-departure test or quarantine is required. Travel insurance covering COVID-19 is recommended but not mandatory. Check current requirements before travel." },
      { q: "How do I get a Thailand Multiple Entry Tourist Visa (METV)?", a: "METV requires: valid passport, completed application, proof of employment/income (at least INR 3,50,000 annual income), bank statement, travel itinerary. Fee is approximately INR 5,000. Valid for 6 months with 60-day stays per entry." },
      { q: "What is the fee for Thailand Visa on Arrival in 2026?", a: "Visa on Arrival fee is THB 2,000 (approximately INR 4,500) for eligible nationalities. Payment must be made in Thai Baht cash. The visa allows a single entry for up to 15 days and can be extended for an additional 7 days." }
    ]
  },

  // More countries would be defined here
  // For brevity, I'm showing the structure with key examples
};

/* Additional countries - abbreviated for loading */
const countriesList = [
  // === ASIA ===
  { code: "IN", name: "India", region: "Asia" },
  { code: "TH", name: "Thailand", region: "Asia" },
  { code: "AE", name: "UAE (Dubai)", region: "Asia" },
  { code: "SG", name: "Singapore", region: "Asia" },
  { code: "MY", name: "Malaysia", region: "Asia" },
  { code: "ID", name: "Indonesia", region: "Asia" },
  { code: "VN", name: "Vietnam", region: "Asia" },
  { code: "JP", name: "Japan", region: "Asia" },
  { code: "KR", name: "South Korea", region: "Asia" },
  { code: "CN", name: "China", region: "Asia" },
  { code: "HK", name: "Hong Kong", region: "Asia" },
  { code: "TW", name: "Taiwan", region: "Asia" },
  { code: "PH", name: "Philippines", region: "Asia" },
  { code: "KH", name: "Cambodia", region: "Asia" },
  { code: "LA", name: "Laos", region: "Asia" },
  { code: "MM", name: "Myanmar", region: "Asia" },
  { code: "NP", name: "Nepal", region: "Asia" },
  { code: "BD", name: "Bangladesh", region: "Asia" },
  { code: "LK", name: "Sri Lanka", region: "Asia" },
  { code: "MV", name: "Maldives", region: "Asia" },
  { code: "BT", name: "Bhutan", region: "Asia" },
  { code: "KZ", name: "Kazakhstan", region: "Asia" },
  { code: "UZ", name: "Uzbekistan", region: "Asia" },
  { code: "SA", name: "Saudi Arabia", region: "Asia" },
  { code: "QA", name: "Qatar", region: "Asia" },
  { code: "KW", name: "Kuwait", region: "Asia" },
  { code: "OM", name: "Oman", region: "Asia" },
  { code: "BH", name: "Bahrain", region: "Asia" },
  { code: "JO", name: "Jordan", region: "Asia" },
  { code: "LB", name: "Lebanon", region: "Asia" },
  { code: "IL", name: "Israel", region: "Asia" },
  { code: "TR", name: "Turkey", region: "Asia" },
  { code: "IR", name: "Iran", region: "Asia" },
  { code: "PK", name: "Pakistan", region: "Asia" },
  { code: "AF", name: "Afghanistan", region: "Asia" },
  { code: "MN", name: "Mongolia", region: "Asia" },
  { code: "TL", name: "Timor-Leste", region: "Asia" },

  // === EUROPE ===
  { code: "GB", name: "United Kingdom", region: "Europe" },
  { code: "FR", name: "France", region: "Europe" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "IT", name: "Italy", region: "Europe" },
  { code: "ES", name: "Spain", region: "Europe" },
  { code: "PT", name: "Portugal", region: "Europe" },
  { code: "NL", name: "Netherlands", region: "Europe" },
  { code: "BE", name: "Belgium", region: "Europe" },
  { code: "CH", name: "Switzerland", region: "Europe" },
  { code: "AT", name: "Austria", region: "Europe" },
  { code: "SE", name: "Sweden", region: "Europe" },
  { code: "NO", name: "Norway", region: "Europe" },
  { code: "DK", name: "Denmark", region: "Europe" },
  { code: "FI", name: "Finland", region: "Europe" },
  { code: "IS", name: "Iceland", region: "Europe" },
  { code: "IE", name: "Ireland", region: "Europe" },
  { code: "GR", name: "Greece", region: "Europe" },
  { code: "PL", name: "Poland", region: "Europe" },
  { code: "CZ", name: "Czech Republic", region: "Europe" },
  { code: "HU", name: "Hungary", region: "Europe" },
  { code: "RO", name: "Romania", region: "Europe" },
  { code: "BG", name: "Bulgaria", region: "Europe" },
  { code: "HR", name: "Croatia", region: "Europe" },
  { code: "RS", name: "Serbia", region: "Europe" },
  { code: "UA", name: "Ukraine", region: "Europe" },
  { code: "RU", name: "Russia", region: "Europe" },
  { code: "EE", name: "Estonia", region: "Europe" },
  { code: "LV", name: "Latvia", region: "Europe" },
  { code: "LT", name: "Lithuania", region: "Europe" },
  { code: "SI", name: "Slovenia", region: "Europe" },
  { code: "SK", name: "Slovakia", region: "Europe" },
  { code: "LU", name: "Luxembourg", region: "Europe" },
  { code: "MC", name: "Monaco", region: "Europe" },
  { code: "MT", name: "Malta", region: "Europe" },
  { code: "CY", name: "Cyprus", region: "Europe" },
  { code: "AL", name: "Albania", region: "Europe" },
  { code: "MK", name: "North Macedonia", region: "Europe" },
  { code: "BA", name: "Bosnia & Herzegovina", region: "Europe" },
  { code: "ME", name: "Montenegro", region: "Europe" },
  { code: "BY", name: "Belarus", region: "Europe" },
  { code: "MD", name: "Moldova", region: "Europe" },
  { code: "LI", name: "Liechtenstein", region: "Europe" },
  { code: "SM", name: "San Marino", region: "Europe" },
  { code: "VA", name: "Vatican City", region: "Europe" },

  // === NORTH AMERICA ===
  { code: "US", name: "United States", region: "North America" },
  { code: "CA", name: "Canada", region: "North America" },
  { code: "MX", name: "Mexico", region: "North America" },
  { code: "GT", name: "Guatemala", region: "North America" },
  { code: "CR", name: "Costa Rica", region: "North America" },
  { code: "PA", name: "Panama", region: "North America" },
  { code: "CU", name: "Cuba", region: "North America" },
  { code: "JM", name: "Jamaica", region: "North America" },
  { code: "DO", name: "Dominican Republic", region: "North America" },
  { code: "HN", name: "Honduras", region: "North America" },
  { code: "SV", name: "El Salvador", region: "North America" },
  { code: "NI", name: "Nicaragua", region: "North America" },
  { code: "BZ", name: "Belize", region: "North America" },
  { code: "BS", name: "Bahamas", region: "North America" },
  { code: "BB", name: "Barbados", region: "North America" },
  { code: "TT", name: "Trinidad & Tobago", region: "North America" },

  // === SOUTH AMERICA ===
  { code: "BR", name: "Brazil", region: "South America" },
  { code: "AR", name: "Argentina", region: "South America" },
  { code: "CL", name: "Chile", region: "South America" },
  { code: "CO", name: "Colombia", region: "South America" },
  { code: "PE", name: "Peru", region: "South America" },
  { code: "EC", name: "Ecuador", region: "South America" },
  { code: "UY", name: "Uruguay", region: "South America" },
  { code: "PY", name: "Paraguay", region: "South America" },
  { code: "BO", name: "Bolivia", region: "South America" },
  { code: "VE", name: "Venezuela", region: "South America" },
  { code: "GY", name: "Guyana", region: "South America" },
  { code: "SR", name: "Suriname", region: "South America" },

  // === AFRICA ===
  { code: "ZA", name: "South Africa", region: "Africa" },
  { code: "EG", name: "Egypt", region: "Africa" },
  { code: "KE", name: "Kenya", region: "Africa" },
  { code: "NG", name: "Nigeria", region: "Africa" },
  { code: "GH", name: "Ghana", region: "Africa" },
  { code: "MA", name: "Morocco", region: "Africa" },
  { code: "TN", name: "Tunisia", region: "Africa" },
  { code: "DZ", name: "Algeria", region: "Africa" },
  { code: "TZ", name: "Tanzania", region: "Africa" },
  { code: "ET", name: "Ethiopia", region: "Africa" },
  { code: "UG", name: "Uganda", region: "Africa" },
  { code: "RW", name: "Rwanda", region: "Africa" },
  { code: "MU", name: "Mauritius", region: "Africa" },
  { code: "SC", name: "Seychelles", region: "Africa" },
  { code: "NA", name: "Namibia", region: "Africa" },
  { code: "BW", name: "Botswana", region: "Africa" },
  { code: "ZM", name: "Zambia", region: "Africa" },
  { code: "ZW", name: "Zimbabwe", region: "Africa" },
  { code: "MZ", name: "Mozambique", region: "Africa" },
  { code: "AO", name: "Angola", region: "Africa" },
  { code: "CM", name: "Cameroon", region: "Africa" },
  { code: "CI", name: "Cote d'Ivoire", region: "Africa" },
  { code: "SN", name: "Senegal", region: "Africa" },
  { code: "MG", name: "Madagascar", region: "Africa" },
  { code: "SD", name: "Sudan", region: "Africa" },
  { code: "LY", name: "Libya", region: "Africa" },
  { code: "SO", name: "Somalia", region: "Africa" },
  { code: "CD", name: "DR Congo", region: "Africa" },
  { code: "MR", name: "Mauritania", region: "Africa" },
  { code: "MW", name: "Malawi", region: "Africa" },
  { code: "LS", name: "Lesotho", region: "Africa" },
  { code: "SZ", name: "Eswatini", region: "Africa" },

  // === OCEANIA ===
  { code: "AU", name: "Australia", region: "Oceania" },
  { code: "NZ", name: "New Zealand", region: "Oceania" },
  { code: "FJ", name: "Fiji", region: "Oceania" },
  { code: "PG", name: "Papua New Guinea", region: "Oceania" },
  { code: "SB", name: "Solomon Islands", region: "Oceania" },
  { code: "VU", name: "Vanuatu", region: "Oceania" },
  { code: "WS", name: "Samoa", region: "Oceania" },
  { code: "TO", name: "Tonga", region: "Oceania" },
  { code: "FM", name: "Micronesia", region: "Oceania" },
  { code: "MH", name: "Marshall Islands", region: "Oceania" },
  { code: "PW", name: "Palau", region: "Oceania" },
  { code: "KI", name: "Kiribati", region: "Oceania" },
  { code: "TV", name: "Tuvalu", region: "Oceania" },
  { code: "NR", name: "Nauru", region: "Oceania" }
];

/* Get country by code */
function getCountryData(code) {
  if (countriesData[code]) {
    return countriesData[code];
  }
  // Return basic data if detailed not available
  const basic = countriesList.find(c => c.code === code);
  if (!basic) return null;
  return {
    name: basic.name,
    code: basic.code,
    region: basic.region,
    flagLetters: basic.code,
    heroDescription: `Complete visa and travel information for ${basic.name}.`,
    quickStats: {
      visaTypes: "Multiple",
      processingTime: "Varies",
      fees: "Contact for details",
      popularity: "Popular"
    },
    visaTypes: [
      {
        name: "Tourist Visa",
        description: `Standard tourist visa for visiting ${basic.name}. Contact Stamp Stories for detailed information.`,
        fee: "Contact for pricing",
        processing: "Varies by application",
        validity: "Depends on visa type",
        stayPeriod: "Depends on visa type"
      },
      {
        name: "Business Visa",
        description: `Business visa for professional visits to ${basic.name}. Contact us for requirements and processing.`,
        fee: "Contact for pricing",
        processing: "Varies by application",
        validity: "Depends on visa type",
        stayPeriod: "Depends on visa type"
      }
    ],
    requirements: [
      "Valid passport with minimum 6 months validity",
      "Completed visa application form",
      "Recent passport-size photographs",
      "Travel itinerary and accommodation proof",
      "Bank statements and financial proof",
      "Travel insurance (recommended)",
      "Additional documents based on visa type"
    ],
    process: [
      { title: "Select Visa Type", description: "Choose the appropriate visa category based on your purpose of travel to the destination country." },
      { title: "Complete Application", description: "Fill out the visa application form accurately with all required personal and travel details." },
      { title: "Submit Documents", description: "Provide all required supporting documents as per the visa category requirements." },
      { title: "Pay Fees", description: "Pay the applicable visa processing fees. Stamp Stories can assist with the payment process." },
      { title: "Attend Interview (if required)", description: "Some countries require a personal interview at the embassy or consulate." },
      { title: "Receive Visa", description: "Once approved, receive your visa via email (e-Visa) or passport stamping." }
    ],
    fees: [
      { type: "Tourist Visa", fee: "Contact for pricing", processingTime: "Varies", validity: "Varies" },
      { type: "Business Visa", fee: "Contact for pricing", processingTime: "Varies", validity: "Varies" }
    ],
    embassyLink: "#",
    embassyName: `Official ${basic.name} Embassy Website`,
    infographics: [
      { value: "Comprehensive", label: "Visa Services", desc: "Full visa assistance for this destination" },
      { value: "Expert", label: "Guidance", desc: "Professional support throughout the application" },
      { value: "Fast", label: "Processing", desc: "Efficient handling of your visa application" },
      { value: "High", label: "Success Rate", desc: "99.9% visa approval rate" }
    ],
    faqs: [
      { q: `What type of visa do I need for ${basic.name}?`, a: `The type of visa required depends on your purpose of travel. Common categories include Tourist Visa for leisure, Business Visa for professional visits, Student Visa for education, and Work Visa for employment. Contact Stamp Stories for a personalized assessment.` },
      { q: `What is the processing time for a ${basic.name} visa in 2026?`, a: `Processing times vary based on the visa type and embassy workload. Typically, tourist visas take 5-15 business days, while work or student visas may take 4-8 weeks. Express processing may be available at additional cost.` },
      { q: `What are the basic requirements for a ${basic.name} visa?`, a: `Basic requirements include: valid passport (6+ months validity), completed application form, recent passport photographs, travel itinerary, accommodation proof, financial statements showing sufficient funds, and travel insurance. Additional documents may be required based on visa type.` },
      { q: `How much does a ${basic.name} visa cost in INR?`, a: `Visa fees vary by type and nationality. Tourist visas typically range from INR 2,500 to INR 15,000. Business and work visas cost more. Contact Stamp Stories for the exact fee applicable to your specific case.` },
      { q: `Can I extend my visa while in ${basic.name}?`, a: `Visa extension policies vary by country. Some countries allow extensions for tourism purposes, while others require you to leave and re-enter. It is best to check with local immigration authorities or consult Stamp Stories for guidance.` },
      { q: `Is travel insurance mandatory for visiting ${basic.name}?`, a: `Many countries now require travel insurance as a condition for visa approval. Even when not mandatory, it is strongly recommended to cover medical emergencies, trip cancellations, and other unforeseen events.` },
      { q: `What happens if my ${basic.name} visa is rejected?`, a: `Visa rejection reasons vary. Common causes include incomplete documentation, insufficient funds, or concerns about intent to return. Stamp Stories can review your application, identify issues, and help you reapply with stronger documentation.` },
      { q: `How early should I apply for a ${basic.name} visa?`, a: `It is recommended to apply 4-6 weeks before your planned travel date for most visa types. Some countries allow applications up to 90 days in advance. Applying early ensures ample processing time.` },
      { q: `Do I need to visit the embassy in person?`, a: `Some countries require in-person biometric appointments, while others accept applications online or through authorized visa centers like Stamp Stories. We handle the process on your behalf where permitted.` },
      { q: `Can I get a ${basic.name} visa on arrival?`, a: `Visa on arrival availability depends on your nationality and the destination country. Many countries offer VoA or e-Visa options. Stamp Stories can inform you about your specific eligibility.` },
      { q: `What financial proof is needed for a ${basic.name} visa?`, a: `Most countries require bank statements for the last 3-6 months showing sufficient funds to cover your stay. Required amounts vary by destination, typically INR 50,000 to INR 5,00,000 depending on the trip duration and purpose.` },
      { q: `Can I work on a tourist visa in ${basic.name}?`, a: `No, tourist visas strictly prohibit employment. Working without the proper work visa is illegal and can result in deportation, fines, and future visa bans. You must obtain the appropriate work authorization.` },
      { q: `What documents are needed for a child's visa application?`, a: `Children require their own visa. Additional documents include: birth certificate, parental consent letter (if traveling with one parent or guardian), school ID, and both parents' passport copies. Minors may be exempt from visa fees in some cases.` },
      { q: `How does Stamp Stories help with my ${basic.name} visa application?`, a: `Stamp Stories provides end-to-end visa assistance including: eligibility assessment, document checklist and review, application form filling, appointment scheduling, interview preparation, application tracking, and post-visa support. Our 99.9% success rate ensures peace of mind.` },
      { q: `What is the success rate for ${basic.name} visa applications through Stamp Stories?`, a: `Stamp Stories maintains a 99.9% success rate across all visa applications, including ${basic.name}. Our expert team ensures your application is complete, accurate, and presents the strongest possible case for approval.` }
    ]
  };
}
