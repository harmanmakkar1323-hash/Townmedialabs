"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { comparisonOther, comparisonTml } from "@/data/comparisons";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

gsap.registerPlugin(ScrollTrigger);

export function ComparisonSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
  const checkRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!cardsInView) return;
    checkRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: 0.8 + i * 0.1,
          ease: "back.out(2)",
        }
      );
    });
  }, [cardsInView]);

  return (
    <section id="comparison" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <RevealOnScroll>
            <p className="section-label mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
              Comparison
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              But, why would you want
              <br />
              to work{" "}
              <span className="text-gold-gradient italic">with us</span>?
            </h2>
          </RevealOnScroll>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Other Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: 10 }}
            animate={
              cardsInView
                ? { opacity: 1, x: 0, rotateY: 0 }
                : {}
            }
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card rounded-2xl p-8"
            style={{ perspective: "1000px" }}
          >
            <h3 className="mb-8 text-center text-sm font-semibold tracking-widest text-[#555] uppercase">
              Other Agencies
            </h3>
            <ul className="space-y-5">
              {comparisonOther.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 text-[#555]"
                >
                  <span className="mt-0.5 text-[#333]">✕</span>
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* TML */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: -10 }}
            animate={
              cardsInView
                ? { opacity: 1, x: 0, rotateY: 0 }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="comparison-highlight gradient-border rounded-2xl p-8"
            style={{ perspective: "1000px" }}
          >
            <h3 className="mb-8 text-center text-sm font-semibold tracking-widest text-accent uppercase">
              ★ TML
            </h3>
            <ul className="space-y-5">
              {comparisonTml.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={cardsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 text-white"
                >
                  <span
                    ref={(el) => {
                      if (el) checkRefs.current[i] = el;
                    }}
                    className="mt-0.5 inline-block text-accent"
                  >
                    ✓
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
