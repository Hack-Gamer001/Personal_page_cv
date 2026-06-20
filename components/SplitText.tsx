"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const units: string[] =
      splitType === "words"
        ? text.split(" ")
        : splitType === "lines"
        ? text.split("\n")
        : text.split("");

    el.innerHTML = units
      .map((u, i) =>
        `<span class="split-unit" style="display:inline-block;will-change:transform,opacity" data-index="${i}">${u === " " ? "&nbsp;" : u}</span>${splitType === "words" ? " " : ""}`
      )
      .join("");

    const targets = el.querySelectorAll<HTMLElement>(".split-unit");

    gsap.set(targets, { ...from, immediateRender: true });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        animated.current = true;
        onLetterAnimationComplete?.();
      },
    });

    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [text]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign, overflow: "hidden", display: "inline-block", whiteSpace: "normal", wordWrap: "break-word" }}
    >
      {text}
    </p>
  );
};

export default SplitText;
