import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-formula font-black text-[#101211] uppercase mb-3 sm:mb-4">404</h1>
        <p className="text-base sm:text-lg md:text-xl text-[#101211]/70 font-sans mb-4 sm:mb-6">Oops! Page not found</p>
        <a href="/" className="text-[#0052CC] hover:text-[#003380] font-sans font-bold text-sm sm:text-base uppercase tracking-wide underline transition-colors duration-200">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
