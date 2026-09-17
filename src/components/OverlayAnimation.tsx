// components/OverlayAnimation.tsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type OverlayAnimationProps = {
  logoSrc?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  visibleMs?: number;
  dismissible?: boolean;
};

export default function OverlayAnimation({
  logoSrc,
  fromColor = "#071029",
  viaColor = "#0ea5e9",
  toColor = "#061021",
  visibleMs = 1800,
  dismissible = true,
}: OverlayAnimationProps) {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dismissible) setVisible(false);
    }, visibleMs);
    return () => clearTimeout(timer);
  }, [dismissible, visibleMs]);

  const name = useMemo(
    () => ["Achyut", " Tiwari"].map((part, index) => (
      <span key={part + index} className={index === 0 ? "text-white" : "text-cyan-300"}>
        {part}
      </span>
    )),
    []
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: `linear-gradient(rgba(7, 27, 43, 0.55), rgba(7, 27, 43, 0.55)), url('${import.meta.env.BASE_URL}pic_lab.JPG') center / cover` }}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}pic_lab.JPG`}
            alt="Achyut Tiwari in the laboratory"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-[#071b2b]/55" />
          <motion.div
            aria-hidden="true"
            className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
            animate={prefersReducedMotion ? undefined : { x: [0, 35, -20, 0], y: [0, 25, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl"
            animate={prefersReducedMotion ? undefined : { x: [0, -25, 20, 0], y: [0, -20, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.32em] text-cyan-200/90 backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Experimental Condensed-Matter Physicist
            </motion.div>

            <motion.h1
              className="relative z-10 mb-3 bg-gradient-to-r from-cyan-200 via-white to-sky-400 bg-clip-text text-4xl font-black tracking-[-0.06em] text-transparent md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              {name}
            </motion.h1>

            <motion.p
              className="mb-5 max-w-xl text-sm text-slate-200/85 md:text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            >
              1. Physikalisches Institut · Universität Stuttgart
            </motion.p>

            <motion.div
              className="relative h-[2px] w-32 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div
                className="h-full w-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
                initial={{ x: "-110%" }}
                animate={{ x: "110%" }}
                transition={{ delay: 0.8, duration: 1.1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            Correlated Materials · Optical Spectroscopy · Phase Transitions
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
