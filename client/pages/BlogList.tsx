import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

// Blog data structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export default function BlogList() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t("blog.listTitle")} | Nash Welder`;
  }, [t, language]);

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: t("blog.post1.title"),
      excerpt: t("blog.post1.excerpt"),
      date: t("blog.post1.date"),
      image: "/2025-11-14 00.48.42.jpg",
      category: t("blog.post1.category"),
    },
    {
      id: "2",
      title: t("blog.post2.title"),
      excerpt: t("blog.post2.excerpt"),
      date: t("blog.post2.date"),
      image: "/2025-11-14 00.01.44.jpg",
      category: t("blog.post2.category"),
    },
    {
      id: "3",
      title: t("blog.post3.title"),
      excerpt: t("blog.post3.excerpt"),
      date: t("blog.post3.date"),
      image: "/about-welder.jpg",
      category: t("blog.post3.category"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3.5 sm:w-3.5 sm:h-4 bg-[#0052CC]"></div>
                <span className="text-[#0052CC] font-sans font-bold text-xs sm:text-sm uppercase tracking-wide">
                  {t("blog.subtitle")}
                </span>
              </div>
              <h1 className="font-formula font-black text-[#101211] uppercase leading-[0.9] tracking-[-0.01em]
                             text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {t("blog.title")}
              </h1>
              <p className="text-[#101211] opacity-70 font-sans text-sm sm:text-base md:text-lg leading-[1.5] max-w-[800px]">
                {t("blog.description")}
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group flex flex-col bg-white border-2 border-[#101211]/10 hover:border-[#0052CC] transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full h-56 sm:h-64 md:h-80 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-[#0052CC] text-white font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wide px-2 sm:px-3 py-1 sm:py-1.5">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 flex-1">
                    <div className="flex items-center gap-2 text-[#101211]/60 font-sans text-xs sm:text-sm">
                      <span>{post.date}</span>
                    </div>
                    <h2 className="font-formula font-black text-[#101211] uppercase leading-[1.1] tracking-[-0.01em]
                                   text-xl sm:text-2xl md:text-3xl group-hover:text-[#0052CC] transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-[#101211] opacity-70 font-sans text-sm sm:text-base leading-[1.5] line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-3 sm:pt-4">
                      <span className="text-[#0052CC] font-sans font-bold text-xs sm:text-sm uppercase tracking-wide group-hover:underline">
                        {t("blog.readMore")} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




