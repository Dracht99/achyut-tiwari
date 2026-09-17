import { Mail, Linkedin, Github, File } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ucn12pn", "template_xw53ylp", form.current!, "achyut.tiwari@pi1.uni-stuttgart.de")
      .then(() => alert("Message sent successfully!"))
      .catch((err) => alert("Failed to send message: " + err.text));
    e.target.reset();
  };

  return (
    <section id="Contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Info + Google Map */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Contact</h2>
          <div>
            <p className="font-bold">Phone</p>
            <p>+91 882 770 0339</p>
          </div>
          <div>
            <p className="font-bold">Email</p>
            <p>21chph03@uohyd.ac.in</p>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0177123792677!2d78.3350843148392!3d17.440081688042446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9394d3703e01%3A0x58c2b30c95c7cbe0!2sSchool%20of%20Chemistry%2C%20University%20of%20Hyderabad!5e0!3m2!1sen!2sin!4v1699883184582!5m2!1sen!2sin"
              width="100%"
              height="300"
              loading="lazy"
              allowFullScreen
              title="Google Map"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="first_name" placeholder="First Name" className="border p-2 rounded w-full" required />
              <input type="text" name="last_name" placeholder="Last Name" className="border p-2 rounded w-full" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email *" className="border p-2 rounded w-full" required />
              <input type="text" name="subject" placeholder="Subject" className="border p-2 rounded w-full" />
            </div>
            <textarea name="message" placeholder="Message" rows={5} className="border p-2 rounded w-full" required />
            <button type="submit" className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-600">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Social Footer */}
      <div className="mt-12 text-center space-y-4">
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
          <a href="mailto:achyut.tiwari@pi1.uni-stuttgart.de" className="hover:text-sky-600 flex items-center">
            <File size={28} />
          </a>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Achyut Tiwari</p>
      </div>
    </section>
  );
}
