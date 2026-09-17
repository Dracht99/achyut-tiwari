import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionFooter from "./SectionFooter";

type Theme = {
  title: string;
  description: string;
};

type Highlight = {
  headline: string;
  summary: string;
  tags: string[];
  citation: string;
  image: string;
  alt: string;
  url?: string;
};

const THEMES: Theme[] = [
  {
    title: "Optical spectroscopy of correlated & van der Waals materials",
    description: "Explore anisotropic charge dynamics, interlayer coupling, and electronic phases.",
  },
  {
    title: "Generalized (Mueller-matrix) ellipsometry",
    description: "Polarization-resolved opticsto determine dielectric tensors in low-symmetry materials.",
  },
  {
    title: "Phase transitions & emergent order",
    description: "Tracking changes in charge dynamics, phase coexistence, and electronic structure across metal-insulator and charge-order transitions.",
  },
];

const HIGHLIGHTS: Highlight[] = [
  {
    headline: "Interlayer dimerization and the insulating state of 1T-TaS₂",
    summary:
      "Polarization-resolved infrared spectroscopy, combined with electronic-structure calculations, reveals that the bulk insulating gap in 1T-TaS₂ is controlled by stacking-dependent interlayer dimerization. The results show that interlayer coupling is essential for the insulating ground state, rather than a picture based solely on Mott localization within the charge-density-wave layers.",
    tags: ["Infrared spectroscopy", "DFT", "van der Waals materials"],
    citation: "Phys. Rev. Lett. 137, 126501 (2026)",
    image: `${import.meta.env.BASE_URL}1T-TaS2_Highlight image.png`,
    alt: "Infrared spectroscopy of interlayer dimerization in 1T-TaS2",
    url: "https://journals.aps.org/prl/abstract/10.1103/pwzn-m4d2",
  },
  {
    headline: "Anisotropic phase evolution in 1T-TaS₂",
    summary:
      "Temperature-dependent ellipsometry combined with anisotropic Bruggeman effective-medium analysis resolves the evolution of metallic and insulating phases across the charge-density-wave transitions of 1T-TaS<sub>2</sub>. The analysis connects the anisotropic dielectric response with changes in metallic volume fraction, domain morphology, and interlayer coupling.",
    tags: ["Ellipsometry", "Interlayer coupling", "Anisotropic BEMA"],
    citation: "Appl. Phys. Lett. 128, 063104 (2026)",
    image: `${import.meta.env.BASE_URL}R3.2.jpg`,
    alt: "Anisotropic phase evolution in layered 1T-TaS2",
    url: "https://pubs.aip.org/aip/apl/article-abstract/128/6/063104/3379342/Interlayer-coupling-driven-phase-evolution-in",
  },
  {
    headline: "Dielectric tensors of low-symmetry quantum materials",
    summary:
      "Angle- and azimuth-resolved Mueller-matrix ellipsometry enables the temperature-dependent dielectric tensor of triclinic crystals to be determined. This provides a direct way to follow anisotropic charge dynamics and their evolution across metal-insulator and charge-order transitions.",
    tags: ["Mueller-matrix ellipsometry", "Anisotropic dielectric tensor"],
    citation: "Appl. Phys. Lett. 125, 133101 (2024)",
    image: `${import.meta.env.BASE_URL}APL2024.png`,
    alt: "Mueller-matrix ellipsometry of a low-symmetry crystal",
    url: "https://pubs.aip.org/aip/apl/article-abstract/125/13/133101/3313692/Temperature-dependent-generalized-ellipsometry-of?redirectedFrom=fulltext",
  },
  {
    headline: "Quantifying phase coexistence across first-order transitions",
    summary:
      "Effective-medium analysis of temperature-dependent optical spectra allows the coexistence of metallic and insulating phases to be quantified near first-order transitions. This links changes in the macroscopic dielectric response to the evolution of phase fractions and domain morphology.",
    tags: ["Effective-medium theory", "Phase coexistence", "First-order transitions"],
    citation: "Phys. Rev. B 111, 195142 (2025)",
    image: `${import.meta.env.BASE_URL}Graphical abstract.png`,
    alt: "Quantitative phase coexistence measured by optical response",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.195142",
  },
  {
    headline: "Optical fingerprints of altermagnetism",
    summary:
      "I am extending Mueller-matrix ellipsometry toward symmetry-sensitive measurements of magnetic and altermagnetic materials. The aim is to identify symmetry-dependent optical signatures of magnetic order and develop polarization-resolved optical approaches for probing subtle symmetry breaking.",
    tags: ["Altermagnetism"],
    citation: "Related work: Phys. Rev. B (Letter) 111, L041115 (2025)",
    image: `${import.meta.env.BASE_URL}MM_CrSb.png`,
    alt: "Optical fingerprint of altermagnetism",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.L041115",
  },
];

const Research: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => (
  <div className="flex h-full w-full flex-col bg-[#f8fafc] text-slate-900">
    <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[680px]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600">Research</p>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          I study the optical response of correlated and layered quantum materials, with a particular focus on anisotropy, interlayer coupling, and electronic phase transitions. Using Mueller-matrix ellipsometry and broadband infrared spectroscopy at low temperatures, I investigate how charge dynamics and the dielectric response evolve across metal-insulator and charge-order transitions.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {THEMES.map((theme, index) => (
          <motion.div
            key={theme.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
          >
            <div className="h-px w-12 bg-cyan-500" />
            <h3 className="mt-4 text-base font-semibold leading-6 text-slate-900">{theme.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{theme.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Selected highlights
        </motion.h3>

        <div className="mt-10 space-y-16">
          {HIGHLIGHTS.map((highlight, index) => {
            const isImageOnRight = index % 2 === 1;
            return (
              <motion.article
                key={highlight.headline}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="grid gap-10 md:grid-cols-2 md:items-center"
              >
                <div className={`${isImageOnRight ? "md:order-2" : "md:order-1"}`}>
                  <img
                    src={highlight.image}
                    alt={highlight.alt}
                    className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-slate-100 object-cover shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  />
                </div>

                <div className={`${isImageOnRight ? "md:order-1" : "md:order-2"}`}>
                  <h4 className="text-2xl font-semibold tracking-tight text-slate-900">{highlight.headline}</h4>
                  <p className="mt-4 max-w-prose text-base leading-7 text-slate-600">{highlight.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {highlight.tags.map((tag) => (
                      <span key={tag} className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={highlight.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline"
                  >
                    <span>{highlight.citation}</span>
                    <ExternalLink size={14} />
                    {highlight.url && highlight.url !== "#" ? "" : ""}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center">
        <a href="#Publications" onClick={() => onNavigate?.("Publications")} className="inline-flex items-center gap-2 text-base font-medium text-slate-700 hover:text-cyan-600">
          See all publications <span aria-hidden="true">→</span>
        </a>
        <a
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.22)] transition-colors hover:bg-cyan-300"
        >
          Download CV
        </a>
      </div>
    </div>
    <SectionFooter sectionId="Research" onNavigate={onNavigate} />
  </div>
);

export default Research;
