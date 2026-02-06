import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: t("contact.success"),
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || t("contact.error"),
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: t("contact.error"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Contact Section with Background Image */}
      <section className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/photo_2025-11-01 23.04.49.jpeg"
            alt="Industrial welding facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Contact Form Section - поверх изображения */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="max-w-2xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3.5 sm:w-3.5 sm:h-4 bg-[#0052CC]"></div>
                <span className="text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wide">
                  {t("contact.subtitle")}
                </span>
              </div>

              <h1 className="font-formula font-black text-white uppercase leading-[0.9] tracking-[-0.01em]
                             text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {t("contact.title")}
              </h1>

              <p className="text-white opacity-90 font-sans text-sm sm:text-base md:text-lg leading-[1.5] max-w-[600px]">
                {t("contact.description")}
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-white font-sans font-bold text-sm uppercase tracking-wide"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-[#101211]/20 bg-white
                             text-[#101211] font-sans text-sm sm:text-base
                             focus:outline-none focus:border-[#0052CC] transition-colors duration-200"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-white font-sans font-bold text-sm uppercase tracking-wide"
                >
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-[#101211]/20 bg-white
                             text-[#101211] font-sans text-sm sm:text-base
                             focus:outline-none focus:border-[#0052CC] transition-colors duration-200"
                  placeholder={t("contact.phonePlaceholder")}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-white font-sans font-bold text-sm uppercase tracking-wide"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-[#101211]/20 bg-white
                             text-[#101211] font-sans text-sm sm:text-base
                             focus:outline-none focus:border-[#0052CC] transition-colors duration-200"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-white font-sans font-bold text-sm uppercase tracking-wide"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-[#101211]/20 bg-white
                             text-[#101211] font-sans text-sm sm:text-base resize-none
                             focus:outline-none focus:border-[#0052CC] transition-colors duration-200"
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="border-2 border-[#0052CC] bg-[#0052CC] px-6 py-3 sm:px-8 sm:py-4
                           text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wide
                           hover:bg-transparent hover:text-white active:bg-[#0052CC]/80 transition-colors duration-200
                           w-fit mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (language === "en" ? "SENDING..." : "ODESÍLÁNÍ...") : t("contact.send")}
              </button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mt-4 p-4 rounded-md ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-200 border border-green-500/50"
                      : "bg-red-500/20 text-red-200 border border-red-500/50"
                  }`}
                >
                  <p className="font-sans text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

