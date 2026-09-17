import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-sm text-slate-500 bg-white">
      © {new Date().getFullYear()} Achyut Tiwari — Achyut Tiwari
    </footer>
  );
};

export default Footer;
