"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

/** Simple hook: returns true once the element is in the viewport */
function useNativeInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/**
 * Parse a stat value string like "4.2x", "$5M+", "500+", "1.8s", "98%"
 * into { target, prefix, suffix, decimals } for AnimatedCounter,
 * or null if the value should be rendered as plain text (e.g. "Yes").
 */
function parseStatValue(value: string): { target: number; prefix: string; suffix: string; decimals: number } | null {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];
  const target = parseFloat(numStr);
  if (isNaN(target) || target === 0) return null;
  const decimalPart = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { target, prefix, suffix, decimals: decimalPart };
}

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const { ref: statsRef, inView: statsInView } = useNativeInView(0.3);

  return (
    <section ref={statsRef} className="relative w-full px-6 py-12 md:py-16 lg:px-12">
      <div className="relative mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {(() => {
                  const parsed = parseStatValue(stat.value);
                  if (!statsInView) return <span className="text-white">&mdash;</span>;
                  if (!parsed) return <span className="text-[#ff4500]">{stat.value}</span>;
                  return (
                    <AnimatedCounter
                      target={parsed.target}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                      decimals={parsed.decimals}
                      duration={2}
                    />
                  );
                })()}
              </div>
              <p className="text-xs text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
