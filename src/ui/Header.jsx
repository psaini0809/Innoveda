import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Certificates", href: "#certificates" },
  ];

  return (
    <nav className="bg-white text-black w-full relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <img
            src={"Innoveda.png"}
            alt="Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 text-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white flex flex-col space-y-1 px-4 pb-2 border-t border-gray-200 text-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-1 text-black hover:text-purple-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
