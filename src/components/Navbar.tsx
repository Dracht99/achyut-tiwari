import React from "react";

const NAV_ITEMS = ["Home", "About", "Research", "Publications", "Gallery", "Contact"] as const;
type SectionId = (typeof NAV_ITEMS)[number];

interface NavbarProps {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ active, onNavigate }) => {
  const handleClick = (id: SectionId) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full backdrop-blur bg-white/80 z-50 shadow-sm"
      style={{ height: "var(--nav-height)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full px-4">
        <div>
          <span className="text-xl font-bold text-black block leading-tight">Achyut Tiwari</span>
          <span className="text-sm text-slate-700">Research Fellow</span>
        </div>

        <ul className="flex gap-6 text-sm font-medium">
          {NAV_ITEMS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleClick(id)}
                className={`transition-colors cursor-pointer ${
                  active === id ? "text-sky-500 font-semibold" : "text-slate-700 hover:text-sky-500"
                }`}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
