import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionFooter from "./SectionFooter";

type Publication = {
  authors: string;
  title: string;
  link: string;
  journal: string;
  highlight?: string;
};

type Conference = {
  year: string;
  title: string;
  venue: string;
  contribution: "Oral presentation" | "Poster presentation" | "Participant";
};

const Publications: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"All" | "Articles">("All");

  const articles: Publication[] = [
    {
      authors: "<strong>A. Tiwari</strong>, M. Wenzel, R. M. Roy, C. Prange, B. Gompf, and M. Dressel",
      title: "Unconventional anisotropic charge dynamics in bulk 1T-TaS<sub>2</sub> induced by interlayer dimerization",
      link: "https://journals.aps.org/prl/abstract/10.1103/pwzn-m4d2",
      journal: "Phys. Rev. Lett. 137, 126501 (2026)",
      highlight: "Editor’s Suggestion",
    },
    {
      authors: "<strong>A. Tiwari</strong>, B. Gompf, and M. Dressel",
      title: "Interlayer coupling driven phase evolution in hyperbolic 1T-TaS<sub>2</sub> revealed by ellipsometry",
      link: "https://pubs.aip.org/aip/apl/article-abstract/128/6/063104/3379342/Interlayer-coupling-driven-phase-evolution-in?redirectedFrom=fulltext",
      journal: "Appl. Phys. Lett. 128, 063104 (2026)",
      highlight: "Editor’s Pick",
    },
    {
      authors: "<strong>A. Tiwari</strong>, B. Gompf, S. Priya, D. Schweitzer, R. Kato, K. Hiraki, and M. Dressel",
      title: "Nature of electronic phase transitions in substituted α-(BEDT-TTF)<sub>2</sub>I<sub>3</sub> studied by generalized ellipsometry",
      link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.195142",
      journal: "Phys. Rev. B 111, 195142 (2025)",
      highlight: "Editor’s Suggestion",
    },
    {
      authors: "<strong>A. Tiwari</strong>, B. Gompf, and M. Dressel",
      title: "Temperature-dependent generalized ellipsometry of the metal-insulator phase transition in low-symmetry charge-transfer salts",
      link: "https://pubs.aip.org/aip/apl/article-abstract/125/13/133101/3313692/Temperature-dependent-generalized-ellipsometry-of?redirectedFrom=fulltext",
      journal: "Appl. Phys. Lett. 125, 133101 (2024)",
      highlight: "Featured Article",
    },
    {
      authors: "B. Ewald, L. Siebigs, C. Zhang, J. Graf, <strong>A. Tiwari</strong>, et al.",
      title: "Ag<sub>(100–x)</sub>Au<sub>x</sub> Alloy Films: An Approach to Fixing Silver for Durable, Low-Loss Plasmonics",
      link: "https://pubs.acs.org/apchd5/article-abstract/12/11/6161/3760625/Ag100-xAux-Alloy-Films-An-Approach-to-Fixing?redirectedFrom=fulltext",
      journal: "ACS Photonics 12, 6161 (2025)",
    },
    {
      authors: "M. Wenzel, E. Uykur, S. Rößler, M. Schmidt, O. Janson, <strong>A. Tiwari</strong>, et al.",
      title: "Fermi-liquid behavior of non-altermagnetic RuO<sub>2</sub>",
      link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.L041115",
      journal: "Phys. Rev. B (Letter) 111, L041115 (2025)",
    },
    {
      authors: "A. K. Mandal, A. Jana, S. Chowdhury, <strong>A. Tiwari</strong>, et al.",
      title: "Mixed Mott–Hubbard and charge transfer nature of 4H–SrMnO<sub>3</sub> thin film on Si (100)",
      link: "https://iopscience.iop.org/article/10.1088/1361-648X/abe8a3/meta",
      journal: "J. Phys.: Condens. Matter 33, 235501 (2021)",
    },
    {
      authors: "R. M. Roy, B. Tai, M. Wenzel, <strong>A. Tiwari</strong>, M. Ozerov, C. Shekhar, C. Felser, A. V. Pronin, X. Feng, M. Dress",
      title: "Electronic correlations shape the low-energy optical response of the kagome antiferromagnets Mn<sub>3</sub>Sn and Mn<sub>3</sub>Ge",
      link: "https://doi.org/10.48550/arXiv.2609.18744",
      journal: "arXiv.2609.18744 (2026) (Under review)",
    },
    {
      authors: "U. Parekh, <strong>A. Tiwari</strong>, N. Didukh, et al.",
      title: "Natural hyperbolic dispersion in anisotropic bulk and nanoscaled copper chalcogenides",
      link: "https://scholar.google.com/scholar?q=Natural+hyperbolic+dispersion+copper+chalcogenides+Tiwari",
      journal: "Under review",
    },
  ];

  const thesis: Publication[] = [
    {
      authors: "<strong>A. Tiwari</strong>",
      title: "Anisotropic Charge Dynamics and Metal–Insulator Transition in Layered Materials",
      link: "https://elib.uni-stuttgart.de/items/6a1558c7-fb51-4ea8-88ee-f8278af53b8f",
      journal: "PhD thesis",
    },
  ];

  const conferences: Conference[] = [
    {
      year: "2026",
      title: "13th Workshop on Spectroscopic Ellipsometry",
      venue: "Genova, Italy",
      contribution: "Oral presentation",
    },
    {
      year: "2025",
      title: "DPG Spring Meeting of the Condensed Matter Section",
      venue: "Regensburg",
      contribution: "Poster presentation",
    },
    {
      year: "2024",
      title: "DPG Spring Meeting of the Condensed Matter Section",
      venue: "Berlin",
      contribution: "Oral presentation",
    },
    {
      year: "2023",
      title: "12th Workshop on Spectroscopic Ellipsometry",
      venue: "Prague, Czech Republic",
      contribution: "Poster presentation",
    },
    {
      year: "2023",
      title: "Workshop on Quantum-emergent molecular-layer electronics",
      venue: "University of Stuttgart",
      contribution: "Participant",
    },
    {
      year: "2022",
      title: "User Workshop on Fabrication and Characterization Facility for Nanotechnology",
      venue: "NRF, IIT Delhi",
      contribution: "Participant",
    },
  ];

  const filteredGroups = useMemo(() => {
    const matches = (item: { authors: string; title: string; journal: string }) => {
      const text = `${item.authors} ${item.title} ${item.journal}`.toLowerCase();
      return text.includes(query.toLowerCase());
    };

    return {
      articles: type === "All" ? articles.filter(matches) : articles.filter(matches),
    };
  }, [query, type]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-20 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 text-center text-3xl font-semibold text-gray-900">
          Publications
        </motion.h2>

        <div className="mb-10 grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="publication-search">Search publications</label>
          <input
            id="publication-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, author, or journal"
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
          />
          <label className="sr-only" htmlFor="publication-type">Filter publications by type</label>
          <select
            id="publication-type"
            value={type}
            onChange={(event) => setType(event.target.value as typeof type)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
          >
            <option>All</option>
            <option>Articles</option>
          </select>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <h3 className="mb-6 text-2xl font-medium text-gray-800">
            Articles <span className="text-sm font-normal text-slate-500">({filteredGroups.articles.length})</span>
          </h3>
          <ol className="list-decimal list-outside space-y-6 pl-6 text-slate-700">
            {filteredGroups.articles.map(({ authors, title, link, journal, highlight }, index) => (
              <li key={`${title}-${index}`}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-600"
                  dangerouslySetInnerHTML={{ __html: `${authors}, <span class='text-blue-700 italic'>"${title}"</span>` }}
                />
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <span className="italic">{journal}</span>
                  {highlight && <span className="rounded bg-slate-100 px-2 py-0.5 font-semibold text-slate-900">{highlight}</span>}
                </div>
              </li>
            ))}
          </ol>
          {filteredGroups.articles.length === 0 && <p className="mt-8 text-slate-500">No publications match your search.</p>}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <h3 className="mb-6 text-2xl font-medium text-gray-800">PhD thesis</h3>
          <ol className="list-decimal list-outside space-y-6 pl-6 text-slate-700">
            {thesis.map(({ authors, title, link, journal }, index) => (
              <li key={`${title}-${index}`}>
                <a href={link} target="_blank" rel="noreferrer" className="hover:text-sky-600" dangerouslySetInnerHTML={{ __html: `${authors}, <span class='text-blue-700 italic'>"${title}"</span>` }} />
                <p className="mt-1 text-sm font-medium text-slate-600">{journal}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className="mb-6 text-2xl font-medium text-gray-800">Conferences & workshops</h3>
          <ol className="list-decimal list-outside space-y-6 pl-6 text-slate-700">
            {conferences.map(({ year, title, venue, contribution }, index) => (
              <li key={`${title}-${year}-${index}`}>
                <div className="text-slate-900">
                  <span className="font-semibold">{title}</span>
                  {venue && <span className="text-slate-500"> — {venue}</span>}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                  <span>{year}</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-700">{contribution}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
      <SectionFooter sectionId="Publications" onNavigate={onNavigate} />
    </div>
  );
};

export default Publications;
