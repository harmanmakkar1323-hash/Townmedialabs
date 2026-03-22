"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "motion/react";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { clientLogos } from "@/data/clientLogos";

const ease = [0.23, 1, 0.32, 1] as const;

function FloatingParticle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-[2px] h-[2px] rounded-full bg-[#ff4500]/20 pointer-events-none"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedSeparator() {
  return (
    <motion.span
      className="text-[#ff4500]/20 mx-4 sm:mx-6 md:mx-10 text-[6px] select-none flex items-center"
      animate={{
        rotate: [0, 180, 360],
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      &#9670;
    </motion.span>
  );
}

function LogoText({ name }: { name: string }) {
  const words = name.split(" ");
  return (
    <span className="group relative inline-flex items-center gap-[0.25em] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight whitespace-nowrap select-none cursor-default">
      {/* Glow layer */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4500]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />
      {words.map((word, wi) => (
        <motion.span
          key={wi}
          className="relative text-white/[0.08] transition-all duration-500 group-hover:text-white/40"
          whileHover={{
            color: "rgba(255,255,255,0.5)",
            textShadow: "0 0 20px rgba(255,69,0,0.3)",
          }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: wi * 0.08,
            ease,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function ClientLogos() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Generate stable particle positions
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        delay: i * 0.4,
        x: `${5 + (i * 47) % 90}%`,
        y: `${10 + (i * 31) % 80}%`,
      })),
    []
  );

  const row1 = clientLogos.map((name, i) => (
    <span key={`r1-${i}`} className="flex items-center">
      <LogoText name={name} />
      {i < clientLogos.length - 1 && <AnimatedSeparator />}
    </span>
  ));

  const row2 = [...clientLogos].reverse().map((name, i) => (
    <span key={`r2-${i}`} className="flex items-center">
      <LogoText name={name} />
      {i < clientLogos.length - 1 && <AnimatedSeparator />}
    </span>
  ));

  // Third row: shuffled order for variety
  const row3Items = useMemo(() => {
    const shuffled = [...clientLogos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor((i * 7 + 3) % (i + 1)); // deterministic shuffle
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const row3 = row3Items.map((name, i) => (
    <span key={`r3-${i}`} className="flex items-center">
      <LogoText name={name} />
      {i < clientLogos.length - 1 && <AnimatedSeparator />}
    </span>
  ));

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.9,
        ease,
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className="relative w-full py-16 md:py-24 bg-[#080808] overflow-hidden"
    >
      {/* Top/bottom border lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Animated background gradient pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,69,0,0.02) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} delay={p.delay} x={p.x} y={p.y} />
      ))}

      {/* Section label with reveal effect */}
      <div className="text-center mb-12 md:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] md:text-xs text-white/30 tracking-[0.25em] uppercase font-semibold mb-4"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            Trusted by ambitious brands
          </motion.span>
        </motion.p>

        {/* Brand counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex items-center justify-center gap-2"
        >
          <span className="text-2xl md:text-3xl font-bold text-[#ff4500]/70">
            <AnimatedCounter
              target={clientLogos.length}
              suffix="+"
              duration={1.5}
            />
          </span>
          <span className="text-[11px] text-white/25 tracking-wide uppercase">
            brands
          </span>
        </motion.div>
      </div>

      {/* Marquee container with fade edges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4, ease }}
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 — forward */}
        <Marquee className="mb-6">
          <div className="flex items-center">{row1}</div>
        </Marquee>

        {/* Row 2 — reverse */}
        <div className="mb-6" style={{ direction: "rtl" }}>
          <Marquee>
            <div className="flex items-center" style={{ direction: "ltr" }}>
              {row2}
            </div>
          </Marquee>
        </div>

        {/* Row 3 — forward, different content order */}
        <Marquee>
          <div className="flex items-center">{row3}</div>
        </Marquee>
      </motion.div>
    </motion.section>
  );
}
