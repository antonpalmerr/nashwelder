import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>{t("aboutUs.metaTitle")} | Nash Welder</title>
        <meta name="description" content={t("aboutUs.metaDescription")} />
        <meta name="keywords" content={t("aboutUs.metaKeywords")} />
        <meta property="og:title" content={t("aboutUs.metaTitle")} />
        <meta property="og:description" content={t("aboutUs.metaDescription")} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <Header />
      <main className="flex-1">
        {/* Hero Section with Timeline */}
        <section className="relative w-full bg-gradient-to-br from-[#0052CC]/10 via-white to-[#101211]/5 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#0052CC] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#101211] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                             text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6">
                {t("aboutUs.title")}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#0052CC] to-transparent mx-auto"></div>
            </div>

            {/* Timeline Section */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0052CC] via-[#0052CC]/50 to-[#0052CC] hidden md:block"></div>

                {/* Timeline Items */}
                <div className="space-y-8 sm:space-y-12 md:space-y-16">
                  {/* Founded 2018 */}
                  <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0052CC] to-[#003380] rounded-full flex items-center justify-center text-white font-formula font-black text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        2018
                      </div>
                      <div className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-[#0052CC]"></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="bg-white border-2 border-[#0052CC]/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0052CC]/5 rounded-full -mr-16 -mt-16"></div>
                        <div className="relative">
                          <h3 className="font-formula font-black text-[#101211] uppercase text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                            {t("aboutUs.foundedTitle")}
                          </h3>
                          <p className="text-[#101211] font-sans text-sm sm:text-base md:text-lg leading-relaxed">
                            {t("aboutUs.foundedText")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Expertise */}
                  <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#101211] to-[#333333] rounded-full flex items-center justify-center text-white font-formula font-black text-lg sm:text-xl md:text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-[#0052CC]"></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="bg-gradient-to-br from-[#0052CC]/5 to-white border-2 border-[#0052CC]/30 rounded-lg p-6 sm:p-8 hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0052CC]/5 rounded-full -ml-20 -mb-20"></div>
                        <div className="relative">
                          <h3 className="font-formula font-black text-[#101211] uppercase text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                            {t("aboutUs.expertiseTitle")}
                          </h3>
                          <p className="text-[#101211] font-sans text-base sm:text-lg leading-relaxed mb-4">
                            {t("aboutUs.expertiseText")}
                          </p>
                          {/* Materials Grid */}
                          <div className="grid grid-cols-3 gap-3 mt-6">
                            {["Aluminum", "Stainless Steel", "Black Metal"].map((material, index) => (
                              <div key={index} className="bg-white border border-[#0052CC]/20 rounded-lg p-3 text-center hover:border-[#0052CC] hover:shadow-md transition-all duration-300">
                                <span className="text-[#101211] font-sans font-bold text-sm">{material}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Methods & Technologies */}
                  <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0052CC] to-[#003380] rounded-full flex items-center justify-center text-white font-formula font-black text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-[#0052CC]"></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="bg-white border-2 border-[#101211]/20 rounded-lg p-6 sm:p-8 hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-[#101211]/5 rounded-full -ml-12 -mt-12"></div>
                        <div className="relative">
                          <h3 className="font-formula font-black text-[#101211] uppercase text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                            {t("aboutUs.methodsTitle")}
                          </h3>
                          <p className="text-[#101211] font-sans text-base sm:text-lg leading-relaxed mb-6">
                            {t("aboutUs.methodsText")}
                          </p>
                          {/* Methods Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {["TIG", "MIG", "MAG", "MMA"].map((method, index) => (
                              <div key={index} className="bg-gradient-to-br from-[#0052CC]/10 to-white border-2 border-[#0052CC]/30 rounded-lg p-4 text-center hover:border-[#0052CC] hover:shadow-lg transition-all duration-300">
                                <span className="text-[#0052CC] font-formula font-black text-lg">{method}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Team */}
                  <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#101211] to-[#333333] rounded-full flex items-center justify-center text-white font-formula font-black text-lg sm:text-xl md:text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-[#0052CC]"></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="bg-gradient-to-br from-[#0052CC] to-[#003380] text-white border-2 border-[#0052CC] rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                        <div className="relative">
                          <h3 className="font-formula font-black text-white uppercase text-2xl sm:text-3xl mb-4">
                            {t("aboutUs.teamTitle")}
                          </h3>
                          <p className="text-white/90 font-sans text-base sm:text-lg leading-relaxed">
                            {t("aboutUs.teamText")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location & Reach */}
                  <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0052CC] to-[#003380] rounded-full flex items-center justify-center text-white font-formula font-black text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="bg-white border-2 border-[#0052CC]/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0052CC]/5 rounded-full -ml-20 -mb-20"></div>
                        <div className="relative">
                          <h3 className="font-formula font-black text-[#101211] uppercase text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                            {t("aboutUs.locationTitle")}
                          </h3>
                          <p className="text-[#101211] font-sans text-sm sm:text-base md:text-lg leading-relaxed">
                            {t("aboutUs.locationText")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                           text-3xl sm:text-4xl mb-12 text-center">
              {t("aboutUs.valuesTitle")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Trust & Return Clients */}
              <div className="bg-gradient-to-br from-[#0052CC]/5 to-white border-2 border-[#0052CC]/20 rounded-lg p-6 sm:p-8 hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0052CC]/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#0052CC] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-formula font-black text-[#101211] uppercase text-xl sm:text-2xl mb-3">
                    {t("aboutUs.trustTitle")}
                  </h3>
                  <p className="text-[#101211] font-sans text-base leading-relaxed">
                    {t("aboutUs.trustText")}
                  </p>
                </div>
              </div>

              {/* Quality & Challenge */}
              <div className="bg-white border-2 border-[#101211]/20 rounded-lg p-6 sm:p-8 hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#101211]/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#101211] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-formula font-black text-[#101211] uppercase text-xl sm:text-2xl mb-3">
                    {t("aboutUs.qualityTitle")}
                  </h3>
                  <p className="text-[#101211] font-sans text-base leading-relaxed">
                    {t("aboutUs.qualityText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 sm:px-8 lg:px-20 py-12 sm:py-16 bg-gradient-to-br from-[#0052CC]/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                           text-3xl sm:text-4xl mb-6">
              {t("aboutUs.ctaTitle")}
            </h2>
            <p className="text-[#101211] font-sans text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              {t("aboutUs.ctaText")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="border-2 border-[#0052CC] bg-[#0052CC] px-8 py-4
                           text-white font-sans font-bold text-sm uppercase tracking-wide
                           hover:bg-transparent hover:text-[#0052CC] transition-colors duration-200
                           inline-block"
              >
                {t("service.contactUs")}
              </Link>
              <Link
                to="/#services"
                className="border-2 border-[#101211] bg-transparent px-8 py-4
                           text-[#101211] font-sans font-bold text-sm uppercase tracking-wide
                           hover:bg-[#101211] hover:text-white transition-colors duration-200
                           inline-block"
              >
                {t("aboutUs.viewServices")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




