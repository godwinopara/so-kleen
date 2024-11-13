import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MouseEvent, useEffect, useState } from "react";

interface NavLink {
  text: string;
  href: string;
}

const navlinks: NavLink[] = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Why", href: "/why-choose-us" },
  { text: "Janitorial Cleaning", href: "/janitorial" },
  { text: "Carpet & Upholstery", href: "/carpet-upholstery" },
  { text: "Marble Restoration", href: "/marble" },
  { text: "Other Services", href: "/other-services" },
];

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = (e: MouseEvent<HTMLButtonElement>) => {
    setShowNav(() => !showNav);
  };

  useEffect(() => {
    if (showNav) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [showNav]);

  return (
    <nav className="flex items-center justify-between px-5 py-3 lg:hidden">
      <Link to="/" className="block w-[80px]">
        <img src={logo} alt="logo" />
      </Link>
      <ul
        className={`${
          showNav ? "fixed" : "hidden"
        } top-[50px] left-0 z-[300] w-full px-5 pt-6 pb-10 grid gap-y-3 bg-white`}
      >
        {navlinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm uppercase hover:text-blue-500 transition-colors duration-200"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={handleToggleNav} className="text-2xl">
        <RxHamburgerMenu />
      </button>
    </nav>
  );
};

export default MobileNav;
