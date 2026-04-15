"use client";

import { useEffect, useRef } from "react";

/**
 * Client island that adds IntersectionObserver-based scroll reveal
 * to any children containing scroll-reveal CSS class elements.
 */
export default function ScrollRevealContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-scale, .scroll-reveal-fade, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scaleX"
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
