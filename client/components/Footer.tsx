import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative w-full px-4 sm:px-6 py-2 sm:py-3 lg:py-4 flex flex-col justify-between overflow-hidden bg-white">

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col justify-between">
        {/* Top Section - Navigation and Contact Info side by side */}
        <div className="flex flex-col md:flex-row lg:flex-row lg:items-stretch gap-4 sm:gap-4 lg:gap-6">
          {/* Left Section - Navigation */}
          <nav className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 flex-1 justify-between">
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 pl-2 sm:pl-8 md:pl-12 lg:pl-16">
              <a href="/#home" className="text-[#101211] font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[-0.01em] hover:opacity-70 transition-opacity">
                {t("nav.company")}
              </a>
              <a href="/#services" className="text-[#101211] font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[-0.01em] hover:opacity-70 transition-opacity">
                {t("nav.services")}
              </a>
              <a href="/#testimonials" className="text-[#101211] font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[-0.01em] hover:opacity-70 transition-opacity">
                {t("nav.testimonials")}
              </a>
              <Link to="/contact" className="text-[#101211] font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[-0.01em] hover:opacity-70 transition-opacity">
                {t("nav.contact")}
              </Link>
              <Link to="/about" className="text-[#101211] font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[-0.01em] hover:opacity-70 transition-opacity">
                {t("nav.aboutUs")}
              </Link>
              <Link to="/blog" className="text-[#101211] font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[-0.01em] hover:opacity-70 transition-opacity">
                {t("nav.blog")}
              </Link>
            </div>

            {/* Nash Welder Text - внизу левой колонки */}
            <div className="mt-auto pt-4 sm:pt-3 lg:pt-4 pl-2 sm:pl-8 md:pl-12 lg:pl-16">
              {/* Instagram Icon */}
              <div className="mb-2 sm:mb-3">
                <a
                  href="https://www.instagram.com/nash_welder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity duration-200 w-fit"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E4405F]">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
              <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                             text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Nash Welder
              </h2>
            </div>
          </nav>

          {/* Right Section - Contact Information */}
          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 flex-1 lg:max-w-md pl-2 sm:pl-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#101211] font-sans font-bold text-sm sm:text-base uppercase tracking-wide">{t("footer.address")}</span>
              </div>
              <p className="text-[#101211] font-sans text-sm sm:text-base leading-[1.4]">
                Frýdlantská 1312/19,<br />
                Kobylisy, 182 00 Prague,<br />
                Czech Republic
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#101211] font-sans font-bold text-sm sm:text-base uppercase tracking-wide">{t("footer.phone")}</span>
              </div>
              <a href="tel:+420606215236" className="text-[#101211] font-sans text-sm sm:text-base leading-[1.4] hover:opacity-70 transition-opacity">
                +420 606 215 236
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#101211] font-sans font-bold text-sm sm:text-base uppercase tracking-wide">{t("footer.email")}</span>
              </div>
              <a href="mailto:nashwelder21@gmail.com" className="text-[#101211] font-sans text-sm sm:text-base leading-[1.4] hover:opacity-70 transition-opacity break-all">
                nashwelder21@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#101211] font-sans font-bold text-sm sm:text-base uppercase tracking-wide">{t("footer.workingHours")}</span>
              </div>
              <div className="text-[#101211] font-sans text-sm sm:text-base leading-[1.4] flex flex-col gap-0.5">
                <span>{t("footer.workingHoursWeekdays")}</span>
                <span>{t("footer.workingHoursWeekend")}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#101211] font-sans font-bold text-sm sm:text-base uppercase tracking-wide">{t("footer.company")}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-[#101211] font-sans text-sm sm:text-base leading-[1.4] font-bold">
                  NASH WELDER s. r. o.
                </p>
                <p className="text-[#101211] font-sans text-[10px] sm:text-xs leading-[1.4] opacity-90">
                  {t("footer.companyId")}: 21165033
                </p>
                <p className="text-[#101211] font-sans text-[10px] sm:text-xs leading-[1.4] opacity-90">
                  {t("footer.vatId")}: CZ21165033
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

