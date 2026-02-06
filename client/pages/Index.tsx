import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [metalWorksCount, setMetalWorksCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const hasAnimated = useRef(false);

  const testimonials = [
    {
      image: "/2025-11-13 22.57.49.jpg"
    },
    {
      image: "/2025-11-13 22.57.41.jpg"
    },
    {
      image: "/2025-11-13 22.57.35.jpg"
    },
    {
      image: "/2025-11-13 22.57.45.jpg"
    },
    {
      image: "/2025-11-13 22.57.52.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Анимация чисел в статистике - запускается когда доскроллишь до секции услуг
  useEffect(() => {
    if (hasAnimated.current) return;
    
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;

    const animateNumber = (
      setValue: (value: number) => void,
      target: number,
      duration: number = 2000
    ) => {
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function для плавной анимации
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        setValue(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setValue(target);
        }
      };
      
      animate();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            // Запускаем анимацию когда секция услуг видна
            animateNumber(setYearsCount, 6, 1500);
            animateNumber(setMetalWorksCount, 15, 2000);
            animateNumber(setProjectsCount, 820, 1800);
            animateNumber(setClientsCount, 45, 1700);
            hasAnimated.current = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(servicesSection);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-welder-new.jpg"
            alt="Professional welder in workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 pt-16 sm:pt-24 md:pt-[80px] lg:pt-[102px]">
          <div className="max-w-[1440px] mx-auto">
            {/* Content Container */}
            <div className="hero-content flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              {/* Heading */}
              <h1 className="hero-title font-formula font-black text-white uppercase leading-[0.9] tracking-[-0.01em]
                             text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
                             max-w-4xl drop-shadow-lg">
                {t("hero.title")}
              </h1>
              
              {/* Description */}
              <p className="hero-subtitle text-white opacity-90 font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.5] drop-shadow-md max-w-2xl">
                <span className="hero-subtitle-desktop">{t("hero.subtitle")}</span>
                <span 
                  className="hero-subtitle-mobile"
                  dangerouslySetInnerHTML={{ __html: t("hero.subtitle.mobile") }}
                />
              </p>
              
              {/* Button */}
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hero-cta border-2 border-white bg-transparent px-6 py-3 sm:px-8 sm:py-4
                           text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wide
                           hover:bg-white hover:text-[#101211] active:bg-white/80 transition-colors duration-200
                           w-fit inline-block cursor-pointer drop-shadow-md">
                {t("hero.button")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 lg:pb-36 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:max-w-[543px]">
              {/* Subheading */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3.5 sm:w-3.5 sm:h-4 bg-[#0052CC]"></div>
                <span className="text-[#0052CC] font-sans font-bold text-xs sm:text-sm uppercase tracking-wide">
                  {t("about.subtitle")}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9]
                               text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {t("about.title")}
                </h2>
                <p className="text-[#101211] opacity-70 font-sans text-sm sm:text-base md:text-lg leading-[1.5] max-w-[523px]">
                  {t("about.description")}
                </p>
              </div>

              {/* Features Grid */}
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full">
                <div className="flex-1 min-w-[240px] py-4 border-b-2 border-[#101211]/20">
                  <span className="text-[#101211] font-sans text-sm leading-[1.5]">
                    {t("about.warranty")}
                  </span>
                </div>
                <div className="flex-1 min-w-[240px] py-4 border-b-2 border-[#101211]/20">
                  <span className="text-[#101211] font-sans text-sm leading-[1.5]">
                    {t("about.delivery")}
                  </span>
                </div>
                <div className="flex-1 min-w-[240px] py-4 border-b-2 border-[#101211]/20">
                  <span className="text-[#101211] font-sans text-sm leading-[1.5]">
                    {t("about.quality")}
                  </span>
                </div>
                <div className="flex-1 min-w-[240px] py-4 border-b-2 border-[#101211]/20">
                  <span className="text-[#101211] font-sans text-sm leading-[1.5]">
                    {t("about.innovative")}
                  </span>
                </div>
                <div className="flex-1 min-w-[240px] py-4 border-b-2 border-[#101211]/20">
                  <span className="text-[#101211] font-sans text-sm leading-[1.5]">
                    {t("about.steelWarranty")}
                  </span>
                </div>
                <div className="flex-1 min-w-[240px] py-4 border-b-2 border-[#101211]/20">
                  <span className="text-[#101211] font-sans text-sm leading-[1.5]">
                    {t("about.crafted")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[682px] lg:h-[543px] mt-4 sm:mt-0">
              <img
                src="/cwdwcew.png"
                alt="Welder working with hot metal"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#101211] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Decorative Background Images - Hidden on mobile, visible on larger screens */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/890e924da814708e391935cdd3edb1d5bf8f45f0?width=808"
            alt=""
            className="absolute w-48 lg:w-[404px] h-auto rounded-md opacity-30 left-[5%] top-[10%]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/57dc2f72270dbc88b42e6269873f694921e93779?width=530"
            alt=""
            className="absolute w-32 lg:w-[265px] h-auto rounded-md opacity-30 left-[15%] bottom-[15%]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2ee14d09417ca6ccd0d351ce96adf6701b698586?width=530"
            alt=""
            className="absolute w-32 lg:w-[265px] h-auto rounded-md opacity-30 right-[15%] top-[20%]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/454105193cd9a01990cc2c4c11f292d5a4f1ad7e?width=1086"
            alt=""
            className="absolute w-64 lg:w-[543px] h-auto rounded-md opacity-30 right-[5%] bottom-[10%]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <h2 className="font-formula font-black text-white text-center uppercase leading-[0.9]
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[826px] px-4">
            {t("cta.title")}
          </h2>

          <Link
            to="/contact"
            className="border-2 border-[#0052CC] bg-[#0052CC] px-6 py-3 sm:px-8 sm:py-4
                       text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wide
                       hover:bg-transparent hover:text-white active:bg-[#0052CC]/80 transition-colors duration-200
                       mt-2 inline-block"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-36 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-3">
            {/* Left Content */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:w-[265px] flex-shrink-0">
              {/* Subheading */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3.5 sm:w-3.5 sm:h-4 bg-[#0052CC]"></div>
                <span className="text-[#0052CC] font-sans font-bold text-xs sm:text-sm uppercase tracking-wide">
                  {t("services.subtitle")}
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                             text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[88px] max-w-[618px]">
                {t("services.title").split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t("services.title").split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>

            {/* Service Cards Grid */}
            <div className="flex-1 flex flex-col gap-3 max-w-[1098px] relative">
              {/* Welding Card - большой блок сверху */}
              <Link to="/service/welding" className="relative h-[250px] sm:h-[280px] md:h-[314px] rounded-md overflow-hidden group cursor-pointer">
                <img
                  src="/2025-11-14 00.48.42.jpg"
                  alt="Welding"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

                {/* Content - по центру */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
                  <h3 className="text-white font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.9] tracking-[-0.01em] mb-3 sm:mb-4 drop-shadow-lg">
                    {t("services.welding.title")}
                  </h3>
                  <p className="text-white font-sans text-sm sm:text-base md:text-lg leading-[1.5] max-w-[600px] drop-shadow-md">
                    {t("services.welding.description")}
                  </p>
                </div>

                {/* Arrow Icon - в правом нижнем углу */}
                <div className="absolute bottom-6 right-6 z-10">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white group-hover:text-[#0052CC] transition-colors duration-200 drop-shadow-lg"
                  >
                    <path
                      d="M8 24L24 8M24 8H10M24 8V22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              {/* Bottom Row - два блока под WELDING */}
              <div className="flex flex-col md:flex-row gap-3 relative">
                
                {/* Contact Us Button - на границе между блоками, заходит на все три */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-30">
                  <Link
                    to="/contact"
                    className="border-2 border-white bg-white px-6 py-3 sm:px-8 sm:py-4
                               text-[#101211] font-sans font-bold text-xs sm:text-sm uppercase tracking-wide
                               hover:bg-[#101211] hover:text-white transition-colors duration-200
                               inline-block cursor-pointer shadow-lg whitespace-nowrap"
                  >
                    {t("services.contact")}
                  </Link>
                </div>
                {/* Pipelines Card */}
                <Link to="/service/pipelines" className="relative h-[180px] sm:h-[200px] md:flex-1 rounded-md overflow-hidden group cursor-pointer">
                  <img
                    src="/2025-11-14 00.01.44.jpg"
                    alt="Pipelines"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex flex-col gap-2">
                    <h3 className="text-white font-sans font-bold text-lg sm:text-xl uppercase leading-[0.9] tracking-[-0.01em]">
                      {t("services.pipelines.title")}
                    </h3>
                    <p className="text-white font-sans text-xs sm:text-sm leading-[1.5] max-w-[400px]">
                      {t("services.pipelines.description")}
                    </p>
                  </div>

                  {/* Arrow Icon - в правом нижнем углу */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white group-hover:text-[#0052CC] transition-colors duration-200 drop-shadow-lg"
                    >
                      <path
                        d="M8 24L24 8M24 8H10M24 8V22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>

                {/* Welding School Card */}
                <Link to="/service/welding-school" className="relative h-[180px] sm:h-[200px] md:flex-1 rounded-md overflow-hidden group cursor-pointer">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/454105193cd9a01990cc2c4c11f292d5a4f1ad7e?width=1086"
                    alt="Welding School"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex flex-col gap-2">
                    <h3 className="text-white font-sans font-bold text-lg sm:text-xl uppercase leading-[0.9] tracking-[-0.01em]">
                      {t("services.school.title")}
                    </h3>
                    <p className="text-white font-sans text-xs sm:text-sm leading-[1.5] max-w-[400px]">
                      {t("services.school.description")}
                    </p>
                  </div>

                  {/* Arrow Icon - в правом нижнем углу */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white group-hover:text-[#0052CC] transition-colors duration-200 drop-shadow-lg"
                    >
                      <path
                        d="M8 24L24 8M24 8H10M24 8V22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-24 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-4 sm:gap-5 md:gap-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-3 sm:gap-4 lg:gap-3">
            {/* Left - Heading */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 flex-1">
              {/* Subheading */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3.5 sm:w-3.5 sm:h-4 bg-[#0052CC]"></div>
                <span className="text-[#0052CC] font-sans font-bold text-xs sm:text-sm uppercase tracking-wide">
                  {t("stats.subtitle")}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                             text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[120px]">
                {t("stats.title")}
              </h2>
            </div>

            {/* Right - Paragraph */}
            <div className="lg:w-[320px] lg:pb-3">
              <p className="text-[#101211] opacity-70 font-sans text-sm sm:text-base leading-[1.5] max-w-[280px]">
                {t("stats.description")}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Years of Experience */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 border-t-2 border-[#101211]
                           transition-all duration-300 cursor-pointer
                           hover:border-[#0052CC] hover:bg-[#0052CC]/5 active:scale-[0.98] sm:hover:scale-[1.02] hover:shadow-lg
                           group">
              <span className="text-[#101211] font-sans text-xs sm:text-sm leading-[1.5]
                             group-hover:text-[#0052CC] transition-colors duration-300">
                {t("stats.years")}
              </span>
              <div className="font-formula font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[90px]
                             leading-[0.9] tracking-[-0.01em] uppercase
                             text-transparent stat-number
                             group-hover:text-[#0052CC] transition-all duration-300">
                {yearsCount}+
              </div>
            </div>

            {/* Metal Works */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 border-t-2 border-[#101211]
                           transition-all duration-300 cursor-pointer
                           hover:border-[#0052CC] hover:bg-[#0052CC]/5 active:scale-[0.98] sm:hover:scale-[1.02] hover:shadow-lg
                           group">
              <span className="text-[#101211] font-sans text-xs sm:text-sm md:text-base leading-[1.5]
                             group-hover:text-[#0052CC] transition-colors duration-300">
                {t("stats.metalworks")}
              </span>
              <div className="font-formula font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[90px]
                             leading-[0.9] tracking-[-0.01em] uppercase
                             text-transparent stat-number
                             group-hover:text-[#0052CC] transition-all duration-300">
                {metalWorksCount}+
              </div>
            </div>

            {/* Projects Complete */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 border-t-2 border-[#101211]
                           transition-all duration-300 cursor-pointer
                           hover:border-[#0052CC] hover:bg-[#0052CC]/5 active:scale-[0.98] sm:hover:scale-[1.02] hover:shadow-lg
                           group">
              <span className="text-[#101211] font-sans text-xs sm:text-sm md:text-base leading-[1.5]
                             group-hover:text-[#0052CC] transition-colors duration-300">
                {t("stats.projects")}
              </span>
              <div className="font-formula font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[90px]
                             leading-[0.9] tracking-[-0.01em] uppercase
                             text-transparent stat-number
                             group-hover:text-[#0052CC] transition-all duration-300">
                {projectsCount}+
              </div>
            </div>

            {/* Satisfied Clients */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 border-t-2 border-[#101211]
                           transition-all duration-300 cursor-pointer
                           hover:border-[#0052CC] hover:bg-[#0052CC]/5 active:scale-[0.98] sm:hover:scale-[1.02] hover:shadow-lg
                           group">
              <span className="text-[#101211] font-sans text-xs sm:text-sm md:text-base leading-[1.5]
                             group-hover:text-[#0052CC] transition-colors duration-300">
                {t("stats.clients")}
              </span>
              <div className="font-formula font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[90px]
                             leading-[0.9] tracking-[-0.01em] uppercase
                             text-transparent stat-number
                             group-hover:text-[#0052CC] transition-all duration-300">
                {clientsCount}+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Quotes Section */}
      <section id="testimonials" className="relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] px-4 sm:px-6 md:px-8
                          pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-4 sm:pb-6 md:pb-8 flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c516ed251305008b60f462d2e6999cde957d5df3?width=2880"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[550px]">
          {/* Main Testimonial Image */}
          <div className="w-full max-w-3xl mb-4 sm:mb-5 px-2 sm:px-0">
            <img
              src={testimonials[currentTestimonial].image}
              alt={`Testimonial ${currentTestimonial + 1}`}
              className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[300px] sm:max-h-[400px]"
            />
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#0052CC]
                         bg-transparent flex items-center justify-center
                         hover:bg-[#0052CC] active:bg-[#0052CC]/80 transition-colors duration-200 group"
              aria-label="Previous testimonial"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.825 7L16 7L16 9L3.825 9L9.425 14.6L8 16L6.99382e-07 8L8 -6.99382e-07L9.425 1.4L3.825 7Z"
                      fill="white"/>
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#0052CC]
                         bg-transparent flex items-center justify-center
                         hover:bg-[#0052CC] active:bg-[#0052CC]/80 transition-colors duration-200 group"
              aria-label="Next testimonial"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                      fill="white"/>
              </svg>
            </button>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5 mt-4 sm:mt-5 w-full max-w-4xl px-2 sm:px-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`relative cursor-pointer transition-all duration-200 rounded-lg overflow-hidden
                  ${index === currentTestimonial 
                    ? 'ring-2 ring-[#0052CC] shadow-xl scale-105' 
                    : 'opacity-70 hover:opacity-100 active:scale-[0.98] sm:hover:scale-[1.02] hover:shadow-lg'
                  }`}
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
