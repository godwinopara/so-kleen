// src/Navbar.tsx

import React from "react";

interface NavLink {
  text: string;
  href: string;
}

const navlinks: NavLink[] = [
  { text: "Home", href: "#" },
  { text: "About", href: "#about" },
  { text: "Why", href: "#why" },
  { text: "Janitorial Cleaning", href: "#our-services" },
  { text: "Carpet & Upholstery", href: "#carpet" },
  { text: "Marble Restoration", href: "#marble" },
  { text: "Other Services", href: "#other-services" },
  { text: "Our Clients", href: "#our-clients" },
  { text: "Pest Control", href: "#pest-control" },
  { text: "Contact Us", href: "#contact" },
];

const Nav: React.FC = () => {
  return (
    <nav className="hidden lg:block bg-red-600 px-6 py-3 sticky top-0 left-0 w-full z-10 ">
      <div>
        <div className="container mx-auto px-4 py-2">
          <ul className="flex justify-center space-x-5">
            {navlinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-sm uppercase hover:text-blue-500 transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
