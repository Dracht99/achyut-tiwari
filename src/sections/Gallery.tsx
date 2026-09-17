import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import SectionFooter from "./SectionFooter";

const asset = (filename: string) => `${import.meta.env.BASE_URL}${encodeURI(filename)}`;

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

type GallerySection = {
  title: string;
  images: GalleryImage[];
};

const SECTIONS: GallerySection[] = [
  {
    title: "PhD Defence",
    images: [
      { src: asset("Defence1.jpg"), alt: "Achyut Tiwari at his PhD defence, Universität Stuttgart", caption: "PhD defence, Universität Stuttgart" },
      { src: asset("Defence2.jpg"), alt: "PhD defence presentation", caption: "PhD defence" },
      { src: asset("Defence3.jpg"), alt: "PhD defence, audience and committee", caption: "PhD defence" },
      { src: asset("Tiwari14.jpeg"), alt: "Achyut Tiwari celebrating after the PhD defence", caption: "After the defence" },
    ],
  },
  {
    title: "Experiments",
    images: [
      { src: asset("ellipsometer.jpg"), alt: "Mueller-matrix ellipsometer (RC2) setup", caption: "Mueller-matrix ellipsometer (RC2)" },
      { src: asset("ellipsometer_cryostat.jpg"), alt: "Ellipsometer integrated with a cryostat", caption: "Ellipsometer with cryostat integration" },
      { src: asset("ellipsometer2.jpg"), alt: "Ellipsometry measurement setup", caption: "Ellipsometry setup" },
      { src: asset("laser reflection off TaS2 crosssection.jpg"), alt: "Laser reflection off a 1T-TaS2 crystal cross-section", caption: "Laser reflection off a 1T-TaS₂ cross-section" },
      { src: asset("IITD_CLROom.jpg"), alt: "Cleanroom facility at IIT Delhi", caption: "Cleanroom, IIT Delhi" },
    ],
  },
  {
    title: "Group photos",
    images: [
      { src: asset("IITD group.jpg"), alt: "Research group photo, IIT Delhi", caption: "Research group, IIT Delhi" },
      { src: asset("PI1_group.png"), alt: "1. Physikalisches Institut group, Universität Stuttgart", caption: "1. Physikalisches Institut, Universität Stuttgart" },
    ],
  },
  {
    title: "Conferences",
    images: [
      { src: asset("WSE2023.JPG"), alt: "Workshop on Spectroscopic Ellipsometry, Prague 2023", caption: "Workshop on Spectroscopic Ellipsometry, Prague 2023" },
      { src: asset("DPG2025.jpg"), alt: "DPG Spring Meeting, 2025", caption: "DPG Spring Meeting, 2025" },
      { src: asset("DPG2025_2.jpg"), alt: "DPG Spring Meeting, 2025, session photo", caption: "DPG Spring Meeting, 2025" },
      { src: asset("TalkWSE26.JPG"), alt: "Talk at the Workshop on Spectroscopic Ellipsometry, Genova 2026", caption: "Talk, Workshop on Spectroscopic Ellipsometry, Genova 2026" },
    ],
  },
];

const Gallery: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxImage]);

  return (
    <div className="w-full flex flex-col bg-[#f7f8f5]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center text-4xl font-bold tracking-[-0.03em]">
          Gallery
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base text-slate-600">
          A glimpse of my experiments, conferences, group life, and PhD defence.
        </p>

        <div className="mt-16 flex flex-col gap-16">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-2xl font-bold">{section.title}</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                {section.images.map((image, index) => (
                  <motion.button
                    key={image.src}
                    type="button"
                    onClick={() => setLightboxImage(image)}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group text-left"
                  >
                    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{image.caption}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage &&
        createPortal(
          <div
            role="button"
            tabIndex={0}
            aria-label="Close image"
            onClick={() => setLightboxImage(null)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setLightboxImage(null);
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightboxImage(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>,
          document.body,
        )}

      <SectionFooter sectionId="Gallery" onNavigate={onNavigate} />
    </div>
  );
};

export default Gallery;
