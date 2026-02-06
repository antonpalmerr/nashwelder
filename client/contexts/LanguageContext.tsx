import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "cz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Переводы
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.company": "Company",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact Us",
    "nav.aboutUs": "About Us",
    "nav.blog": "Blog",
    
    // Hero
    "hero.title": "Nash Welder",
    "hero.subtitle": "The Best Licensed Welding Company Located in Prague",
    "hero.subtitle.mobile": "The Best Licensed Welding<br />Company Located in Prague",
    "hero.button": "DISCOVER MORE",
    
    // About
    "about.subtitle": "Welcome to Nash Welder",
    "about.title": "WHERE SKILLS AND CREATIVITY MERGE TO SHAPE DREAMS",
    "about.description": "At Nash Welder, you can exceed expectations with licensed dedication as our company delivers perfection.",
    "about.warranty": "Structural Frame Warranty",
    "about.delivery": "Timely Delivery",
    "about.quality": "Quality Craftsmanship",
    "about.steelWarranty": "Steel Warranty against Defects",
    "about.innovative": "Innovative Designs",
    "about.crafted": "Crafted from the Ground Up",
    
    // Services
    "services.subtitle": "Our Services",
    "services.title": "WHAT\nWE\nOFFER",
    "services.welding.title": "WELDING",
    "services.welding.description": "We provide high-quality welding of black steel, stainless steel, aluminum, and its alloys. Our team works with professional equipment using all major technologies: TIG, MIG/MAG, and MMA.",
    "services.pipelines.title": "PIPELINES",
    "services.pipelines.description": "A complete range of pipeline services — from professional welding and installation to subsequent insulation. We guarantee the strength and tightness of every construction.",
    "services.school.title": "WELDING SCHOOL",
    "services.school.description": "Learn the art of welding from scratch or enhance your existing skills. We offer both online courses for theoretical training and offline sessions with hands-on practice on modern equipment.",
    "services.contact": "CONTACT US",
    
    // Service Detail Pages
    "service.features": "FEATURES",
    "service.benefits": "BENEFITS",
    "service.backToServices": "Back to Services",
    "service.contactUs": "CONTACT US",
    "service.notFound": "Service Not Found",
    
    // Welding Service Detail
    "service.welding.title": "WELDING",
    "service.welding.slogan": "Precision. Quality. Excellence.",
    "service.welding.descriptionPart1": "At Nash Welder, we provide professional welding services with a focus on precision, quality, and efficiency. We work with a wide range of materials, including:\n\n• Aluminum and its alloys\n\n• Stainless steel\n\n• Black steel (carbon steel).",
    "service.welding.descriptionPart2": "Our experienced and certified team handles various types of welding, including construction, repair, and installation. We take pride in our ability to quickly respond to inquiries and deliver results on time — without compromising on quality.\n\n\nWhether it's the production of metal structures, maintenance welding, or on-site installation — you can rely on us for reliable, top-tier service.\n\n\nWe are fully certified and continuously improve our skills to ensure the highest standard of work. Let's discuss your project — we're ready to weld it into reality.",
    "service.welding.fullDescription": "At Nash Welder, we provide professional welding services with a focus on precision, quality, and efficiency. We work with a wide range of materials, including:\n\n• Aluminum and its alloys\n\n• Stainless steel\n\n• Black steel (carbon steel)\n\n\nOur experienced and certified team handles various types of welding, including construction, repair, and installation. We take pride in our ability to quickly respond to inquiries and deliver results on time — without compromising on quality.\n\n\nWhether it's the production of metal structures, maintenance welding, or on-site installation — you can rely on us for reliable, top-tier service.\n\n\nWe are fully certified and continuously improve our skills to ensure the highest standard of work. Let's discuss your project — we're ready to weld it into reality.",
    "service.welding.feature1": "TIG Welding: Precision welding for stainless steel and aluminum with superior quality and aesthetics",
    "service.welding.feature2": "MIG/MAG Welding: Efficient and versatile welding for various materials and thicknesses",
    "service.welding.feature3": "MMA Welding: Traditional stick welding for robust and reliable connections",
    "service.welding.feature4": "Material Expertise: Specialized knowledge in black steel, stainless steel, aluminum, and alloys",
    "service.welding.benefit1": "Professional equipment and certified welders ensure top-quality results",
    "service.welding.benefit2": "Comprehensive warranty on all welding work",
    "service.welding.benefit3": "Timely project completion with attention to detail",
    "service.welding.metaDescription": "Professional welding services in Prague. TIG, MIG/MAG, and MMA welding for black steel, stainless steel, aluminum, and alloys. Licensed welders with professional equipment.",
    "service.welding.metaKeywords": "welding Prague, TIG welding, MIG welding, stainless steel welding, aluminum welding, professional welder",
    
    // Pipelines Service Detail
    "service.pipelines.title": "PIPELINES",
    "service.pipelines.slogan": "Professional. Reliable.",
    "service.pipelines.descriptionPart1": "We provide professional pipeline welding and installation services of any complexity.",
    "service.pipelines.descriptionPart2": "We handle pipes of various diameters and thicknesses. We take on both industrial and private projects, always offering a personalized approach to every client.\n\nLeave your pipeline project to professionals.",
    "service.pipelines.fullDescription": "We provide professional pipeline welding and installation services of any complexity. Our expertise includes water supply systems, heating systems, gas supply systems, and ventilation and air duct systems. We weld using TIG and RTG methods, working with aluminum, stainless steel, and black steel.",
    "service.pipelines.feature1": "Water supply systems: Complete installation and welding services",
    "service.pipelines.feature2": "Heating systems: Professional installation and maintenance",
    "service.pipelines.feature3": "Gas supply systems: Safe and reliable pipeline solutions",
    "service.pipelines.feature4": "Ventilation and air duct systems: Expert installation and welding",
    "service.pipelines.benefit1": "High-quality welds using TIG and RTG methods",
    "service.pipelines.benefit2": "Compliance with all safety and technical standards",
    "service.pipelines.benefit3": "On-site service availability for all projects",
    "service.pipelines.ourExpertise": "OUR EXPERTISE",
    "service.pipelines.whatWeGuarantee": "WHAT WE GUARANTEE",
    "service.pipelines.technicalMethods": "TECHNICAL METHODS",
    "service.pipelines.metaDescription": "Professional pipeline installation, welding, and insulation services in Prague. Complete pipeline solutions with guaranteed quality and reliability.",
    "service.pipelines.metaKeywords": "pipeline installation Prague, pipeline welding, pipeline insulation, industrial pipelines",
    
    // Welding School Service Detail
    "service.school.title": "WELDING SCHOOL",
    "service.school.slogan": "Learn. Practice. Excel.",
    "service.school.descriptionPart1": "Want to become a welder or improve your welding skills?\n\nWe've created a practical online course based on real experience and hands-on metalwork.",
    "service.school.descriptionPart2": "",
    "service.school.whatYouGet": "WHAT YOU'LL GET",
    "service.school.youWillLearn": "YOU WILL LEARN",
    "service.school.additionalServices": "ADDITIONAL SERVICES",
    "service.school.fullDescription": "Want to become a welder or improve your welding skills? We've created a practical online course based on real experience and hands-on metalwork. Learn welding from scratch or enhance your existing skills.",
    "service.school.feature1": "Access to the course via Telegram",
    "service.school.feature2": "Video lessons on TIG, MIG, MAG, and MMA",
    "service.school.feature3": "Simple, beginner-friendly explanations",
    "service.school.feature4": "Access from your phone or computer",
    "service.school.feature5": "Certificate upon course completion",
    "service.school.feature6": "Option to receive individual tasks",
    "service.school.feature7": "Option to take personalized online lessons",
    "service.school.benefit1": "How to start welding from scratch",
    "service.school.benefit2": "How to properly set up a welding machine",
    "service.school.benefit3": "How to weld aluminum, stainless steel, and carbon steel",
    "service.school.benefit4": "How to avoid common mistakes",
    "service.school.benefit5": "How to weld pipes",
    "service.school.additional1": "Renewal of old certificates",
    "service.school.additional2": "Issuance of European welding certificates (valid across all EU countries)",
    "service.school.additional3": "Preparation for employment in major companies",
    "service.school.metaDescription": "Professional welding school in Prague. Learn welding from scratch or advance your skills with online and offline courses. Industry-recognized certification.",
    "service.school.metaKeywords": "welding school Prague, welding courses, welding training, welding certification",
    
    // About Us Page
    "aboutUs.metaTitle": "About Us",
    "aboutUs.metaDescription": "Learn about Nash Welder - a professional welding company based in Prague, Czech Republic. Founded in 2018, we provide high-quality welding services across Europe.",
    "aboutUs.metaKeywords": "about Nash Welder, welding company Prague, professional welders, welding services Europe",
    "aboutUs.title": "ABOUT US",
    "aboutUs.foundedTitle": "Founded in 2018",
    "aboutUs.foundedText": "Nash Welder began operations in 2018 and has since become a trusted partner for hundreds of clients.",
    "aboutUs.expertiseTitle": "Experience & Expertise",
    "aboutUs.expertiseText": "We have gained significant experience in various welding fields, particularly in working with aluminum and its alloys, stainless steel, and black metal.",
    "aboutUs.methodsTitle": "Modern Methods & Technologies",
    "aboutUs.methodsText": "Thanks to the use of modern welding methods — TIG, MIG, MAG, and MMA — we perform a wide range of tasks of any complexity.",
    "aboutUs.teamTitle": "Our Team",
    "aboutUs.teamText": "Our team consists of more than ten highly qualified specialists who continuously improve their skills, master new technologies, and enhance their abilities to meet the highest standards in the welding industry.",
    "aboutUs.locationTitle": "Location & Reach",
    "aboutUs.locationText": "We are based in the Czech Republic, in Prague, but we perform work throughout Europe. Regardless of the client's location, we guarantee high quality, reliability, and professionalism in every project.",
    "aboutUs.valuesTitle": "OUR VALUES",
    "aboutUs.trustTitle": "Trust & Return Clients",
    "aboutUs.trustText": "We are proud that our clients constantly return to us, trusting our craftsmanship and professionalism.",
    "aboutUs.qualityTitle": "Quality & Challenge",
    "aboutUs.qualityText": "Every order is a challenge that we accept with enthusiasm, guaranteeing impeccable results.",
    "aboutUs.ctaTitle": "YOUR PARTNER IN WELDING",
    "aboutUs.ctaText": "Nash Welder — your partner in the world of welding, where passion for the craft and modern technologies create the perfect result.",
    "aboutUs.viewServices": "VIEW SERVICES",
    
    // Stats
    "stats.subtitle": "Nash Welder",
    "stats.title": "A HUB OF THE BEST WELDERS",
    "stats.description": "Nash Welder's Prestige is showcasing the best welders who define metal excellence.",
    "stats.years": "Years in Welding Industry",
    "stats.metalworks": "Welders in Team",
    "stats.projects": "Completed Projects",
    "stats.clients": "Active Projects",
    
    // CTA
    "cta.title": "ARE YOU LOOKING FOR AN INNOVATIVE AND ENRICHING WELDING COMPANY WITH LICENSED EXPERTISE?",
    "cta.button": "CONTACT US",
    
    // Testimonials
    "testimonials.subtitle": "Testimonials",
    "testimonials.title": "WHAT\nOUR\nCLIENTS\nSAY",
    
    // Footer
    "footer.phone": "Phone",
    "footer.contactPerson": "Contact Person",
    "footer.email": "Email",
    "footer.company": "Company",
    "footer.address": "Address",
    "footer.workingHours": "Working Hours",
    "footer.workingHoursWeekdays": "Mon–Fri: 08:00–18:00",
    "footer.workingHoursWeekend": "Sat–Sun: by appointment",
    "footer.companyId": "Company ID (IČO)",
    "footer.vatId": "VAT ID (DIČ)",
    
    // Contact Page
    "contact.subtitle": "Get in Touch",
    "contact.title": "CONTACT US",
    "contact.description": "Have a question or want to discuss your welding project? Fill out the form below and we'll get back to you as soon as possible.",
    "contact.name": "Name",
    "contact.phone": "Phone Number",
    "contact.email": "Email",
    "contact.message": "Request / Message",
    "contact.namePlaceholder": "Your name",
    "contact.phonePlaceholder": "Your phone number",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.messagePlaceholder": "Tell us about your project or question...",
    "contact.send": "SEND MESSAGE",
    "contact.success": "Thank you for your message! We will contact you soon.",
    "contact.error": "Something went wrong. Please try again.",
    "contact.features": "FEATURES",
    "contact.benefits": "BENEFITS",
    "contact.feature1": "TIG Welding: Precision welding for stainless steel and aluminum with superior quality and aesthetics",
    "contact.feature2": "MIG/MAG Welding: Efficient and versatile",
    "contact.benefit1": "Professional equipment and certified welders ensure top-quality results",
    "contact.benefit2": "Comprehensive warranty on all welding work",
    "contact.benefit3": "Timely project completion with attention to detail",
    
    // Blog
    "blog.subtitle": "Our Blog",
    "blog.title": "LATEST\nNEWS\n& INSIGHTS",
    "blog.description": "Stay updated with the latest welding techniques, industry news, and expert tips from Nash Welder.",
    "blog.listTitle": "Blog",
    "blog.readMore": "Read More",
    "blog.backToBlog": "Back to Blog",
    "blog.notFound": "Blog Post Not Found",
    
    // Blog Post 1
    "blog.post1.title": "Advanced TIG Welding Techniques for Stainless Steel",
    "blog.post1.excerpt": "Discover professional TIG welding methods that ensure perfect welds on stainless steel projects. Learn about proper preparation, electrode selection, and finishing techniques.",
    "blog.post1.date": "January 15, 2025",
    "blog.post1.category": "Welding Techniques",
    "blog.post1.content1": "TIG (Tungsten Inert Gas) welding is one of the most precise welding methods available, especially when working with stainless steel. At Nash Welder, we've mastered the art of TIG welding to deliver flawless results on every project.",
    "blog.post1.content2": "The key to successful TIG welding lies in proper preparation. Before starting, ensure that the material is clean and free from contaminants. Use a dedicated stainless steel brush and avoid cross-contamination with carbon steel tools. This attention to detail prevents corrosion and ensures the integrity of your weld.",
    "blog.post1.content3": "Electrode selection is crucial for achieving optimal results. For stainless steel, we recommend using a 2% thoriated tungsten electrode, sharpened to a fine point. The gas mixture should consist of 100% argon for most applications, though some projects may benefit from a helium-argon mix for increased penetration.",
    "blog.post1.content4": "Temperature control is essential when welding stainless steel. Maintain a consistent travel speed and avoid overheating, which can lead to warping and reduced corrosion resistance. Our experienced welders use pulse welding techniques to manage heat input effectively.",
    "blog.post1.content5": "Post-weld treatment is just as important as the welding process itself. Proper cleaning and passivation ensure that the stainless steel maintains its corrosion-resistant properties. At Nash Welder, we follow industry best practices to deliver welds that meet the highest quality standards.",
    "blog.post1.metaDescription": "Learn advanced TIG welding techniques for stainless steel from Nash Welder. Professional tips on preparation, electrode selection, and finishing for perfect welds.",
    "blog.post1.metaKeywords": "TIG welding, stainless steel welding, welding techniques, Prague welder, professional welding",
    
    // Blog Post 2
    "blog.post2.title": "Pipeline Installation and Insulation: Complete Guide",
    "blog.post2.excerpt": "Comprehensive guide to professional pipeline installation, welding, and insulation services. Learn about our approach to ensuring strength, tightness, and long-term reliability.",
    "blog.post2.date": "January 10, 2025",
    "blog.post2.category": "Pipelines",
    "blog.post2.content1": "Pipeline installation requires meticulous planning and execution to ensure safety, efficiency, and longevity. At Nash Welder, we specialize in complete pipeline solutions, from initial design consultation to final installation and insulation.",
    "blog.post2.content2": "Our pipeline welding process begins with thorough material inspection and preparation. We use advanced welding techniques, including automated orbital welding for consistent, high-quality welds. Each joint undergoes rigorous testing to ensure it meets or exceeds industry standards.",
    "blog.post2.content3": "Proper insulation is critical for pipeline systems, especially in industrial and commercial applications. We offer comprehensive insulation services using high-quality materials that provide thermal efficiency and protection against environmental factors. Our insulation solutions help reduce energy costs and extend the lifespan of your pipeline system.",
    "blog.post2.content4": "Quality assurance is at the heart of our pipeline services. Every project includes comprehensive testing, including pressure tests, leak detection, and structural integrity assessments. We maintain detailed documentation throughout the process, ensuring compliance with all relevant regulations and standards.",
    "blog.post2.content5": "Whether you need pipeline installation for a new construction project or maintenance services for existing systems, Nash Welder has the expertise and equipment to deliver exceptional results. Contact us to discuss your pipeline needs and discover how we can help ensure the reliability and efficiency of your system.",
    "blog.post2.metaDescription": "Professional pipeline installation, welding, and insulation services in Prague. Complete guide to pipeline solutions from Nash Welder.",
    "blog.post2.metaKeywords": "pipeline installation, pipeline welding, pipeline insulation, Prague, industrial welding",
    
    // Blog Post 3
    "blog.post3.title": "Welding School: From Beginner to Professional",
    "blog.post3.excerpt": "Explore our comprehensive welding education program. Whether you're starting from scratch or looking to advance your skills, our courses combine theory and hands-on practice.",
    "blog.post3.date": "January 5, 2025",
    "blog.post3.category": "Education",
    "blog.post3.content1": "At Nash Welder, we believe that quality welding education is the foundation of excellence in the industry. Our Welding School offers comprehensive training programs designed for both beginners and experienced professionals looking to enhance their skills.",
    "blog.post3.content2": "Our curriculum combines theoretical knowledge with extensive hands-on practice. Students learn about welding safety, equipment operation, material properties, and various welding techniques including TIG, MIG/MAG, and MMA. Each course is structured to build skills progressively, ensuring that students gain confidence and competence at every stage.",
    "blog.post3.content3": "We offer flexible learning options to accommodate different schedules and learning preferences. Our online courses provide comprehensive theoretical training that students can complete at their own pace. These are complemented by in-person practical sessions where students work with modern welding equipment under the guidance of experienced instructors.",
    "blog.post3.content4": "Upon completion of our programs, students receive certification that recognizes their skills and knowledge. Our certification is recognized in the industry and can help advance careers in welding. Many of our graduates have gone on to work with leading companies or have started their own successful welding businesses.",
    "blog.post3.content5": "Whether you're interested in welding as a career or as a hobby, our Welding School provides the knowledge and skills you need to succeed. Join us and discover the art and science of professional welding. Contact us today to learn more about our upcoming courses and enrollment options.",
    "blog.post3.metaDescription": "Professional welding school in Prague. Learn welding from scratch or advance your skills with online and offline courses from Nash Welder.",
    "blog.post3.metaKeywords": "welding school, welding courses, welding training, Prague, welding certification",
  },
  cz: {
    // Navigation
    "nav.company": "Společnost",
    "nav.services": "Služby",
    "nav.testimonials": "Reference",
    "nav.contact": "Kontakt",
    "nav.aboutUs": "O nás",
    "nav.blog": "Blog",
    
    // Hero
    "hero.title": "Nash Welder",
    "hero.subtitle": "Nejlepší licencovaná svařovací společnost v Praze",
    "hero.subtitle.mobile": "Nejlepší licencovaná<br />svařovací společnost v Praze",
    "hero.button": "ZVÍT VÍCE",
    
    // About
    "about.subtitle": "Vítejte v Nash Welder",
    "about.title": "KDE SE SETKÁVAJÍ DOVEDNOSTI A KREATIVITA, ABY VYTVOŘILY SNY",
    "about.description": "V Nash Welder můžete překročit očekávání díky licencované oddanosti, protože naše společnost dodává dokonalost.",
    "about.warranty": "Záruka na konstrukční rám",
    "about.delivery": "Včasné dodání",
    "about.quality": "Kvalitní řemeslná práce",
    "about.steelWarranty": "Záruka na ocel proti vadám",
    "about.innovative": "Inovativní návrhy",
    "about.crafted": "Vytvořeno od základů",
    
    // Services
    "services.subtitle": "Naše služby",
    "services.title": "CO\nNABÍZÍME",
    "services.welding.title": "SVÁŘENÍ",
    "services.welding.description": "Poskytujeme vysoce kvalitní svařování černé oceli, nerezové oceli, hliníku a jeho slitin. Náš tým pracuje s profesionálním vybavením pomocí všech hlavních technologií: TIG, MIG/MAG a MMA.",
    "services.pipelines.title": "POTRUBÍ",
    "services.pipelines.description": "Kompletní škála služeb pro potrubí — od profesionálního svařování a instalace až po následnou izolaci. Garantujeme pevnost a těsnost každé konstrukce.",
    "services.school.title": "SVÁŘEČSKÁ ŠKOLA",
    "services.school.description": "Naučte se umění svařování od základů nebo si zdokonalte své stávající dovednosti. Nabízíme jak online kurzy pro teoretickou výuku, tak offline lekce s praktickým cvičením na moderním vybavení.",
    "services.contact": "KONTAKTUJTE NÁS",
    
    // Service Detail Pages
    "service.features": "VLASTNOSTI",
    "service.benefits": "VÝHODY",
    "service.backToServices": "Zpět na služby",
    "service.contactUs": "KONTAKTUJTE NÁS",
    "service.notFound": "Služba nenalezena",
    
    // Welding Service Detail
    "service.welding.title": "SVÁŘENÍ",
    "service.welding.slogan": "Přesnost. Kvalita. Dokonalost.",
    "service.welding.descriptionPart1": "V Nash Welder poskytujeme profesionální svařovací služby se zaměřením na přesnost, kvalitu a efektivitu. Pracujeme se širokou škálou materiálů, včetně:\n\n• Hliníku a jeho slitin\n\n• Nerezové oceli\n\n• Černé oceli (uhlíkové oceli).",
    "service.welding.descriptionPart2": "Náš zkušený a certifikovaný tým zvládá různé typy svařování, včetně konstrukce, oprav a instalace. Jsme hrdí na naši schopnost rychle reagovat na dotazy a dodávat výsledky včas — bez kompromisů v kvalitě.\n\n\nAť už jde o výrobu kovových konstrukcí, údržbové svařování nebo montáž na místě — můžete se na nás spolehnout pro spolehlivé, špičkové služby.\n\n\nJsme plně certifikovaní a neustále zlepšujeme naše dovednosti, abychom zajistili nejvyšší standard práce. Pojďme prodiskutovat váš projekt — jsme připraveni ho svařit do reality.",
    "service.welding.fullDescription": "V Nash Welder poskytujeme profesionální svařovací služby se zaměřením na přesnost, kvalitu a efektivitu. Pracujeme se širokou škálou materiálů, včetně:\n\n• Hliníku a jeho slitin\n\n• Nerezové oceli\n\n• Černé oceli (uhlíkové oceli)\n\n\nNáš zkušený a certifikovaný tým zvládá různé typy svařování, včetně konstrukce, oprav a instalace. Jsme hrdí na naši schopnost rychle reagovat na dotazy a dodávat výsledky včas — bez kompromisů v kvalitě.\n\n\nAť už jde o výrobu kovových konstrukcí, údržbové svařování nebo montáž na místě — můžete se na nás spolehnout pro spolehlivé, špičkové služby.\n\n\nJsme plně certifikovaní a neustále zlepšujeme naše dovednosti, abychom zajistili nejvyšší standard práce. Pojďme prodiskutovat váš projekt — jsme připraveni ho svařit do reality.",
    "service.welding.feature1": "TIG svařování: Precizní svařování pro nerezovou ocel a hliník s vynikající kvalitou a estetikou",
    "service.welding.feature2": "MIG/MAG svařování: Efektivní a univerzální svařování pro různé materiály a tloušťky",
    "service.welding.feature3": "MMA svařování: Tradiční svařování obalenou elektrodou pro robustní a spolehlivé spoje",
    "service.welding.feature4": "Odbornost v materiálech: Specializované znalosti v černé oceli, nerezové oceli, hliníku a slitinách",
    "service.welding.benefit1": "Profesionální vybavení a certifikovaní svařeči zajišťují nejvyšší kvalitu výsledků",
    "service.welding.benefit2": "Komplexní záruka na všechny svařovací práce",
    "service.welding.benefit3": "Včasné dokončení projektu s pozorností k detailům",
    "service.welding.metaDescription": "Profesionální svařovací služby v Praze. TIG, MIG/MAG a MMA svařování pro černou ocel, nerezovou ocel, hliník a slitiny. Licencovaní svařeči s profesionálním vybavením.",
    "service.welding.metaKeywords": "svařování Praha, TIG svařování, MIG svařování, svařování nerezové oceli, svařování hliníku, profesionální svařeč",
    
    // Pipelines Service Detail
    "service.pipelines.title": "POTRUBÍ",
    "service.pipelines.slogan": "Profesionální. Spolehlivé.",
    "service.pipelines.descriptionPart1": "Poskytujeme profesionální svařování a instalaci potrubí jakékoli složitosti.",
    "service.pipelines.descriptionPart2": "Zvládáme potrubí různých průměrů a tlouštěk. Přijímáme jak průmyslové, tak soukromé projekty, vždy nabízející personalizovaný přístup ke každému klientovi.\n\nSvěřte svůj projekt potrubí profesionálům.",
    "service.pipelines.fullDescription": "Poskytujeme profesionální svařování a instalaci potrubí jakékoli složitosti. Naše odbornost zahrnuje vodovodní systémy, topné systémy, plynové systémy a větrání a vzduchotechnické systémy. Svařujeme pomocí metod TIG a RTG, pracujeme s hliníkem, nerezovou ocelí a černou ocelí.",
    "service.pipelines.feature1": "Vodovodní systémy: Kompletní instalační a svařovací služby",
    "service.pipelines.feature2": "Topné systémy: Profesionální instalace a údržba",
    "service.pipelines.feature3": "Plynové systémy: Bezpečná a spolehlivá řešení potrubí",
    "service.pipelines.feature4": "Větrání a vzduchotechnické systémy: Odborná instalace a svařování",
    "service.pipelines.benefit1": "Vysoce kvalitní svary pomocí metod TIG a RTG",
    "service.pipelines.benefit2": "Soulad se všemi bezpečnostními a technickými standardy",
    "service.pipelines.benefit3": "Dostupnost služeb na místě pro všechny projekty",
    "service.pipelines.ourExpertise": "NAŠE ODBORNOST",
    "service.pipelines.whatWeGuarantee": "CO ZARUČUJEME",
    "service.pipelines.technicalMethods": "TECHNICKÉ METODY",
    "service.pipelines.metaDescription": "Profesionální instalace, svařování a izolace potrubí v Praze. Kompletní řešení potrubí se zaručenou kvalitou a spolehlivostí.",
    "service.pipelines.metaKeywords": "instalace potrubí Praha, svařování potrubí, izolace potrubí, průmyslové potrubí",
    
    // Welding School Service Detail
    "service.school.title": "SVÁŘEČSKÁ ŠKOLA",
    "service.school.slogan": "Učte se. Cvičte. Vynikněte.",
    "service.school.descriptionPart1": "Chcete se stát svařečem nebo si zdokonalit své svařovací dovednosti?\n\nVytvořili jsme praktický online kurz založený na skutečných zkušenostech a praktické práci s kovy.",
    "service.school.descriptionPart2": "",
    "service.school.whatYouGet": "CO ZÍSKÁTE",
    "service.school.youWillLearn": "NAUČÍTE SE",
    "service.school.additionalServices": "DALŠÍ SLUŽBY",
    "service.school.fullDescription": "Chcete se stát svařečem nebo si zdokonalit své svařovací dovednosti? Vytvořili jsme praktický online kurz založený na skutečných zkušenostech a praktické práci s kovy. Naučte se svařovat od základů nebo si zdokonalte své stávající dovednosti.",
    "service.school.feature1": "Přístup ke kurzu přes Telegram",
    "service.school.feature2": "Video lekce o TIG, MIG, MAG a MMA",
    "service.school.feature3": "Jednoduchá, začátečnicky přívětivá vysvětlení",
    "service.school.feature4": "Přístup z vašeho telefonu nebo počítače",
    "service.school.feature5": "Certifikát po dokončení kurzu",
    "service.school.feature6": "Možnost získat individuální úkoly",
    "service.school.feature7": "Možnost absolvovat personalizované online lekce",
    "service.school.benefit1": "Jak začít svařovat od základů",
    "service.school.benefit2": "Jak správně nastavit svařovací stroj",
    "service.school.benefit3": "Jak svařovat hliník, nerezovou ocel a uhlíkovou ocel",
    "service.school.benefit4": "Jak se vyhnout běžným chybám",
    "service.school.benefit5": "Jak svařovat potrubí",
    "service.school.additional1": "Obnovení starých certifikátů",
    "service.school.additional2": "Vydání evropských svařovacích certifikátů (platné ve všech zemích EU)",
    "service.school.additional3": "Příprava na zaměstnání ve velkých společnostech",
    "service.school.metaDescription": "Profesionální svářečská škola v Praze. Naučte se svařování od základů nebo rozviňte své dovednosti s online a offline kurzy. Průmyslově uznávaná certifikace.",
    "service.school.metaKeywords": "svářečská škola Praha, kurzy svařování, výcvik svařování, certifikace svařování",
    
    // About Us Page
    "aboutUs.metaTitle": "O nás",
    "aboutUs.metaDescription": "Poznejte Nash Welder - profesionální svařovací společnost se sídlem v Praze, Česká republika. Založena v roce 2018, poskytujeme vysoce kvalitní svařovací služby po celé Evropě.",
    "aboutUs.metaKeywords": "o Nash Welder, svařovací společnost Praha, profesionální svařeči, svařovací služby Evropa",
    "aboutUs.title": "O NÁS",
    "aboutUs.foundedTitle": "Založeno v roce 2018",
    "aboutUs.foundedText": "Nash Welder zahájil činnost v roce 2018 a od té doby se stal důvěryhodným partnerem pro stovky klientů.",
    "aboutUs.expertiseTitle": "Zkušenosti a odbornost",
    "aboutUs.expertiseText": "Získali jsme významné zkušenosti v různých oblastech svařování, zejména při práci s hliníkem a jeho slitinami, nerezovou ocelí a černým kovem.",
    "aboutUs.methodsTitle": "Moderní metody a technologie",
    "aboutUs.methodsText": "Díky použití moderních metod svařování — TIG, MIG, MAG a MMA — provádíme širokou škálu úkolů jakékoli složitosti.",
    "aboutUs.teamTitle": "Náš tým",
    "aboutUs.teamText": "Náš tým se skládá z více než deseti vysoce kvalifikovaných specialistů, kteří neustále zlepšují své dovednosti, osvojují si nové technologie a zdokonalují své schopnosti, aby splnili nejvyšší standardy ve svařovacím průmyslu.",
    "aboutUs.locationTitle": "Lokalita a dosah",
    "aboutUs.locationText": "Jsme založeni v České republice, v Praze, ale provádíme práce po celé Evropě. Bez ohledu na umístění klienta garantujeme vysokou kvalitu, spolehlivost a profesionalitu v každém projektu.",
    "aboutUs.valuesTitle": "NAŠE HODNOTY",
    "aboutUs.trustTitle": "Důvěra a vracející se klienti",
    "aboutUs.trustText": "Jsme hrdí na to, že se naši klienti k nám neustále vracejí, důvěřují našemu řemeslu a profesionalitě.",
    "aboutUs.qualityTitle": "Kvalita a výzva",
    "aboutUs.qualityText": "Každá objednávka je výzvou, kterou přijímáme s nadšením a zaručujeme bezchybné výsledky.",
    "aboutUs.ctaTitle": "VÁŠ PARTNER VE SVAŘOVÁNÍ",
    "aboutUs.ctaText": "Nash Welder — váš partner ve světě svařování, kde vášeň pro řemeslo a moderní technologie vytvářejí dokonalý výsledek.",
    "aboutUs.viewServices": "ZOBRAZIT SLUŽBY",
    
    // Stats
    "stats.subtitle": "Nash Welder",
    "stats.title": "CENTRUM NEJLEPŠÍCH SVÁŘEČŮ",
    "stats.description": "Prestiž Nash Welder představuje nejlepší svařeče, kteří definují dokonalost kovů.",
    "stats.years": "Let v oblasti svařování",
    "stats.metalworks": "Svařovačů v týmu",
    "stats.projects": "Realizovaných projektů",
    "stats.clients": "Aktuálních projektů",
    
    // CTA
    "cta.title": "HLEDÁTE INOVATIVNÍ A OBOHACUJÍCÍ SVÁŘOVACÍ SPOLEČNOST S LICENCOVANOU ODBORNOSTÍ?",
    "cta.button": "KONTAKTUJTE NÁS",
    
    // Testimonials
    "testimonials.subtitle": "Reference",
    "testimonials.title": "CO\nŘÍKAJÍ\nNAŠI\nKLIENTI",
    
    // Footer
    "footer.phone": "Telefon",
    "footer.contactPerson": "Kontaktní osoba",
    "footer.email": "Email",
    "footer.company": "Společnost",
    "footer.address": "Adresa",
    "footer.workingHours": "Pracovní doba",
    "footer.workingHoursWeekdays": "Po–Pá: 08:00–18:00",
    "footer.workingHoursWeekend": "So–Ne: po dohodě",
    "footer.companyId": "IČO",
    "footer.vatId": "DIČ",
    
    // Contact Page
    "contact.subtitle": "Kontaktujte nás",
    "contact.title": "KONTAKTUJTE NÁS",
    "contact.description": "Máte otázku nebo chcete prodiskutovat svůj svařovací projekt? Vyplňte formulář níže a my se vám co nejdříve ozveme.",
    "contact.name": "Jméno",
    "contact.phone": "Telefonní číslo",
    "contact.email": "Email",
    "contact.message": "Požadavek / Zpráva",
    "contact.namePlaceholder": "Vaše jméno",
    "contact.phonePlaceholder": "Vaše telefonní číslo",
    "contact.emailPlaceholder": "vas.email@priklad.cz",
    "contact.messagePlaceholder": "Řekněte nám o svém projektu nebo otázce...",
    "contact.send": "ODESLAT ZPRÁVU",
    "contact.success": "Děkujeme za vaši zprávu! Brzy se vám ozveme.",
    "contact.error": "Něco se pokazilo. Zkuste to prosím znovu.",
    "contact.features": "VLASTNOSTI",
    "contact.benefits": "VÝHODY",
    "contact.feature1": "TIG svařování: Precizní svařování pro nerezovou ocel a hliník s vynikající kvalitou a estetikou",
    "contact.feature2": "MIG/MAG svařování: Efektivní a univerzální",
    "contact.benefit1": "Profesionální vybavení a certifikovaní svařeči zajišťují nejvyšší kvalitu výsledků",
    "contact.benefit2": "Komplexní záruka na všechny svařovací práce",
    "contact.benefit3": "Včasné dokončení projektu s pozorností k detailům",
    
    // Blog
    "blog.subtitle": "Náš blog",
    "blog.title": "NEJNOVĚJŠÍ\nNOVINKY\nA INSPIRACE",
    "blog.description": "Buďte v obraze s nejnovějšími svařovacími technikami, novinkami z oboru a odbornými tipy od Nash Welder.",
    "blog.listTitle": "Blog",
    "blog.readMore": "Číst více",
    "blog.backToBlog": "Zpět na blog",
    "blog.notFound": "Článek nenalezen",
    
    // Blog Post 1
    "blog.post1.title": "Pokročilé techniky TIG svařování pro nerezovou ocel",
    "blog.post1.excerpt": "Objevte profesionální metody TIG svařování, které zajišťují dokonalé svary na projektech z nerezové oceli. Naučte se o správné přípravě, výběru elektrod a technikách dokončování.",
    "blog.post1.date": "15. ledna 2025",
    "blog.post1.category": "Svařovací techniky",
    "blog.post1.content1": "TIG (Tungsten Inert Gas) svařování je jednou z nejpřesnějších dostupných svařovacích metod, zejména při práci s nerezovou ocelí. V Nash Welder jsme zvládli umění TIG svařování, abychom dosáhli bezchybných výsledků na každém projektu.",
    "blog.post1.content2": "Klíčem k úspěšnému TIG svařování je správná příprava. Před zahájením zajistěte, aby byl materiál čistý a bez kontaminantů. Použijte vyhrazený kartáč na nerezovou ocel a vyhněte se křížové kontaminaci s nástroji z uhlíkové oceli. Tato pozornost k detailům zabraňuje korozi a zajišťuje integritu vašeho svaru.",
    "blog.post1.content3": "Výběr elektrody je zásadní pro dosažení optimálních výsledků. Pro nerezovou ocel doporučujeme použít wolframovou elektrodu s 2% thoria, naostřenou do jemného hrotu. Směs plynů by měla sestávat ze 100% argonu pro většinu aplikací, i když některé projekty mohou těžit ze směsi helia a argonu pro zvýšenou penetraci.",
    "blog.post1.content4": "Kontrola teploty je zásadní při svařování nerezové oceli. Udržujte konzistentní rychlost pohybu a vyhněte se přehřátí, které může vést k deformaci a snížené odolnosti proti korozi. Naši zkušení svařeči používají pulzní svařovací techniky pro efektivní řízení tepelného vstupu.",
    "blog.post1.content5": "Úprava po svařování je stejně důležitá jako samotný proces svařování. Správné čištění a pasivace zajišťují, že nerezová ocel si zachovává své vlastnosti odolné proti korozi. V Nash Welder dodržujeme osvědčené postupy v oboru, abychom dodali svary, které splňují nejvyšší standardy kvality.",
    "blog.post1.metaDescription": "Naučte se pokročilé techniky TIG svařování pro nerezovou ocel od Nash Welder. Profesionální tipy na přípravu, výběr elektrod a dokončování pro dokonalé svary.",
    "blog.post1.metaKeywords": "TIG svařování, svařování nerezové oceli, svařovací techniky, svařeč Praha, profesionální svařování",
    
    // Blog Post 2
    "blog.post2.title": "Instalace a izolace potrubí: Kompletní průvodce",
    "blog.post2.excerpt": "Komplexní průvodce profesionálními službami instalace, svařování a izolace potrubí. Přečtěte si o našem přístupu k zajištění pevnosti, těsnosti a dlouhodobé spolehlivosti.",
    "blog.post2.date": "10. ledna 2025",
    "blog.post2.category": "Potrubí",
    "blog.post2.content1": "Instalace potrubí vyžaduje pečlivé plánování a provedení, aby byla zajištěna bezpečnost, účinnost a dlouhověkost. V Nash Welder se specializujeme na kompletní řešení potrubí, od počáteční konzultace návrhu až po finální instalaci a izolaci.",
    "blog.post2.content2": "Náš proces svařování potrubí začíná důkladnou kontrolou a přípravou materiálu. Používáme pokročilé svařovací techniky, včetně automatického orbitálního svařování pro konzistentní, vysoce kvalitní svary. Každý spoj prochází přísným testováním, aby bylo zajištěno, že splňuje nebo překračuje průmyslové standardy.",
    "blog.post2.content3": "Správná izolace je kritická pro systémy potrubí, zejména v průmyslových a komerčních aplikacích. Nabízíme komplexní izolační služby pomocí vysoce kvalitních materiálů, které poskytují tepelnou účinnost a ochranu proti vlivům prostředí. Naše izolační řešení pomáhají snižovat energetické náklady a prodlužují životnost vašeho systému potrubí.",
    "blog.post2.content4": "Zajištění kvality je v srdci našich služeb pro potrubí. Každý projekt zahrnuje komplexní testování, včetně tlakových testů, detekce úniků a hodnocení strukturální integrity. Po celý proces vedeme podrobnou dokumentaci, což zajišťuje soulad se všemi relevantními předpisy a standardy.",
    "blog.post2.content5": "Ať už potřebujete instalaci potrubí pro nový stavební projekt nebo servisní služby pro stávající systémy, Nash Welder má odbornost a vybavení k dodání výjimečných výsledků. Kontaktujte nás a prodiskutujte své potřeby týkající se potrubí a zjistěte, jak můžeme pomoci zajistit spolehlivost a účinnost vašeho systému.",
    "blog.post2.metaDescription": "Profesionální služby instalace, svařování a izolace potrubí v Praze. Kompletní průvodce řešeními potrubí od Nash Welder.",
    "blog.post2.metaKeywords": "instalace potrubí, svařování potrubí, izolace potrubí, Praha, průmyslové svařování",
    
    // Blog Post 3
    "blog.post3.title": "Svářečská škola: Od začátečníka k profesionálovi",
    "blog.post3.excerpt": "Prozkoumejte náš komplexní vzdělávací program svařování. Ať už začínáte od nuly nebo chcete rozvinout své dovednosti, naše kurzy kombinují teorii a praktické cvičení.",
    "blog.post3.date": "5. ledna 2025",
    "blog.post3.category": "Vzdělávání",
    "blog.post3.content1": "V Nash Welder věříme, že kvalitní vzdělávání v svařování je základem excelence v oboru. Naše Svářečská škola nabízí komplexní výcvikové programy navržené pro začátečníky i zkušené profesionály, kteří chtějí rozvinout své dovednosti.",
    "blog.post3.content2": "Náš učební plán kombinuje teoretické znalosti s rozsáhlou praktickou praxí. Studenti se učí o bezpečnosti svařování, provozu zařízení, vlastnostech materiálů a různých svařovacích technikách včetně TIG, MIG/MAG a MMA. Každý kurz je strukturován tak, aby postupně budoval dovednosti, což zajišťuje, že studenti získávají sebedůvěru a kompetence v každé fázi.",
    "blog.post3.content3": "Nabízíme flexibilní možnosti učení, které přizpůsobují různé rozvrhy a preference učení. Naše online kurzy poskytují komplexní teoretický výcvik, který mohou studenti dokončit vlastním tempem. Ty jsou doplněny osobními praktickými sezeními, kde studenti pracují s moderním svařovacím vybavením pod vedením zkušených instruktorů.",
    "blog.post3.content4": "Po dokončení našich programů studenti obdrží certifikaci, která uznává jejich dovednosti a znalosti. Naše certifikace je uznávána v oboru a může pomoci rozvíjet kariéru v svařování. Mnoho našich absolventů pokračuje v práci s předními společnostmi nebo založilo své vlastní úspěšné svařovací podniky.",
    "blog.post3.content5": "Ať už vás zajímá svařování jako kariéra nebo jako koníček, naše Svářečská škola poskytuje znalosti a dovednosti, které potřebujete k úspěchu. Připojte se k nám a objevte umění a vědu profesionálního svařování. Kontaktujte nás ještě dnes a zjistěte více o našich nadcházejících kurzech a možnostech zápisu.",
    "blog.post3.metaDescription": "Profesionální svářečská škola v Praze. Naučte se svařování od základů nebo rozviňte své dovednosti s online a offline kurzy od Nash Welder.",
    "blog.post3.metaKeywords": "svářečská škola, kurzy svařování, výcvik svařování, Praha, certifikace svařování",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Загружаем язык из localStorage или используем английский по умолчанию (основной язык)
    const saved = localStorage.getItem("language") as Language;
    return saved && (saved === "en" || saved === "cz") ? saved : "en";
  });

  useEffect(() => {
    // Сохраняем язык в localStorage
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

