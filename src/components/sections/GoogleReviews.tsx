"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { locationReviewMeta, googleReviews, combinedRating, totalReviewCount } from "@/data/googleReviews";
import { testimonials } from "@/data/testimonials";

const ease = [0.23, 1, 0.32, 1] as const;

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={star <= rating ? "#FBBC04" : "none"}
          stroke={star <= rating ? "#FBBC04" : "#555"}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function ReviewCard({ review, index }: { review: { author: string; rating: number; text: string; date?: string; role?: string; company?: string; service?: string }; index: number }) {
  const displayDate = review.date
    ? new Date(review.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="group p-6 md:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 flex flex-col"
    >
      {/* Header: avatar + name + Google icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff4500]/20 to-[#ff4500]/5 flex items-center justify-center text-white font-semibold text-sm border border-white/[0.08]">
            {review.author.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{review.author}</p>
            {review.role && review.company && (
              <p className="text-[11px] text-white/50">{review.role}, {review.company}</p>
            )}
            {displayDate && !review.role && (
              <p className="text-[11px] text-white/40">{displayDate}</p>
            )}
          </div>
        </div>
        <GoogleIcon />
      </div>

      {/* Stars */}
      <div className="mb-3">
        <StarRating rating={review.rating} size={14} />
      </div>

      {/* Review text */}
      <p className="text-sm text-white/80 leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Service tag */}
      {review.service && (
        <div className="mt-4 pt-3 border-t border-white/[0.06]">
          <span className="text-[10px] text-[#ff4500]/70 tracking-wider uppercase font-medium">{review.service}</span>
        </div>
      )}
    </motion.div>
  );
}

export function GoogleReviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Combine Google reviews + testimonials for display
  const allReviews = [
    ...googleReviews.map((r) => ({
      author: r.author,
      rating: r.rating,
      text: r.text,
      date: r.date,
    })),
    ...testimonials.map((t) => ({
      author: t.name,
      rating: t.rating as number,
      text: t.quote,
      role: t.role,
      company: t.company,
      service: t.service,
    })),
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header: combined rating */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase font-semibold mb-6">
            Verified Google Reviews
          </p>

          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] mb-6">
            <GoogleIcon />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-white">{combinedRating}</span>
              <StarRating rating={Math.round(combinedRating)} size={18} />
            </div>
            <div className="w-px h-8 bg-white/[0.1]" />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{totalReviewCount}+ reviews</p>
              <p className="text-[11px] text-white/50">across {locationReviewMeta.length} locations</p>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">
            What Our Clients Say<span className="text-[#ff4500]">.</span>
          </h2>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allReviews.slice(0, 9).map((review, i) => (
            <ReviewCard key={`${review.author}-${i}`} review={review} index={i} />
          ))}
        </div>

        {/* Location cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {locationReviewMeta.map((loc) => (
            <a
              key={loc.id}
              href={`https://search.google.com/local/reviews?placeid=${loc.placeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#ff4500]/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <GoogleIcon />
              <div className="text-left">
                <p className="text-sm font-medium text-white group-hover:text-[#ff4500] transition-colors">{loc.label}</p>
                <p className="text-[11px] text-white/50">{loc.rating}⭐ · {loc.reviewCount} reviews</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30 group-hover:text-[#ff4500] transition-colors ml-1">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
