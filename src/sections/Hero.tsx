import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import SectionFooter from "./SectionFooter";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Linkedin, Mail, MapPin } from "lucide-react";

const toPublicAsset = (filename: string) => `${import.meta.env.BASE_URL}${encodeURI(filename)}`;

const researchHighlights = [
  {
    src: toPublicAsset("1T-TaS2_Highlight image.png"),
    alt: "1T-TaS2 research highlight",
    eyebrow: (
      <>
        Interlayer Dimerization in 1T-TaS<sub>2</sub>
      </>
    ),
  },
  {
    src: toPublicAsset("Defence1.jpg"),
    alt: "PhD defense celebration",
    eyebrow: "PhD Defense",
  },
  {
    src: toPublicAsset("R3.1.png"),
    alt: "Research figure showing phase coexistence",
    eyebrow: "Phase Coexistence Near MIT",
  },
  {
    src: toPublicAsset("ellipsometer_cryostat.jpg"),
    alt: "Ellipsometer and cryostat setup",
    eyebrow: "Spectroscopic Ellipsometry at Low-temperatures",
  },
];

const Hero: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (researchHighlights.length < 2 || isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % researchHighlights.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showNext = (direction: number) => {
    setCurrentIndex((previousIndex) => {
      const nextIndex = (previousIndex + direction + researchHighlights.length) % researchHighlights.length;
      return nextIndex;
    });
  };

  const currentSlide = researchHighlights[currentIndex];

  return (
    <div className="flex h-full min-h-full w-full flex-col bg-[#071b2b] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),transparent_30%)]" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] flex-1 items-center gap-6 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <div className="mb-6 mt-1 max-w-[28rem] border-l border-cyan-300/70 py-2 pl-3">
            <p
              className="text-xl leading-relaxed text-cyan-100/90 sm:text-[1.25rem]"
              style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
            >
              आ नो भद्राः क्रतवो यन्तु विश्वतः ।
            </p>
            <p className="mt-1 text-sm italic text-slate-400">ā no bhadrāḥ kratavo yantu viśvataḥ</p>
            <p className="mt-1 text-sm text-slate-500">Let noble thoughts come to us from all directions.</p>
            <p className="mt-1 text-right text-xs italic text-cyan-300/80">— Ṛgveda 1.89.1</p>
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Achyut<br />
            <span className="bg-gradient-to-r from-cyan-200 via-white to-sky-400 bg-clip-text text-transparent">Tiwari</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-slate-300">
            Postdoctoral researcher
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} /> 1. Physikalisches Institut · Universität Stuttgart, Germany</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button asChild className="whitespace-nowrap bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-colors duration-200 hover:bg-cyan-300">
              <a href="#Research" onClick={() => onNavigate?.("Research")} className="inline-flex items-center gap-2">
                Explore my research <ArrowRight size={17} />
              </a>
            </Button>
            <Button asChild className="border border-slate-500 bg-transparent px-5 py-3 text-base text-white hover:bg-white/10">
              <a href="mailto:tiwariachyut3@gmail.com">Contact me</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-300 lg:justify-start">
            <a href="mailto:tiwariachyut3@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"><Mail size={17} /> Email</a>
            <a href="https://www.linkedin.com/in/achyut-tiwari-8144071ab/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"><Linkedin size={17} /> LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=lgn9F-4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"><BookOpen size={17} /> Google Scholar</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 relative mx-auto w-full max-w-[600px] lg:order-2"
        >
          <div
            className="relative aspect-[4.35/5.0] w-full overflow-hidden rounded-[1.7rem] border border-cyan-300/25 bg-[#102f43]/80 shadow-[0_25px_80px_rgba(14,165,233,0.25)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d2237]/40 via-transparent to-[#071b2b]/70" />

            {researchHighlights.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out ${
                  index === currentIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}

            <button
              type="button"
              aria-label="Previous highlight"
              onClick={() => showNext(-1)}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#081d2d]/60 text-white/90 backdrop-blur-sm transition hover:bg-[#081d2d]/80 hover:text-cyan-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next highlight"
              onClick={() => showNext(1)}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#081d2d]/60 text-white/90 backdrop-blur-sm transition hover:bg-[#081d2d]/80 hover:text-cyan-200"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
              <span className="rounded-full border border-cyan-300/25 bg-[#071b2b]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-sm">
                Highlights
              </span>
              <div className="flex items-center gap-1.5">
                {researchHighlights.map((slide, index) => (
                  <button
                    key={`${slide.alt}-dot`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${index === currentIndex ? "w-8 bg-cyan-300" : "w-2.5 bg-white/40 hover:bg-white/60"}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#071b2b]/90 via-[#071b2b]/60 to-transparent p-5 pb-6 sm:p-6">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-300 normal-case">
                {currentSlide.eyebrow}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionFooter sectionId="Home" small onNavigate={onNavigate} />
    </div>
  );
};

export default Hero;
