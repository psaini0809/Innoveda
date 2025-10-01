import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    //{ name: "Certificates", href: "#certificates" },
  ];

  return (
    <nav className="bg-gradient-to-b from-blue-800 from-40% via-gray-900 via-70% to-black text-white w-full relative z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <div>
            <img
              src={"Innoveda.png"}
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
            />
          </div>
         <h1 className="font-extrabold text-2xl sm:text-3xl md:text-2xl tracking-tight text-white">
  Innoveda  
  <span className="font-extrabold text-2xl sm:text-3xl md:text-2xl tracking-tight text-gray-500"> Solutions</span>
</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group transform transition-transform duration-200 hover:scale-110"
            >
              <span className="hover:text-blue-400 transition-colors">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-6 h-6"
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
        <div className="md:hidden bg-gradient-to-b from-blue-800 from-40% via-gray-900 via-70% to-black flex flex-col space-y-2 px-4 pb-3 border-t border-gray-600 text-sm shadow-md">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-white transform transition-transform duration-200 hover:scale-110 hover:text-blue-400"
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
