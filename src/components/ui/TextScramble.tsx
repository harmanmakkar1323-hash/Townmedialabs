"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

export function TextScramble({
  text,
  className,
  delay = 0,
}: TextScrambleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView || started) return;

    const timeout = setTimeout(() => {
      setStarted(true);
      let iteration = 0;
      const totalIterations = text.length * 3;

      const interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration / 3) return text[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        iteration++;
        if (iteration > totalIterations) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay, started]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
