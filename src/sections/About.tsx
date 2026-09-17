import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionFooter from "./SectionFooter";

const logo = (filename: string) => `${import.meta.env.BASE_URL}${encodeURI(filename)}`;

const About: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  const achievements = [
    { title: "CSIR-NET (JRF), 2022", description: "Qualified the national examination for Junior Research Fellowship and Assistant Professor eligibility.", logo: logo("CSIR.png") },
    { title: "Junior Research Fellowship, IIT Delhi", description: "Institute fellowship awarded by IIT Delhi for doctoral-track research.", logo: logo("IITD.png") },
    { title: "IIT-JAM Qualified, 2019", description: "Qualified the Joint Admission Test for M.Sc. for admission to IIT (ISM) Dhanbad.", logo: logo("JAM.jpeg") },
    { title: "INSPIRE Scholarship, 2016–2021", description: "Merit-based Department of Science & Technology scholarship held throughout BSc–MSc.", logo: logo("INSPIRE.png") },
    { title: "NGPE State Topper, 2019", description: "State top rank in Madhya Pradesh in the National Graduate Physics Examination.", logo: logo("NGPE.png") },
  ];

  const timeline = [
    { period: "Jun 2026 – Present", title: "Postdoctoral Researcher", place: "1. Physikalisches Institut, Universität Stuttgart, Germany", logo: logo("UniStuttgart.jpeg") },
    { period: "2022 – May 2026", title: "Doctoral Researcher · PhD in Physics", place: "1. Physikalisches Institut, Universität Stuttgart · Advisor: Prof. Dr. Martin Dressel", logo: logo("UniStuttgart.jpeg") },
    { period: "2021 – 2022", title: "Junior Research Fellow", place: "IIT Delhi, India", logo: logo("IITD.png") },
    { period: "2019 – 2021", title: "MSc in Physics", place: "IIT (ISM) Dhanbad, India", logo: logo("IITISM.jpeg") },
    { period: "2018 – 2019", title: "Project Intern", place: "UGC-DAE Consortium for Scientific Research (CSR), Indore, India", logo: logo("DAE.png") },
    { period: "2016 – 2019", title: "BSc in Physics", place: "Devi Ahilya University, India", logo: null },
  ];

  const skillGroups = [
    {
      title: "Optical spectroscopy",
      items: ["Polarization-resolved spectroscopy", "Broadband FTIR", "Mueller-matrix ellipsometry", "Effective medium theory"],
    },
    {
      title: "Materials",
      items: ["Van der Waals & correlated materials", "Charge-density-wave systems", "Organic conductors", "Transition-metal oxides", "Thin films"],
    },
    {
      title: "Tools",
      items: ["MATLAB", "Python", "RefFIT", "OriginPro", "LaTeX", "Inkscape", "Blender"],
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#f7f8f5]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-16 px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">The person behind the work</p>
            <h2 className="mt-3 max-w-[38rem] text-4xl font-bold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.04]">An experimental physicist studying how quantum materials interacts with light.</h2>
            <p className="mt-6 max-w-[38rem] text-base leading-8 text-slate-700 sm:text-lg">
              I am an experimental condensed-matter physicist. I use polarization-resolved infrared and optical spectroscopy, together with Mueller-matrix ellipsometry, to study how correlated and layered quantum materials respond to light at low temperatures. Combining careful cryogenic measurements with quantitative modeling, I follow how the electrons reorganize across metal–insulator, charge-order, and magnetic transitions, and what that reveals about anisotropic charge dynamics and interlayer coupling.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}about.JPG`}
              alt="Achyut Tiwari working at an optical spectroscopy and cryostat setup"
              className="aspect-[4/3] w-full max-w-md rounded-2xl border border-slate-200 bg-slate-100 object-cover shadow-lg"
            />
          </div>
        </motion.div>

        <div>
          <h3 className="mb-8 text-3xl font-bold">Education &amp; experience</h3>
          <div className="relative ml-2 border-l-2 border-cyan-200 pl-7">
            {timeline.map((item, index) => (
              <motion.div key={`${item.title}-${index}`} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="relative mb-8 flex items-start gap-4 last:mb-0">
                <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-[#f7f8f5] bg-cyan-500" />
                <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                  {item.logo ? (
                    <img src={item.logo} alt="" className="h-full w-full object-contain p-1" />
                  ) : (
                    <GraduationCap size={20} strokeWidth={2} className="text-cyan-700" />
                  )}
                </span>
                <div>
                  <p className="text-sm font-semibold text-cyan-700">{item.period}</p>
                  <h4 className="mt-1 text-lg font-semibold">{item.title}</h4>
                  <p className="mt-1 leading-6 text-slate-600">{item.place}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-3xl font-bold">Selected qualifications</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                  <img src={item.logo} alt="" className="h-full w-full object-contain p-1" />
                </span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-3xl font-bold">Skills &amp; expertise</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-cyan-700">{group.title}</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionFooter sectionId="About" onNavigate={onNavigate} />
    </div>
  );
};

export default About;
