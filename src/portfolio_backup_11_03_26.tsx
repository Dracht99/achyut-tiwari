import { useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, FileText, Github, File, ArrowRigh, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { link, title } from "framer-motion/client";
import GitHubShowcase from "@/components/GitHubShowcase";
import OverlayAnimation from "@/components/OverlayAnimation";


export default function Portfolio() {
  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 96;
      sections.forEach((sec) => {
        const link = document.querySelector(`a[href="#${sec.id}"]`);
        if (!link) return;
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          link.classList.add("text-sky-500");
        } else {
          link.classList.remove("text-sky-500");
        }
      });
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
      <>
        <OverlayAnimation logoSrc="/logo.png" fromColor="#071029" viaColor="#0ea5e9" toColor="#061021" visibleMs={1800} dismissible={true} />
    <main className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur bg-gray-100 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <div>
            <span className="text-xl font-bold text-black block leading-tight">Achyut Tiwari</span>
            <span className="text-sm text-slate-700">Research Fellow</span>
          </div>
          <ul className="flex gap-6 text-sm font-medium">
            {["Home", "About", "Research", "Publications", "Gallery", "Contact"].map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-sky-500">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
<section
  id="Home"
  className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10 px-4"
  >
    {/* Profile Image */}
    <img
      src="pic_lab.JPG"
      alt="Achyut Tiwari"
      className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
    />

    {/* Text + Buttons */}
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
        Achyut Tiwari
      </h1>
      <p className="mt-2 text-sm md:text-base text-gray-300 font-light max-w-md">
        Research Fellow, <strong>FOOT-Collaboration</strong>, INFN-Torino, Italy – 10125
      </p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex justify-center md:justify-start gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Button asChild className="px-6 py-3 text-lg  bg-black text-white hover:bg-gray-800" >
          <a
            href="Achyut_Tiwari_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
             Resume
          </a>
        </Button>
        <Button asChild className="px-6 py-3 text-lg bg-red-600 text-white hover:bg-red-700" >
          <a
            href="https://web.infn.it/foot/en/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Group
          </a>
        </Button>
      </motion.div>
    </div>
  </motion.div>
</section>

<GitHubShowcase username="achyut-tiwari" perPage={9} pinned={["research"]} />

{/* About Section */}
<section id="About" className="py-24 bg-white w-full">
  <div className="w-full px-0 flex flex-col gap-16 text-gray-900">

    {/* About Text & Photo */}
    <div className="flex flex-col md:flex-row items-center gap-10 px-4">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        src="pic_lab.JPG"
        alt="Achyut portrait"
        className="w-48 h-48 rounded-full object-cover shadow-lg"
      />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-lg"
      >
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I'm passionate about applying nuclear physics to medical challenges, particularly in radiation therapy and space radioprotection. At INFN Torino, I contribute to the FOOT experiment, focusing on BGO calorimeter response and neutron detection technics crucial for understanding secondary fragments from therapeutic beams.
        </p>
        <p>
          Previously, I worked on gamma-ray spectroscopy and fusion–evaporation studies, gaining hands-on experience with gamma radiation and detector systems.
        </p>
      </motion.div>
    </div>

    {/* Scholastic Achievements */}
    <div className="px-4">
      <h3 className="text-3xl font-bold mb-6">Scholastic Achievements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'MAECI Grande (2024)', description: "Grant for the project 'Measuring Oxygen Fragmentation at GSI For Improved Ion Therapy Strategies'", logo: 'MAECI.png' },
          { title: 'MP-SET (2024)', description: "Qualified Madhya Pradesh State Eligibility Test, qualification for Assit. Professor exam. ", logo: 'MPSET.png' },
          { title: 'M-SET (2023)', description: "Qualified Maharashtra State Eligibility Test, qualification for Assit. Professor exam. ", logo:'MHSET.jpeg' },
          { title: 'GATE (2022 & 2023)', description: "Qualified GATE conducted by IIT. ", logo: 'gate-logo.jpg' },
          { title: 'IIT-JAM (2019)', description: "Qualified the Joint Admission Test for Master of Science. ", logo: 'JAM.jpeg'},
          { title: 'NGPE (2019)', description: "Among the 1% state topper in the National Graduate Physics Examination conduct by IAPT. ", logo: 'NGPE.png'},
          { title: 'NMMS (2012)', description: "National Means-cum-Merit Scholarship, recognition of outstanding academic performance in secondary school.", logo: 'NMMS.jpeg'},
        ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl p-4 shadow flex items-start gap-4">
              <img src={item.logo} alt={`${item.title} logo`} className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
        ))}
      </div>
    </div>

    {/* Education */}
    <div className="px-4">
      <h3 className="text-3xl font-bold mb-6">Education</h3>
      <div className="space-y-6">
        {[
          { period: "Apr-2025 – Present", degree: "Post Graduate Grant", place: "INFN-Torino, Italy" },
          { period: "Jan-2024 – Mar-2025", degree: "Junior Research Fellow", place: "IIT-Roorkee, India"},
          { period: "Sep-2022 – Jan-2024", degree: "Junior Research Fellow", place: "Visva-Bharati,Santiniketan, India"},
          { period: "2019 – 2021", degree: "MSc (Physics)", place: "Indian Institte of Engineering Science and Technology, Shibpur, WB, India" },
          { period: "2016 – 2019", degree: "BSc (PCM)", place: "Govt. Nirbhaya Singh Patel Science Collage, Indore (affiliated to DAVV University, Indore)" },
        ].map((edu, i) => (
          <div key={i} className="border-l-4 border-gray-300 pl-4">
            <p className="text-sm text-gray-500">{edu.period}</p>
            <h4 className="font-semibold text-xl">{edu.degree}</h4>
            <p>{edu.place}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Experience */}
    <div className="px-4">
      <h3 className="text-3xl font-bold mb-6">Experience</h3>
      <div className="space-y-6">
        {[
          {
            period: "Jan-2024 – Mar-2025", title: "Junior Research Fellow (Jan/2024 - Mar/2025)",
            detail: "Study of the fusion reaction dynamics using 11B projectile on Zr target. Supervisor: Dr. Moumita Maiti, IIT-Roorkee, UK"
          },
          {
            period: "Sep-2022 – Jan-2024", title: "Junior Research Fellow (Sep/2022 - Jan/2024)",
            detail: "Nuclear structure study at A~70 mass region using gamma-ray spectroscopy, Supervisor: Dr. Budhhadev Mukherjee, Visva-Bharati, Santiniketan, WB"
          },
          {
            period: "Jan-2020 – Mar-2021", title: "Master Thesis",
            detail: "Nuclear structure study using Shell Model Calculation, Supervisor: Dr. Sukhendu Sekhar Sarkar, IIEST-Shibpur, WB"
          },
        ].map((exp, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-xl shadow">
            <h4 className="font-semibold text-xl mb-1">{exp.title}</h4>
            <p>{exp.detail}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Skills & Expertise */}
    <div className="px-4">
      <h3 className="text-3xl font-bold mb-6">Skills & Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Instruments:</strong> INGA (HPGe detector array), SCA, MCA, </li>
        </ul>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Software:</strong> NUSHELLX, KSHELL</li>
          <li><strong>Analysis Tools:</strong> CERN-ROOT, Python, GENIEE-2K, RADWARE, INGASHORT</li>
        </ul>
      </div>
    </div>

  </div>
</section>

{/* Research Section */}
<section id="Research" className="py-24 bg-slate-50">
  <div className="max-w-5xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-semibold mb-8 text-center text-gray-900"
    >
      Research&nbsp;Interests
    </motion.h2>

    {/* Research Areas */}
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
      <img
        src="application.png"
        alt="Research Area Illustration"
        className="rounded-lg shadow transform transition-transform duration-300 hover:scale-105"
      />
    </div>
  </motion.div>
</div>


    {/* Current Work */}
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

    

    {/* Previous Work */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-md mb-10"
    >
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


    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-md mb-10"
    >
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
</section>


{/* Publications Section */}
<section id="Publications" className="py-24 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-semibold mb-8 text-center text-gray-900"
    >
      Publications
    </motion.h2>

    {/* Presentation Highlights */}
   

    {/* Articles Section */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-medium mb-6 text-gray-800">Articles</h3>

      <ol className="list-decimal list-outside pl-6 space-y-6 text-slate-700">
        {[
          {
            authors:
              "A. Trigilio, L. Sabbatini, A. Alexandrov, B. Alpat, G. Ambrosi, S. Argirò, <strong>Achyut Tiwari</strong>, ...",
            title:
              "Characterization of a permanent magnetic dipolar system for the FOOT experiment",
            link: "https://iopscience.iop.org/article/10.1088/1748-0221/20/09/T09010",
            journal: "Journal of Instrumentation 20 (09), T09010 (2025)",
          },
        ].map(({ authors, title, link, journal }, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="ml-2"
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600"
              dangerouslySetInnerHTML={{
                __html: `${authors}, <span class='text-blue-700 italic'>"${title}"</span>`,
              }}
            />
            <p className="text-sm text-slate-500 italic mt-1">{journal}</p>
          </motion.li>
        ))}
      </ol>
    </motion.div>

    {/* Conference Papers Section */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-medium mb-6 text-gray-800">
        Conference Papers
      </h3>

      <ol className="list-decimal list-outside pl-6 space-y-6 text-slate-700">
        {[
          {
            authors: "<strong>Achyut Tiwari</strong> and Moumita Maiti",
            title:
              "Analysis of residual cross section from 11B-induced reaction on Zr",
            link: "https://inspirehep.net/literature/2877428",
            journal: "DAE Symp. Nucl. Phys. 68 (2025) 399–400",
          },
          {
            authors: "Suchorita Paul, S. Bhattacharyya et al.",
            title: "Observation of the rotational bands in 123Te",
            link: "https://inspirehep.net/literature/2877432",
            journal: "DAE Symp. Nucl. Phys. 68 (2025) 401–402",
          },
          {
            authors: "<strong>Achyut Tiwari</strong> et al.",
            title: "In-beam γ-ray spectroscopy of 69Ge",
            link: "https://inspirehep.net/files/f4641f4fd6aeb3f8e24a72537413a0c5",
            journal: "DAE Symp. Nucl. Phys. 67 (2024) 99–100",
          },
          {
            authors: "Sramana Biswas, <strong>Achyut Tiwari</strong> et al.",
            title:
              "Yield distribution of fusion evaporation reaction 28Si + 48Ti",
            link: "https://inspirehep.net/files/7ea5acd798e644d724b427da46ae0ead",
            journal: "DAE Symp. Nucl. Phys. 67 (2024) 201–202",
          },
          {
            authors: "A. Basak, <strong>Achyut Tiwari</strong> et al.",
            title: "Coexisting Features in 68Zn",
            link: "https://inspirehep.net/files/c187de064ddf8cd540b7c80dae7f613e",
            journal: "DAE Symp. Nucl. Phys. 66 (2023) 121–122",
          },
          {
            authors: "A.K. Mandal, <strong>Achyut Tiwari</strong> et al.",
            title: "Low-lying level sequences in 76As",
            link: "https://inspirehep.net/files/c20ac04331f57b46e0c9ccd001f724b2",
            journal: "DAE Symp. Nucl. Phys. 65 (2022) 77–78",
          },
        ].map(({ authors, title, link, journal }, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="ml-2"
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600"
              dangerouslySetInnerHTML={{
                __html: `${authors}, <span class='text-blue-700 italic'>"${title}"</span>`,
              }}
            />
            <p className="text-sm text-slate-500 italic mt-1">{journal}</p>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  </div>
</section>


{/* Gallery Section */}
<section id="Gallery" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-semibold mb-8 text-center text-gray-900"
    >
      Gallery
    </motion.h2>

    <p className="text-center text-sm text-slate-600 mb-10">
      Glimpse of conferences, meetings, and experimental campaigns.
    </p>

    {/* Accordion grouped by event */}
    <div className="space-y-8">
      {/* --- Conferences --- */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Conferences</h3>

        {/* DAE-SNP 2025 (Oral Presentation) */}
        <details className="group border border-slate-200 rounded-xl">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-700 flex justify-between items-center">
            <span>DAE-SNP 2024 (IIT-Roorkee) — Oral Presentation</span>
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  id: "dae2025-oral-1",
                  src: "oral.jpg",
                  alt: "Oral presentation DAE-SNP 2025 photo 1",
                  caption: "Presenting at DAE-SNP 2025, IIT-Roorkee",
                },
                {
                  id: "dae2025-oral-2",
                  src: "DAE_24.jpg",
                  alt: "Oral presentation DAE-SNP 2025 photo 2",
                  caption: "DAE-SNP 2025",
                },
                 {
                  id: "dae2025-oral-4",
                  src: "DAE_24_vol.jpg",
                  alt: "Oral presentation DAE-SNP 2025 photo 4",
                  caption: "Registration kit distribution (volunteering) DAE-SNP 2025",
                },
                {
                  id: "dae2025-oral-3",
                  src: "DAE_24_g.jpg",
                  alt: "Oral presentation DAE-SNP 2025 photo 3",
                  caption: "Group Photo at DAE-SNP 2025",
                },
              ].map((img) => (
                <motion.div
                  key={img.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover rounded-xl shadow-sm transition-transform duration-200 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md">
                    {img.caption}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </details>

        {/* DAE-SNP 2024 (Poster Presentation) */}
        <details className="group border border-slate-200 rounded-xl">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-700 flex justify-between items-center">
            <span>DAE-SNP 2023 (IIT-Indore) — Poster Presentation </span>
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  id: "dae2024-poster-1",
                  src: "DAE_23.jpg",
                  alt: "Poster presentation DAE-SNP 2024",
                  caption: "Poster session, IIT Indore",
                },
              ].map((img) => (
                <motion.div
                  key={img.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover rounded-xl shadow-sm transition-transform duration-200 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md">
                    {img.caption}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </details>
      </div>

      {/* --- Meetings --- */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Meetings</h3>
        <details className="group border border-slate-200 rounded-xl">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-700 flex justify-between items-center">
            <span>FOOT Collaboration Meeting — May 2025</span>
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  id: "foot-meeting-1",
                  src: "FOOT_28_25.jpg",
                  alt: "FOOT collaboration meeting May 2025",
                  caption: "FOOT collaboration meeting, May 2025",
                },
                {
                  id: "foot-meeting-2",
                  src: "FOOT_28_25_1.jpg",
                  alt: "FOOT collaboration meeting May 2025 2",
                  caption: "Riccione, Italy",
                },
              ].map((img) => (
                <motion.div
                  key={img.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover rounded-xl shadow-sm transition-transform duration-200 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md">
                    {img.caption}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </details>
      </div>

      {/* --- Experiments --- */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Experiments</h3>
        <details className="group border border-slate-200 rounded-xl">
          <summary className="cursor-pointer px-6 py-4 font-medium text-gray-700 flex justify-between items-center">
            <span>INGA Campaign — VECC Kolkata</span>
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  id: "inga-vecc-1",
                  src: "achyut_research_archive.jpg",
                  alt: "INGA campaign VECC Kolkata",
                  caption: "During INGA campaign, VECC Kolkata",
                },
                {
                  id: "inga-vecc-2",
                  src: "vecc_2.jpg",
                  alt: "INGA campaign VECC Kolkata 1",
                  caption: "During INGA campaign, VECC Kolkata",
                },
              ].map((img) => (
                <motion.div
                  key={img.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover rounded-xl shadow-sm transition-transform duration-200 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md">
                    {img.caption}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</section>




 
       {/* Contact Section */}
      <section id="Contact" className="py-24 bg-slate-50">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-900"
          >
            Contact&nbsp;Me
          </motion.h2>
          <p className="text-lg text-slate-600">
            I’m open to collaboration and discussion – feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 text-slate-700">
            <a href="mailto:achyut.tiwari@pi1.uni-stuttgart.de" className="hover:text-sky-600">
              <Mail size={28} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-sky-600">
              <Linkedin size={28} />
            </a>
            <a href="https://scholar.google.com/scholar?q=Achyut+Tiwari+ellipsometry" target="_blank" rel="noreferrer" className="hover:text-sky-600">
              <Github size={28} />
            </a>
            <a href="Achyut_Tiwari_CV.pdf" target="_blank" rel="noreferrer" className="hover:text-sky-600 flex items-center">
              <File size={28} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-slate-500 bg-white">
        © {new Date().getFullYear()} Achyut Tiwari – Achyut Tiwari
      </footer>
    </main>
    </>
  );
}
