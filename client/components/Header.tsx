import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const isWeldingPage = location.pathname === "/service/welding";
  const isPipelinesPage = location.pathname === "/service/pipelines";
  const isWeldingSchoolPage = location.pathname === "/service/welding-school";
  const isServicePage = isWeldingPage || isPipelinesPage || isWeldingSchoolPage;
  const isHomePage = location.pathname === "/" || isServicePage;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`w-full ${isHomePage ? 'absolute top-0 left-0 right-0 z-50 bg-transparent pt-4 sm:pt-6' : 'bg-transparent'}`}>
      <div className={`max-w-[1440px] mx-auto ${isHomePage ? 'px-4 sm:px-8' : 'px-4 sm:px-8'}`}>
        <div className={`flex items-center justify-between ${isHomePage ? 'h-auto py-2 sm:py-3' : 'h-16 sm:h-20'}`}>
          {/* Logo - на главной странице, странице Contact и страницах услуг */}
          {(isHomePage || isContactPage || isServicePage) && (
            <Link to="/" className="flex-shrink-0 mt-1 sm:mt-1.5">
              <img
                src={(isHomePage && !isServicePage) || isServicePage ? "/8b7a45a6-2132-4420-a44e-7812bd793807-removebg-preview - Edited.png" : "/nash-welder-logo.png"}
                alt="Nash Welder Logo"
                className={(isHomePage || isServicePage) ? "h-9 sm:h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-lg" : "h-14 sm:h-18 md:h-20 w-auto object-contain"}
              />
            </Link>
          )}
          
          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${isHomePage ? 'gap-5 lg:gap-9 ml-auto' : 'gap-4 lg:gap-8 ml-auto'}`}>
            <a
              href="/#home"
              className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 ${
                isHomePage 
                  ? 'text-white text-xs sm:text-sm lg:text-sm xl:text-base hover:text-[#0052CC] drop-shadow-md' 
                  : 'text-[#101211] text-xs sm:text-sm lg:text-sm hover:text-[#0052CC]'
              }`}
            >
              {t("nav.company")}
            </a>
            <a
              href="/#services"
              className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 ${
                isHomePage 
                  ? 'text-white text-xs sm:text-sm lg:text-sm xl:text-base hover:text-[#0052CC] drop-shadow-md' 
                  : 'text-[#101211] text-xs sm:text-sm lg:text-sm hover:text-[#0052CC]'
              }`}
            >
              {t("nav.services")}
            </a>
            <a
              href="/#testimonials"
              className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 ${
                isHomePage 
                  ? 'text-white text-xs sm:text-sm lg:text-sm xl:text-base hover:text-[#0052CC] drop-shadow-md' 
                  : 'text-[#101211] text-xs sm:text-sm lg:text-sm hover:text-[#0052CC]'
              }`}
            >
              {t("nav.testimonials")}
            </a>
            <Link
              to="/contact"
              className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 ${
                isHomePage 
                  ? 'text-white text-xs sm:text-sm lg:text-sm xl:text-base hover:text-[#0052CC] drop-shadow-md' 
                  : 'text-[#101211] text-xs sm:text-sm lg:text-sm hover:text-[#0052CC]'
              }`}
            >
              {t("nav.contact")}
            </Link>
            <Link
              to="/about"
              className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 ${
                isHomePage 
                  ? 'text-white text-xs sm:text-sm lg:text-sm xl:text-base hover:text-[#0052CC] drop-shadow-md' 
                  : 'text-[#101211] text-xs sm:text-sm lg:text-sm hover:text-[#0052CC]'
              }`}
            >
              {t("nav.aboutUs")}
            </Link>
            
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/nash_welder"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 p-2 hover:opacity-80 transition-opacity duration-200 ${
                isHomePage ? 'text-white drop-shadow-md' : 'text-[#101211]'
              }`}
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
              </svg>
            </a>

            {/* Language Switcher */}
            <div className={`ml-2 flex items-center gap-1 rounded-md border-2 overflow-hidden ${
              isHomePage
                ? 'border-white drop-shadow-md'
                : 'border-[#101211]'
            }`}>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 font-sans font-bold text-xs uppercase tracking-wide transition-colors duration-200 ${
                  language === "en"
                    ? isHomePage
                      ? 'bg-white text-[#101211]'
                      : 'bg-[#101211] text-white'
                    : isHomePage
                      ? 'text-white hover:bg-white/20'
                      : 'text-[#101211] hover:bg-[#101211]/10'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <div className={`w-px ${
                isHomePage ? 'bg-white/50' : 'bg-[#101211]/50'
              }`}></div>
              <button
                onClick={() => setLanguage("cz")}
                className={`px-3 py-1.5 font-sans font-bold text-xs uppercase tracking-wide transition-colors duration-200 ${
                  language === "cz"
                    ? isHomePage
                      ? 'bg-white text-[#101211]'
                      : 'bg-[#101211] text-white'
                    : isHomePage
                      ? 'text-white hover:bg-white/20'
                      : 'text-[#101211] hover:bg-[#101211]/10'
                }`}
                aria-label="Switch to Czech"
              >
                CZ
              </button>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden flex flex-col gap-1.5 p-2 ${isHomePage ? 'text-white' : 'text-[#101211]'}`}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isHomePage ? 'bg-white' : 'bg-[#101211]'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isHomePage ? 'bg-white' : 'bg-[#101211]'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isHomePage ? 'bg-white' : 'bg-[#101211]'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className={`md:hidden absolute top-full left-0 right-0 ${isHomePage ? 'bg-black/90' : 'bg-white'} shadow-lg`}>
            <div className="flex flex-col px-4 py-4 gap-4">
              <a
                href="/#home"
                onClick={closeMenu}
                className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 py-2 ${
                  isHomePage 
                    ? 'text-white hover:text-[#0052CC]' 
                    : 'text-[#101211] hover:text-[#0052CC]'
                }`}
              >
                {t("nav.company")}
              </a>
              <a
                href="/#services"
                onClick={closeMenu}
                className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 py-2 ${
                  isHomePage 
                    ? 'text-white hover:text-[#0052CC]' 
                    : 'text-[#101211] hover:text-[#0052CC]'
                }`}
              >
                {t("nav.services")}
              </a>
              <a
                href="/#testimonials"
                onClick={closeMenu}
                className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 py-2 ${
                  isHomePage 
                    ? 'text-white hover:text-[#0052CC]' 
                    : 'text-[#101211] hover:text-[#0052CC]'
                }`}
              >
                {t("nav.testimonials")}
              </a>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 py-2 ${
                  isHomePage 
                    ? 'text-white hover:text-[#0052CC]' 
                    : 'text-[#101211] hover:text-[#0052CC]'
                }`}
              >
                {t("nav.contact")}
              </Link>
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className={`font-sans font-bold uppercase tracking-wide transition-colors duration-200 py-2 ${
                      isHomePage 
                        ? 'text-white hover:text-[#0052CC]' 
                        : 'text-[#101211] hover:text-[#0052CC]'
                    }`}
                  >
                    {t("nav.aboutUs")}
                  </Link>
              
              {/* Instagram Icon in Mobile Menu */}
              <a
                href="https://www.instagram.com/nash_welder"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={`flex items-center gap-2 py-2 hover:opacity-80 transition-opacity duration-200 ${
                  isHomePage ? 'text-white' : 'text-[#101211]'
                }`}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                </svg>
                <span className="font-sans font-bold text-sm uppercase tracking-wide">Instagram</span>
              </a>

              {/* Language Switcher in Mobile Menu */}
              <div className={`mt-2 flex items-center gap-1 rounded-md border-2 overflow-hidden ${
                isHomePage ? 'border-white' : 'border-[#101211]'
              }`}>
                <button
                  onClick={() => {
                    setLanguage("en");
                    closeMenu();
                  }}
                  className={`flex-1 px-4 py-2 font-sans font-bold text-sm uppercase tracking-wide transition-colors duration-200 ${
                    language === "en"
                      ? isHomePage
                        ? 'bg-white text-[#101211]'
                        : 'bg-[#101211] text-white'
                      : isHomePage
                        ? 'text-white hover:bg-white/20'
                        : 'text-[#101211] hover:bg-[#101211]/10'
                  }`}
                >
                  EN
                </button>
                <div className={`w-px ${
                  isHomePage ? 'bg-white/50' : 'bg-[#101211]/50'
                }`}></div>
                <button
                  onClick={() => {
                    setLanguage("cz");
                    closeMenu();
                  }}
                  className={`flex-1 px-4 py-2 font-sans font-bold text-sm uppercase tracking-wide transition-colors duration-200 ${
                    language === "cz"
                      ? isHomePage
                        ? 'bg-white text-[#101211]'
                        : 'bg-[#101211] text-white'
                      : isHomePage
                        ? 'text-white hover:bg-white/20'
                        : 'text-[#101211] hover:bg-[#101211]/10'
                  }`}
                >
                  CZ
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

