import React from "react";
import { motion } from "framer-motion";
import SectionFooter from "@/components/SectionFooter";

const Publications: React.FC = () => {
  const articles = [
    {
      authors: "A. Trigilio, L. Sabbatini, A. Alexandrov, B. Alpat, G. Ambrosi, S. Argirò, <strong>Achyut Tiwari</strong>, ...",
      title: "Characterization of a permanent magnetic dipolar system for the FOOT experiment",
      link: "https://iopscience.iop.org/article/10.1088/1748-0221/20/09/T09010",
      journal: "Journal of Instrumentation 20 (09), T09010 (2025)",
    },
  ];

  const conference = [
    {
      authors: "<strong>Achyut Tiwari</strong> and Moumita Maiti",
      title: "Analysis of residual cross section from 11B-induced reaction on Zr",
      link: "https://inspirehep.net/literature/2877428",
      journal: "DAE Symp. Nucl. Phys. 68 (2025) 399–400",
    },
    {
      authors: "Suchorita Paul, S. Bhattacharyya et al.",
      title: "Observation of the rotational bands in 123Te",
      link: "https://inspirehep.net/literature/2877432",
      journal: "DAE Symp. Nucl. Phys. 68 (2025) 401–402",
    },
  ];

  return (
    <section id="Publications" className="min-h-screen flex flex-col pt-24 pb-6 bg-white">
      <div className="flex-1 w-full px-4 md:px-8 max-w-full">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Publications
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="mb-12">
          <h3 className="text-2xl font-medium mb-6 text-gray-800">Articles</h3>
          <ol className="list-decimal list-outside pl-6 space-y-6 text-slate-700">
            {articles.map(({ authors, title, link, journal }, index) => (
              <motion.li key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="ml-2">
                <a href={link} target="_blank" rel="noreferrer" className="hover:text-sky-600" dangerouslySetInnerHTML={{ __html: `${authors}, <span class='text-blue-700 italic'>"${title}"</span>` }} />
                <p className="text-sm text-slate-500 italic mt-1">{journal}</p>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-medium mb-6 text-gray-800">Conference Papers</h3>
          <ol className="list-decimal list-outside pl-6 space-y-6 text-slate-700">
            {conference.map(({ authors, title, link, journal }, index) => (
              <motion.li key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="ml-2">
                <a href={link} target="_blank" rel="noreferrer" className="hover:text-sky-600" dangerouslySetInnerHTML={{ __html: `${authors}, <span class='text-blue-700 italic'>"${title}"</span>` }} />
                <p className="text-sm text-slate-500 italic mt-1">{journal}</p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>

      <div className="mt-auto">
        <SectionFooter sectionId="Publications" />
      </div>
    </section>
  );
};

export default Publications;

