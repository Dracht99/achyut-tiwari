import React from "react";
import { motion } from "framer-motion";
import SectionFooter from "@/components/SectionFooter";

const Research: React.FC = () => {
  return (
    <section id="Research" className="min-h-screen flex flex-col pt-24 pb-6 bg-slate-50">
      <div className="flex-1 w-full px-4 md:px-8 max-w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-8 text-center text-gray-900"
        >
          Research&nbsp;Interests
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-8 text-lg mb-12">
          <motion.div
            className="p-6 bg-yellow-50 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <p className="text-sm text-slate-700">
                I have a strong and growing interest in the medical applications of nuclear physics, particularly in advancing
                particle therapy and enhancing space radiation protection. My current work with the FOOT (FragmentatiOn Of
                Target) collaboration involves measuring the cross sections of secondary fragments produced in ion interactions
                with tissue-equivalent targets, crucial data for improving treatment planning in hadron therapy and for assessing
                radiation risks in space missions. This interest is strongly supported by my previous research on fusion dynamics
                and nuclear structure, where I developed a deep understanding of nuclear reactions and detector technologies.
                This background now enables me to effectively contribute to the precise characterization of nuclear processes
                essential for medical and space-related applications.
              </p>
              <img src="application.png" alt="Research Area Illustration" className="rounded-lg shadow transform transition-transform duration-300 hover:scale-105" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-md mb-10"
        >
          <h3 className="text-xl font-bold text-indigo-700 mb-1">@INFN-Torino</h3>
          <p className="text-sm text-slate-600 mb-4">
            I am currently working with the INFN-Torino group as part of the FOOT Collaboration, focusing on the calibration and response characterization of the BGO calorimeter, one of the key detectors in the experiment. I also contribute to the data analysis for differential cross-section measurements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="calo_imag.jpg" alt="Calorimeter Image 1" className="rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer" />
            <div>
              <img src="response_calo.png" alt="Calorimeter Image 2" className="rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer" />
              <p className="text-xs text-slate-500 italic mt-2">
                <a href="https://iopscience.iop.org/article/10.1088/1748-0221/20/03/P03021" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">
                  DOI: 10.1088/1748-0221/20/03/P03021
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-xl shadow-md mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }}>
          <h3 className="text-xl font-bold text-indigo-700 mb-1">@IIT-Roorkee</h3>
          <p className="text-sm text-slate-600 mb-4">
            Investigated the fusion dynamics of <em>11B + Zr</em> systems using off-line gamma measurement techniques to measure cross sections of the residual radionuclides.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-center">
              <img src="exp_setup.png" alt="Image 1" className="rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer max-h-72 object-contain" />
            </div>
            <div className="flex flex-col items-center">
              <img src="oral.jpg" alt="Image 2" className="rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer max-h-72 object-contain" />
              <p className="text-xs text-slate-500 italic mt-2">
                <a href="https://inspirehep.net/literature/2877428" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">
                  DAE Symp.Nucl.Phys. 68 (2025) 399-400
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-xl shadow-md mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }}>
          <h3 className="text-xl font-bold text-indigo-700 mb-1">@Visva-Bharati</h3>
          <p className="text-sm text-slate-600 mb-4">
            Conducted spectroscopy and lifetime measurements at Visva-Bharati University to explore the structure of <em>66Zn</em> and <em>66Ga</em> using the INGA detector array.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-center">
              <img src="achyut_research_archive.jpg" alt="Image 1" className="rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer max-h-72 object-contain" />
            </div>
            <div className="flex flex-col items-center">
              <img src="69Ge.png" alt="Image 2" className="rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer max-h-72 object-contain" />
              <p className="text-xs text-slate-500 italic mt-2">
                <a href="https://inspirehep.net/literature/2764532" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">
                  DAE Symp.Nucl.Phys. 67 (2024) 99-100
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-auto">
        <SectionFooter sectionId="Research" />
      </div>
    </section>
  );
};

export default Research;
