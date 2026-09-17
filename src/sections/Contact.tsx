import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, File } from "lucide-react";
// ResearchGate icon uses custom SVG below
import SectionFooter from "./SectionFooter";

const Contact: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || "Website enquiry"));
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
    window.location.href = `mailto:achyut.tiwari@pi1.uni-stuttgart.de?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mx-auto w-full max-w-[1200px] flex-1 space-y-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-semibold text-gray-900">
          Contact Me
        </motion.h2>

        <p className="text-lg text-slate-600">
          I’m open to collaboration and discussion in experimental condensed-matter physics.
        </p>

          {/* layout row: map on left, form on right */}
          <div className="w-full flex flex-col md:flex-row items-start gap-6 mb-6">
            {/* Google map (INFN-Torino location) */}
            <div className="w-full md:w-2/5 h-64">
            <iframe
              title="INFN Torino physics department"
              className="w-full h-full rounded-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21442.31545099293!2d7.6415779!3d45.0338532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d453ba6a8a9%3A0x6fc4e4eab51bce26!2sIstituto%20Nazionale%20di%20Fisica%20Nucleare%20-%20Sezione%20di%20Torino!5e1!3m2!1sen!2sit!4v1773187768623!5m2!1sen!2sit"
              allowFullScreen
              loading="lazy"
            />
          </div>

            {/* contact form template */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-3/5 space-y-4 text-left"
            >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                placeholder="Brief summary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                placeholder="Write your message here..."
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Send Message
              </button>
            </div>
            </form>
          </div>

        <div className="flex justify-center gap-6 text-slate-700">
          <a href="mailto:achyut.tiwari@pi1.uni-stuttgart.de" className="hover:text-sky-600"><Mail size={28} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-sky-600"><Linkedin size={28} /></a>
          <a href="https://scholar.google.com/citations?user=ps7Jb1MAAAAJ&hl=en" target="_blank" rel="noreferrer" className="hover:text-sky-600">
            {/* Google Scholar logo */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5H9l3-3 3 3h-2v5h-2zm1-12.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
            </svg>
          </a>
          <a href="tel:+4915143400304" className="hover:text-sky-600 flex items-center"><File size={28} /></a>
        </div>
      </div>
      <SectionFooter sectionId="Contact" onNavigate={onNavigate} />
    </div>
  );
};

export default Contact;
