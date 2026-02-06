import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t, language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Get service content based on ID
  const getServiceContent = (id: string | undefined) => {
    if (!id) return null;

    const services: Record<string, {
      title: string;
      image: string;
      description: string;
      descriptionPart1?: string;
      descriptionPart2?: string;
      slogan?: string;
      features: string[];
      benefits: string[];
      additionalServices?: string[];
      metaDescription: string;
      metaKeywords: string;
    }> = {
      "welding": {
        title: t("service.welding.title"),
        image: "/Untitled329_20250325130838.jpg",
        description: t("service.welding.fullDescription"),
        descriptionPart1: t("service.welding.descriptionPart1"),
        descriptionPart2: t("service.welding.descriptionPart2"),
        slogan: t("service.welding.slogan"),
        features: [
          t("service.welding.feature1"),
          t("service.welding.feature2"),
          t("service.welding.feature3"),
          t("service.welding.feature4"),
        ],
        benefits: [
          t("service.welding.benefit1"),
          t("service.welding.benefit2"),
          t("service.welding.benefit3"),
        ],
        metaDescription: t("service.welding.metaDescription"),
        metaKeywords: t("service.welding.metaKeywords"),
      },
      "pipelines": {
        title: t("service.pipelines.title"),
        image: "/Untitled329_20250325130838.jpg",
        description: t("service.pipelines.fullDescription"),
        descriptionPart1: t("service.pipelines.descriptionPart1"),
        descriptionPart2: t("service.pipelines.descriptionPart2"),
        slogan: t("service.pipelines.slogan"),
        features: [
          t("service.pipelines.feature1"),
          t("service.pipelines.feature2"),
          t("service.pipelines.feature3"),
          t("service.pipelines.feature4"),
        ],
        benefits: [
          t("service.pipelines.benefit1"),
          t("service.pipelines.benefit2"),
          t("service.pipelines.benefit3"),
        ],
        metaDescription: t("service.pipelines.metaDescription"),
        metaKeywords: t("service.pipelines.metaKeywords"),
      },
      "welding-school": {
        title: t("service.school.title"),
        image: "/Untitled329_20250325130838.jpg",
        description: t("service.school.fullDescription"),
        descriptionPart1: t("service.school.descriptionPart1"),
        descriptionPart2: t("service.school.descriptionPart2"),
        slogan: t("service.school.slogan"),
        features: [
          t("service.school.feature1"),
          t("service.school.feature2"),
          t("service.school.feature3"),
          t("service.school.feature4"),
          t("service.school.feature5"),
          t("service.school.feature6"),
          t("service.school.feature7"),
        ],
        benefits: [
          t("service.school.benefit1"),
          t("service.school.benefit2"),
          t("service.school.benefit3"),
          t("service.school.benefit4"),
          t("service.school.benefit5"),
        ],
        additionalServices: [
          t("service.school.additional1"),
          t("service.school.additional2"),
          t("service.school.additional3"),
        ],
        metaDescription: t("service.school.metaDescription"),
        metaKeywords: t("service.school.metaKeywords"),
      },
    };

    return services[id] || null;
  };

  const service = getServiceContent(serviceId);

  // Gallery images for pipelines page - 16 фотографий (4 ряда по 4)
  const pipelinesGalleryImages = [
    "/photo_2025-12-17 20.49.15.jpeg",
    "/photo_2025-12-17 20.49.19.jpeg",
    "/photo_2025-12-17 20.49.21.jpeg",
    "/photo_2025-12-17 20.49.23.jpeg",
    "/photo_2025-12-17 20.49.24.jpeg",
    "/photo_2025-12-17 20.49.25.jpeg",
    "/photo_2025-12-17 20.49.26.jpeg",
    "/photo_2025-12-17 20.49.27.jpeg",
    "/photo_2025-12-17 20.49.28.jpeg",
    "/photo_2025-12-17 20.49.29.jpeg",
    "/photo_2025-12-17 20.49.30.jpeg",
    "/photo_2025-12-17 20.49.32.jpeg",
    "/2025-12-17 21.09.57.jpg",
    "/2025-12-17 21.10.02.jpg",
    "/2025-12-17 21.10.05.jpg",
    "/2025-12-17 21.10.10.jpg",
  ];

  // Gallery images for welding page - перемешано
  const weldingGalleryImages = [
    "/IMG_5026.jpg",
    "/IMG_0400.jpg",
    "/IMG_0337.jpg",
    "/IMG_8784.jpg",
    "/IMG_5769.jpg",
    "/2D42F309-4030-4754-8FF4-5C29964E69AE.jpg",
    "/IMG_1684.JPG",
    "/IMG_4764.jpg",
    "/IMG_0905.jpg",
    "/IMG_4608.jpg",
    "/IMG_0036.jpg",
    "/IMG_2170.jpg",
    "/194070ac-b695-45e8-a7c7-16111d8fbe3d.jpg",
    "/IMG_1510.JPG",
    "/IMG_4487.JPG",
    "/f075271e-8c82-427c-ac04-49498121a8ad.jpg",
    "/5d87d547-11f9-4667-8943-b6f1c4e7ddd8.jpg",
    "/IMG_0450.jpg",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (service) {
      // SEO Meta Tags
      document.title = `${service.title} | Nash Welder`;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', service.metaDescription);

      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', service.metaKeywords);

      // Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', service.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', service.metaDescription);

      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', window.location.origin + service.image);
    }
  }, [service, language]);

  // Keyboard navigation for gallery
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const maxLength = serviceId === "pipelines" 
        ? pipelinesGalleryImages.length 
        : weldingGalleryImages.length;
      
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft" && selectedImageIndex > 0) {
        setSelectedImageIndex(selectedImageIndex - 1);
      } else if (e.key === "ArrowRight" && selectedImageIndex < maxLength - 1) {
        setSelectedImageIndex(selectedImageIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, serviceId, weldingGalleryImages.length, pipelinesGalleryImages.length]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-formula font-black text-[#101211] uppercase text-4xl mb-4">
              {t("service.notFound")}
            </h1>
            <Link
              to="/#services"
              className="text-[#0052CC] font-sans font-bold text-sm uppercase tracking-wide hover:underline"
            >
              {t("service.backToServices")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Special layout for welding, pipelines, and welding-school services
  const isSpecialLayout = serviceId === "welding" || serviceId === "pipelines" || serviceId === "welding-school";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {isSpecialLayout ? (
          <>
            {/* Hero Section - Image with Title and Slogan */}
            <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
              {/* Background Image - точно под размер контента */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Content Overlay - без лишних отступов */}
              <div className="relative z-10 w-full px-4 sm:px-8 pb-8 sm:pb-12 md:pb-16 pt-20 sm:pt-24 md:pt-[80px] lg:pt-[102px]">
                <div className="max-w-[1440px] mx-auto">
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 max-w-4xl text-left ml-0 sm:ml-4 md:ml-6 lg:ml-8 welding-hero-content">
                    {/* Title */}
                    <h1 className="welding-hero-title font-formula font-black text-white uppercase leading-[0.9] tracking-[-0.01em]
                                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px] drop-shadow-lg">
                      {service.title}
                    </h1>
                    
                    {/* Slogan */}
                    {service.slogan && (
                      <p className="welding-hero-slogan text-white opacity-90 font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] drop-shadow-md max-w-2xl">
                        {service.slogan}
                      </p>
                    )}
                    
                    {/* Contact Us Button */}
                    <Link
                      to="/contact"
                      className="border-2 border-white bg-transparent px-6 py-3 sm:px-8 sm:py-4
                                 text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wide
                                 hover:bg-white hover:text-[#101211] active:bg-white/80 transition-colors duration-200
                                 w-fit inline-block cursor-pointer drop-shadow-md mt-2"
                    >
                      {t("service.contactUs")}
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Section - White Background */}
            <section className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
              <div className="max-w-4xl mx-auto">
                {/* Special Layout for Welding */}
                {serviceId === "welding" ? (
                  <>
                    {/* Gallery Section - Compact & Interactive */}
                    <div className="mb-12 sm:mb-16 px-2 sm:px-0">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
                        {language === "en" ? "OUR WORK" : "NAŠE PRÁCE"}
                      </h2>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 sm:gap-2 md:gap-2.5">
                        {weldingGalleryImages.map((imageSrc, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className="relative aspect-square cursor-pointer group overflow-hidden rounded-md border border-[#0052CC]/10 hover:border-[#0052CC] transition-all duration-200 active:scale-[0.98] sm:hover:scale-[1.05] hover:shadow-lg hover:z-10 bg-[#0052CC]/5"
                          >
                            <img
                              src={imageSrc}
                              alt={`Welding work ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-1.5 text-white text-[10px] font-sans font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0">
                              {index + 1} / {weldingGalleryImages.length}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Instagram CTA */}
                      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-[#0052CC]/5 to-[#0052CC]/10 rounded-lg border border-[#0052CC]/20">
                        <a
                          href="https://www.instagram.com/nash_welder"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-200"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E4405F] sm:w-6 sm:h-6 flex-shrink-0">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                          </svg>
                          <span className="text-[#101211] font-sans font-bold text-xs sm:text-sm md:text-base">
                            {language === "en" ? "Want to see more? Follow us on Instagram" : "Chcete vidět víc? Sledujte nás na Instagramu"}
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Full Screen Image Modal - Enhanced for Welding */}
                    {selectedImageIndex !== null && serviceId === "welding" && (
                      <div 
                        className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 transition-opacity duration-200"
                        onClick={() => setSelectedImageIndex(null)}
                      >
                        <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center">
                          {/* Close Button */}
                          <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-[#0052CC] transition-all duration-200 z-20 bg-black/60 hover:bg-black/80 rounded-full p-2 sm:p-3 backdrop-blur-sm"
                            aria-label="Close"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          
                          {/* Navigation Buttons */}
                          {selectedImageIndex > 0 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(selectedImageIndex - 1);
                              }}
                              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#0052CC] transition-all duration-200 z-20 bg-black/60 hover:bg-black/80 rounded-full p-2 sm:p-3 backdrop-blur-sm"
                              aria-label="Previous image"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          )}

                          {selectedImageIndex < weldingGalleryImages.length - 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(selectedImageIndex + 1);
                              }}
                              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#0052CC] transition-all duration-200 z-20 bg-black/60 hover:bg-black/80 rounded-full p-2 sm:p-3 backdrop-blur-sm"
                              aria-label="Next image"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          )}

                          {/* Main Image */}
                          <div className="relative w-full h-full flex items-center justify-center p-4">
                            <img
                              key={selectedImageIndex}
                              src={weldingGalleryImages[selectedImageIndex]}
                              alt={`Welding work ${selectedImageIndex + 1}`}
                              className="max-w-full max-h-[90vh] object-contain transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>

                          {/* Image Counter */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-sans">
                            {selectedImageIndex + 1} / {weldingGalleryImages.length}
                          </div>

                          {/* Thumbnail Strip (Optional - для быстрой навигации) */}
                          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4 overflow-x-auto hidden sm:block">
                            <div className="flex gap-2 justify-center">
                              {weldingGalleryImages.slice(
                                Math.max(0, selectedImageIndex - 3),
                                Math.min(weldingGalleryImages.length, selectedImageIndex + 4)
                              ).map((img, idx) => {
                                const actualIndex = Math.max(0, selectedImageIndex - 3) + idx;
                                return (
                                  <button
                                    key={actualIndex}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedImageIndex(actualIndex);
                                    }}
                                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                                      actualIndex === selectedImageIndex
                                        ? "border-[#0052CC] scale-110"
                                        : "border-white/30 hover:border-white/60"
                                    }`}
                                  >
                                    <img
                                      src={img}
                                      alt={`Thumbnail ${actualIndex + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Introduction Text */}
                    <div className="mb-8 sm:mb-12">
                      <p className="text-[#101211] font-sans text-base sm:text-lg md:text-xl leading-[1.8] max-w-3xl">
                        {service.descriptionPart1?.split('\n')[0] || "At Nash Welder, we provide professional welding services with a focus on precision, quality, and efficiency."}
                      </p>
                    </div>

                    {/* Materials We Work With */}
                    <div className="mb-12 sm:mb-16">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">
                        {language === "en" ? "MATERIALS WE WORK WITH" : "MATERIÁLY, SE KTERÝMI PRACUJEME"}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {[
                          { name: language === "en" ? "Aluminum and its alloys" : "Hliník a jeho slitiny", icon: "aluminum" },
                          { name: language === "en" ? "Stainless steel" : "Nerezová ocel", icon: "stainless" },
                          { name: language === "en" ? "Black steel (carbon steel)" : "Černá ocel (uhlíková ocel)", icon: "steel" },
                        ].map((material, index) => {
                          const icons = [
                            // Aluminum icon
                            <svg key="aluminum" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                              <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>,
                            // Stainless steel icon
                            <svg key="stainless" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                              <path d="M12 3V12L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>,
                            // Steel icon
                            <svg key="steel" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="2"/>
                              <path d="M9 9H15M9 13H15M9 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>,
                          ];
                          const bgStyles = [
                            "bg-gradient-to-br from-[#0052CC]/10 to-[#0052CC]/5",
                            "bg-gradient-to-br from-[#101211]/10 to-white",
                            "bg-gradient-to-br from-white to-[#0052CC]/10",
                          ];
                          return (
                            <div 
                              key={index}
                              className={`${bgStyles[index % bgStyles.length]} border-2 border-[#0052CC]/30 p-6 hover:border-[#0052CC] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 rounded-lg relative overflow-hidden group`}
                            >
                              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0052CC]/5 rounded-full -mr-8 -mt-8 group-hover:bg-[#0052CC]/10 transition-colors duration-300"></div>
                              <div className="relative flex flex-col items-center text-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#0052CC] to-[#003380] rounded-lg flex items-center justify-center text-white group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                                  {icons[index % icons.length]}
                                </div>
                                <span className="text-[#101211] font-sans font-bold text-base sm:text-lg leading-tight">
                                  {material.name}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Our Services & Team */}
                    <div className="mb-12 sm:mb-16">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">
                        {language === "en" ? "OUR SERVICES" : "NAŠE SLUŽBY"}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {[
                          { title: language === "en" ? "Construction" : "Konstrukce", desc: language === "en" ? "Metal structures production" : "Výroba kovových konstrukcí" },
                          { title: language === "en" ? "Repair" : "Opravy", desc: language === "en" ? "Maintenance welding" : "Údržbové svařování" },
                          { title: language === "en" ? "Installation" : "Instalace", desc: language === "en" ? "On-site installation" : "Montáž na místě" },
                        ].map((service, index) => {
                          const styles = [
                            { bg: "bg-gradient-to-br from-[#0052CC] to-[#0052CC]/80", text: "text-white", border: "border-[#0052CC]" },
                            { bg: "bg-white", text: "text-[#101211]", border: "border-[#0052CC]/50", shadow: "shadow-lg" },
                            { bg: "bg-gradient-to-br from-[#101211] to-[#101211]/90", text: "text-white", border: "border-[#101211]" },
                          ];
                          const style = styles[index % styles.length];
                          return (
                            <div 
                              key={index}
                              className={`${style.bg} ${style.border} ${style.shadow || ''} border-2 p-6 hover:border-[#0052CC] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-lg relative overflow-hidden group`}
                            >
                              <div className="relative">
                                <h3 className={`${style.text} font-formula font-black text-xl sm:text-2xl mb-3`}>
                                  {service.title}
                                </h3>
                                <p className={`${style.text} font-sans text-sm sm:text-base leading-relaxed opacity-90`}>
                                  {service.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    {service.descriptionPart2 && (
                      <div className="mb-16 bg-gradient-to-br from-[#0052CC]/5 to-white rounded-lg p-8 sm:p-10 border-2 border-[#0052CC]/10">
                        <div className="space-y-4">
                          {service.descriptionPart2.split('\n\n').filter(para => para.trim()).map((paragraph, index) => (
                            <p 
                              key={index}
                              className={`text-[#101211] font-sans text-lg sm:text-xl leading-[1.8] ${index === service.descriptionPart2!.split('\n\n').filter(para => para.trim()).length - 1 ? 'font-semibold' : ''}`}
                            >
                              {paragraph.trim()}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : null}

                {/* Special Layout for Pipelines */}
                {serviceId === "pipelines" ? (
                  <>
                    {/* Gallery Section */}
                    <div className="mb-12 sm:mb-16 max-w-4xl mx-auto px-2 sm:px-0">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2 md:gap-2.5">
                        {pipelinesGalleryImages.map((imageSrc, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className="relative aspect-square cursor-pointer group overflow-hidden rounded-md border border-[#0052CC]/10 hover:border-[#0052CC] transition-all duration-200 active:scale-[0.98] sm:hover:scale-[1.05] hover:shadow-lg hover:z-10 bg-[#0052CC]/5"
                          >
                            <img
                              src={imageSrc}
                              alt={`Pipelines work ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 21L15 15M10 7V13M7 10H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs font-sans text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {index + 1} / {pipelinesGalleryImages.length}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Instagram CTA */}
                      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-[#0052CC]/5 to-[#0052CC]/10 rounded-lg border border-[#0052CC]/20">
                        <a
                          href="https://www.instagram.com/nash_welder"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-200"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E4405F] sm:w-6 sm:h-6 flex-shrink-0">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                          </svg>
                          <span className="text-[#101211] font-sans font-bold text-xs sm:text-sm md:text-base">
                            {language === "en" ? "Want to see more? Follow us on Instagram" : "Chcete vidět víc? Sledujte nás na Instagramu"}
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Full Screen Image Modal for Pipelines */}
                    {selectedImageIndex !== null && serviceId === "pipelines" && (
                      <div
                        className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 opacity-0 transition-opacity duration-200"
                        style={{ opacity: 1 }}
                        onClick={() => setSelectedImageIndex(null)}
                      >
                        <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center">
                          {/* Close Button */}
                          <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-4 right-4 text-white hover:text-[#0052CC] transition-colors duration-200 z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>

                          {/* Navigation Buttons */}
                          {selectedImageIndex > 0 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(selectedImageIndex - 1);
                              }}
                              className="absolute left-4 text-white hover:text-[#0052CC] transition-colors duration-200 z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          )}

                          {selectedImageIndex < pipelinesGalleryImages.length - 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(selectedImageIndex + 1);
                              }}
                              className="absolute right-4 text-white hover:text-[#0052CC] transition-colors duration-200 z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          )}

                          {/* Main Image */}
                          <div className="relative w-full h-full flex items-center justify-center p-4">
                            <img
                              key={selectedImageIndex}
                              src={pipelinesGalleryImages[selectedImageIndex]}
                              alt={`Pipelines work ${selectedImageIndex + 1}`}
                              className="max-w-full max-h-[90vh] object-contain transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>

                          {/* Image Counter */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-sans">
                            {selectedImageIndex + 1} / {pipelinesGalleryImages.length}
                          </div>

                          {/* Thumbnail Strip */}
                          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4 overflow-x-auto hidden sm:block">
                            <div className="flex gap-2 justify-center">
                              {pipelinesGalleryImages.slice(
                                Math.max(0, selectedImageIndex - 3),
                                Math.min(pipelinesGalleryImages.length, selectedImageIndex + 4)
                              ).map((img, idx) => {
                                const actualIndex = Math.max(0, selectedImageIndex - 3) + idx;
                                return (
                                  <img
                                    key={actualIndex}
                                    src={img}
                                    alt={`Thumbnail ${actualIndex + 1}`}
                                    className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                                      actualIndex === selectedImageIndex ? "border-[#0052CC]" : "border-transparent"
                                    } hover:border-[#0052CC] transition-colors duration-200`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedImageIndex(actualIndex);
                                    }}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Our Expertise - Technical Blocks with Pipeline Icons */}
                    <div className="mb-12 sm:mb-16">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10">
                        {t("service.pipelines.ourExpertise")}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {service.features.map((feature, index) => {
                          const icons = [
                            // Water icon
                            <svg key="water" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2.69L5 8.69V21H19V8.69L12 2.69Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 12H15M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>,
                            // Heating icon
                            <svg key="heating" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                              <path d="M12 6V12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>,
                            // Gas icon
                            <svg key="gas" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 12H21M3 12L7 8M21 12L17 8M3 12L7 16M21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="2" fill="currentColor"/>
                            </svg>,
                            // Ventilation icon
                            <svg key="vent" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                              <path d="M3 10H21M3 14H21" stroke="currentColor" strokeWidth="2"/>
                              <circle cx="8" cy="12" r="1" fill="currentColor"/>
                              <circle cx="16" cy="12" r="1" fill="currentColor"/>
                            </svg>,
                          ];
                          return (
                            <div 
                              key={index} 
                              className="relative group"
                            >
                              {/* Connecting Line (visible on desktop) */}
                              {index < service.features.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0052CC]/50 to-transparent z-0"></div>
                              )}
                              
                              <div className="relative bg-gradient-to-br from-white to-[#0052CC]/5 border-l-4 border-[#0052CC] p-6 sm:p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-r-lg overflow-hidden">
                                {/* Pipeline Pattern Background */}
                                <div className="absolute inset-0 opacity-5">
                                  <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none">
                                    <path d="M0,100 Q50,50 100,100 T200,100" stroke="#0052CC" strokeWidth="2" fill="none"/>
                                    <path d="M0,120 Q50,70 100,120 T200,120" stroke="#0052CC" strokeWidth="2" fill="none"/>
                                  </svg>
                                </div>
                                
                                <div className="relative flex items-start gap-5">
                                  {/* Icon Container */}
                                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0052CC] to-[#003380] rounded-lg flex items-center justify-center text-white group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                                    {icons[index % icons.length]}
                                  </div>
                                  
                                  {/* Content */}
                                  <div className="flex-1 pt-1">
                                    <h3 className="text-[#101211] font-sans font-bold text-lg sm:text-xl leading-tight mb-2">
                                      {feature.split(':')[0]}
                                    </h3>
                                    <p className="text-[#101211]/70 font-sans text-sm sm:text-base leading-relaxed">
                                      {feature.split(':').slice(1).join(':').trim() || feature}
                                    </p>
                                  </div>
                                </div>
                                
                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052CC] via-[#0052CC]/50 to-transparent group-hover:from-[#003380] transition-colors duration-300"></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* What We Guarantee - Horizontal Flow Cards */}
                    <div className="mb-12 sm:mb-16">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10">
                        {t("service.pipelines.whatWeGuarantee")}
                      </h2>
                      <div className="relative">
                        {/* Connecting Flow Line (desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0052CC]/30 via-[#0052CC]/50 to-[#0052CC]/30 z-0"></div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
                          {service.benefits.map((benefit, index) => {
                            const badgeColors = [
                              "from-[#0052CC] to-[#003380]",
                              "from-[#101211] to-[#333333]",
                              "from-[#0052CC]/80 to-[#0052CC]",
                            ];
                            return (
                              <div 
                                key={index} 
                                className="relative group"
                              >
                                <div className="bg-white border-2 border-[#0052CC]/20 rounded-lg p-6 sm:p-8 hover:border-[#0052CC] hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                  {/* Animated Background Pattern */}
                                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300">
                                    <div className="absolute top-0 left-0 w-full h-full" style={{
                                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #0052CC 10px, #0052CC 20px)`,
                                    }}></div>
                                  </div>
                                  
                                  {/* Number Badge */}
                                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${badgeColors[index % badgeColors.length]} rounded-full flex items-center justify-center text-white font-formula font-black text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {index + 1}
                                  </div>
                                  
                                  {/* Content */}
                                  <div className="relative pt-4">
                                    <div className="flex items-start gap-4">
                                      {/* Check Icon */}
                                      <div className="flex-shrink-0 w-8 h-8 bg-[#0052CC]/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-[#0052CC] group-hover:scale-110 transition-all duration-300">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#0052CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
                                        </svg>
                                      </div>
                                      
                                      <p className="text-[#101211] font-sans text-base sm:text-lg leading-relaxed font-medium flex-1">
                                        {benefit}
                                      </p>
                                    </div>
                                  </div>
                                  
                                  {/* Bottom Pipeline Accent */}
                                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#0052CC]/20 to-transparent group-hover:via-[#0052CC]/40 transition-colors duration-300"></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Technical Methods - Compact Info Blocks */}
                    <div className="mb-12 bg-gradient-to-br from-[#0052CC]/5 to-white rounded-lg p-6 sm:p-8 border-2 border-[#0052CC]/10">
                      <h3 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-2xl sm:text-3xl mb-6">
                        {t("service.pipelines.technicalMethods")}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {["TIG", "RTG", "Aluminum", "Steel"].map((method, index) => (
                          <div key={index} className="text-center p-4 bg-white rounded-lg border border-[#0052CC]/20 hover:border-[#0052CC] hover:shadow-md transition-all duration-300">
                            <div className="text-[#0052CC] font-formula font-black text-xl sm:text-2xl mb-2">
                              {method}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : serviceId === "welding-school" ? (
                  <>
                    {/* What You'll Get - Cards with varied styles */}
                    <div className="mb-16">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-3xl sm:text-4xl mb-10">
                        {t("service.school.whatYouGet")}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {service.features.map((feature, index) => {
                          // Разные стили для разных карточек
                          const styles = [
                            { bg: "bg-gradient-to-br from-[#0052CC]/10 to-[#0052CC]/5", border: "border-[#0052CC]/30", icon: "bg-[#0052CC]" },
                            { bg: "bg-gradient-to-br from-[#101211]/10 to-[#101211]/5", border: "border-[#101211]/20", icon: "bg-[#101211]" },
                            { bg: "bg-white", border: "border-[#0052CC]/40", icon: "bg-[#0052CC]", shadow: "shadow-md" },
                            { bg: "bg-gradient-to-br from-[#0052CC]/15 to-white", border: "border-[#0052CC]/50", icon: "bg-[#0052CC]" },
                            { bg: "bg-[#101211]/5", border: "border-[#101211]/30", icon: "bg-[#101211]" },
                            { bg: "bg-gradient-to-br from-white to-[#0052CC]/10", border: "border-[#0052CC]/30", icon: "bg-[#0052CC]" },
                            { bg: "bg-[#0052CC]/5", border: "border-[#0052CC]/40", icon: "bg-[#0052CC]", accent: "border-l-4 border-l-[#0052CC]" },
                          ];
                          const style = styles[index % styles.length];
                          return (
                            <div 
                              key={index} 
                              className={`${style.bg} ${style.border} ${style.shadow || ''} ${style.accent || ''} border-2 p-5 sm:p-6 hover:border-[#0052CC] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 rounded-lg relative overflow-hidden group`}
                            >
                              <div className="absolute top-0 right-0 w-20 h-20 bg-[#0052CC]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#0052CC]/10 transition-colors duration-300"></div>
                              <div className="relative flex items-start gap-4">
                                <div className={`${style.icon} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <span className="text-[#101211] font-sans text-base sm:text-lg leading-[1.6] font-semibold pt-1">
                                  {feature}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* You Will Learn - Cards with varied styles */}
                    <div className="mb-16">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-3xl sm:text-4xl mb-10">
                        {t("service.school.youWillLearn")}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {service.benefits.map((benefit, index) => {
                          // Разные стили для разных карточек
                          const styles = [
                            { bg: "bg-gradient-to-br from-[#0052CC] to-[#0052CC]/80", text: "text-white", border: "border-[#0052CC]", icon: "bg-white" },
                            { bg: "bg-gradient-to-br from-[#101211] to-[#101211]/90", text: "text-white", border: "border-[#101211]", icon: "bg-[#0052CC]" },
                            { bg: "bg-white", text: "text-[#101211]", border: "border-[#0052CC]/50", icon: "bg-[#0052CC]", shadow: "shadow-lg" },
                            { bg: "bg-gradient-to-br from-[#0052CC]/20 to-white", text: "text-[#101211]", border: "border-[#0052CC]/60", icon: "bg-[#0052CC]" },
                            { bg: "bg-[#101211]", text: "text-white", border: "border-[#101211]", icon: "bg-[#0052CC]", accent: "border-l-4 border-l-[#0052CC]" },
                          ];
                          const style = styles[index % styles.length];
                          return (
                            <div 
                              key={index} 
                              className={`${style.bg} ${style.border} ${style.shadow || ''} ${style.accent || ''} border-2 p-5 sm:p-6 hover:border-[#0052CC] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-lg relative overflow-hidden group`}
                            >
                              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 group-hover:bg-white/10 transition-colors duration-300"></div>
                              <div className="relative flex items-start gap-4">
                                <div className={`${style.icon} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:rotate-12 transition-transform duration-300`}>
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke={style.text === "text-white" ? "#0052CC" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span className={`${style.text} font-sans text-base sm:text-lg leading-[1.6] font-semibold pt-1`}>
                                  {benefit}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Additional Services - Graphic Cards */}
                    {service.additionalServices && service.additionalServices.length > 0 && (
                      <div className="mb-12">
                        <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                       text-3xl sm:text-4xl mb-8">
                          {t("service.school.additionalServices")}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                          {service.additionalServices.map((serviceItem, index) => {
                            const styles = [
                              { bg: "bg-gradient-to-br from-[#0052CC] to-[#0052CC]/80", text: "text-white", border: "border-[#0052CC]", icon: "bg-white" },
                              { bg: "bg-gradient-to-br from-[#101211] to-[#101211]/90", text: "text-white", border: "border-[#101211]", icon: "bg-[#0052CC]" },
                              { bg: "bg-white", text: "text-[#101211]", border: "border-[#0052CC]/50", icon: "bg-[#0052CC]", shadow: "shadow-lg" },
                            ];
                            const style = styles[index % styles.length];
                            return (
                              <div 
                                key={index} 
                                className={`${style.bg} ${style.border} ${style.shadow || ''} border-2 p-5 sm:p-6 hover:border-[#0052CC] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-lg relative overflow-hidden group`}
                              >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8 group-hover:bg-white/20 transition-colors duration-300"></div>
                                <div className="relative flex items-start gap-4">
                                  <div className={`${style.icon} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:rotate-12 transition-transform duration-300`}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8 2L10 6L14 7L10 8L8 12L6 8L2 7L6 6L8 2Z" stroke={style.text === "text-white" ? "#0052CC" : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </div>
                                  <span className={`${style.text} font-sans text-sm sm:text-base leading-[1.6] font-semibold pt-1`}>
                                    {serviceItem}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                ) : serviceId === "welding" ? (
                  <>
                    {/* Features - Cards with varied styles */}
                    <div className="mb-16">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-3xl sm:text-4xl mb-10">
                        {t("service.features")}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {service.features.map((feature, index) => {
                          // Разные стили для разных карточек
                          const styles = [
                            { bg: "bg-gradient-to-br from-[#0052CC]/10 to-[#0052CC]/5", border: "border-[#0052CC]/30", icon: "bg-[#0052CC]" },
                            { bg: "bg-gradient-to-br from-[#101211]/10 to-[#101211]/5", border: "border-[#101211]/20", icon: "bg-[#101211]" },
                            { bg: "bg-white", border: "border-[#0052CC]/40", icon: "bg-[#0052CC]", shadow: "shadow-md" },
                            { bg: "bg-gradient-to-br from-[#0052CC]/15 to-white", border: "border-[#0052CC]/50", icon: "bg-[#0052CC]" },
                          ];
                          const style = styles[index % styles.length];
                          return (
                            <div 
                              key={index} 
                              className={`${style.bg} ${style.border} ${style.shadow || ''} border-2 p-5 sm:p-6 hover:border-[#0052CC] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 rounded-lg relative overflow-hidden group`}
                            >
                              <div className="absolute top-0 right-0 w-20 h-20 bg-[#0052CC]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#0052CC]/10 transition-colors duration-300"></div>
                              <div className="relative flex items-start gap-4">
                                <div className={`${style.icon} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <span className="text-[#101211] font-sans text-base sm:text-lg leading-[1.6] font-semibold pt-1">
                                  {feature}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Benefits - Cards with varied styles */}
                    <div className="mb-12">
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-3xl sm:text-4xl mb-10">
                        {t("service.benefits")}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {service.benefits.map((benefit, index) => {
                          // Разные стили для разных карточек
                          const styles = [
                            { bg: "bg-gradient-to-br from-[#0052CC] to-[#0052CC]/80", text: "text-white", border: "border-[#0052CC]", icon: "bg-white" },
                            { bg: "bg-gradient-to-br from-[#101211] to-[#101211]/90", text: "text-white", border: "border-[#101211]", icon: "bg-[#0052CC]" },
                            { bg: "bg-white", text: "text-[#101211]", border: "border-[#0052CC]/50", icon: "bg-[#0052CC]", shadow: "shadow-lg" },
                          ];
                          const style = styles[index % styles.length];
                          return (
                            <div 
                              key={index} 
                              className={`${style.bg} ${style.border} ${style.shadow || ''} border-2 p-5 sm:p-6 hover:border-[#0052CC] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-lg relative overflow-hidden group`}
                            >
                              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 group-hover:bg-white/10 transition-colors duration-300"></div>
                              <div className="relative flex items-start gap-4">
                                <div className={`${style.icon} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:rotate-12 transition-transform duration-300`}>
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke={style.text === "text-white" ? "#0052CC" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span className={`${style.text} font-sans text-base sm:text-lg leading-[1.6] font-semibold pt-1`}>
                                  {benefit}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Features & Benefits - Standard Layout */
                  <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Features */}
                    <div>
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-3xl sm:text-4xl mb-6">
                        {t("service.features")}
                      </h2>
                      <ul className="flex flex-col gap-4">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#0052CC] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#101211] font-sans text-base sm:text-lg leading-[1.8]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                     text-3xl sm:text-4xl mb-6">
                        {t("service.benefits")}
                      </h2>
                      <ul className="flex flex-col gap-4">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#0052CC] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#101211] font-sans text-base sm:text-lg leading-[1.8]">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="pt-8 border-t-2 border-[#101211]/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link
                      to="/#services"
                      className="inline-flex items-center gap-2 text-[#0052CC] font-sans font-bold text-sm uppercase tracking-wide hover:underline"
                    >
                      ← {t("service.backToServices")}
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-[#0052CC] bg-[#0052CC] px-8 py-4
                                 text-white font-sans font-bold text-sm uppercase tracking-wide
                                 hover:bg-transparent hover:text-[#0052CC] transition-colors duration-200
                                 inline-block"
                    >
                      {t("service.contactUs")}
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Hero Image */}
            <section className="relative w-full h-64 sm:h-96 lg:h-[500px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="font-formula font-black text-white uppercase leading-[0.9] tracking-[-0.01em]
                                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                    {service.title}
                  </h1>
                </div>
              </div>
            </section>

            {/* Service Content */}
            <article className="w-full px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white">
              <div className="max-w-4xl mx-auto">
                {/* Description */}
                <div className="mb-12">
                  <div className="text-[#101211] font-sans text-base sm:text-lg leading-[1.8] mb-6 whitespace-pre-line">
                    {service.description}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                 text-3xl sm:text-4xl mb-6">
                    {t("service.features")}
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0052CC] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#101211] font-sans text-base sm:text-lg leading-[1.8]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-12">
                  <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                                 text-3xl sm:text-4xl mb-6">
                    {t("service.benefits")}
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0052CC] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#101211] font-sans text-base sm:text-lg leading-[1.8]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-8 border-t-2 border-[#101211]/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link
                      to="/#services"
                      className="inline-flex items-center gap-2 text-[#0052CC] font-sans font-bold text-sm uppercase tracking-wide hover:underline"
                    >
                      ← {t("service.backToServices")}
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-[#0052CC] bg-[#0052CC] px-8 py-4
                                 text-white font-sans font-bold text-sm uppercase tracking-wide
                                 hover:bg-transparent hover:text-[#0052CC] transition-colors duration-200
                                 inline-block"
                    >
                      {t("service.contactUs")}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

