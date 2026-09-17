import React from "react";

type Props = {
  sectionId?: string;
  small?: boolean;
};

const SectionFooter: React.FC<Props> = ({ sectionId = "", small = false }) => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const container = document.getElementById("site-scroll-container");
    if (!el) return;
    const offset = 96;
    if (container) {
      const top = (el as HTMLElement).offsetTop - offset;
      container.scrollTo({ top, behavior: "smooth" });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <div className={`w-full bg-white border-t border-slate-200 ${small ? "py-3" : "py-4"}`}>
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between text-sm text-slate-600">
        <div>© {year} Achyut Tiwari — {sectionId || "Portfolio"}</div>

        <div className="flex items-center gap-4">
          <button onClick={() => scrollTo(sectionId || "Home")} className="hover:text-sky-600">
            Top of section
          </button>
          <button onClick={() => scrollTo("Home")} className="hover:text-sky-600">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFooter;
