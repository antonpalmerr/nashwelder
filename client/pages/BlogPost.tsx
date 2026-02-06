import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  // Get blog post content based on ID
  const getBlogContent = (postId: string | undefined) => {
    if (!postId) return null;

    const posts: Record<string, {
      title: string;
      content: string[];
      image: string;
      date: string;
      category: string;
      metaDescription: string;
      metaKeywords: string;
    }> = {
      "1": {
        title: t("blog.post1.title"),
        content: [
          t("blog.post1.content1"),
          t("blog.post1.content2"),
          t("blog.post1.content3"),
          t("blog.post1.content4"),
          t("blog.post1.content5"),
        ],
        image: "/2025-11-14 00.48.42.jpg",
        date: t("blog.post1.date"),
        category: t("blog.post1.category"),
        metaDescription: t("blog.post1.metaDescription"),
        metaKeywords: t("blog.post1.metaKeywords"),
      },
      "2": {
        title: t("blog.post2.title"),
        content: [
          t("blog.post2.content1"),
          t("blog.post2.content2"),
          t("blog.post2.content3"),
          t("blog.post2.content4"),
          t("blog.post2.content5"),
        ],
        image: "/2025-11-14 00.01.44.jpg",
        date: t("blog.post2.date"),
        category: t("blog.post2.category"),
        metaDescription: t("blog.post2.metaDescription"),
        metaKeywords: t("blog.post2.metaKeywords"),
      },
      "3": {
        title: t("blog.post3.title"),
        content: [
          t("blog.post3.content1"),
          t("blog.post3.content2"),
          t("blog.post3.content3"),
          t("blog.post3.content4"),
          t("blog.post3.content5"),
        ],
        image: "/about-welder.jpg",
        date: t("blog.post3.date"),
        category: t("blog.post3.category"),
        metaDescription: t("blog.post3.metaDescription"),
        metaKeywords: t("blog.post3.metaKeywords"),
      },
    };

    return posts[postId] || null;
  };

  const post = getBlogContent(id);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (post) {
      // SEO Meta Tags
      document.title = `${post.title} | Nash Welder Blog`;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.metaDescription);

      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', post.metaKeywords);

      // Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', post.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', post.metaDescription);

      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', window.location.origin + post.image);
    }
  }, [post, language]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-formula font-black text-[#101211] uppercase text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              {t("blog.notFound")}
            </h1>
            <Link
              to="/blog"
              className="text-[#0052CC] font-sans font-bold text-sm uppercase tracking-wide hover:underline"
            >
              {t("blog.backToBlog")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative w-full h-48 sm:h-64 md:h-96 lg:h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="mb-3 sm:mb-4">
                <span className="bg-[#0052CC] text-white font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wide px-2 sm:px-3 py-1 sm:py-1.5">
                  {post.category}
                </span>
              </div>
              <h1 className="font-formula font-black text-white uppercase leading-[0.9] tracking-[-0.01em]
                             text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-[#101211]/10">
              <span className="text-[#101211]/60 font-sans text-xs sm:text-sm">{post.date}</span>
              <span className="text-[#101211]/60 font-sans text-xs sm:text-sm">•</span>
              <span className="text-[#0052CC] font-sans font-bold text-xs sm:text-sm uppercase tracking-wide">
                {post.category}
              </span>
            </div>

            {/* Content Paragraphs */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#101211] font-sans text-sm sm:text-base md:text-lg leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Back to Blog Link */}
            <div className="pt-6 sm:pt-8 border-t-2 border-[#101211]/10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[#0052CC] font-sans font-bold text-xs sm:text-sm uppercase tracking-wide hover:underline"
              >
                ← {t("blog.backToBlog")}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}




