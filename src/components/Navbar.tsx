function Navbar() {
  const navlinks = [
    { text: "Home", href: "#home" },
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
  return (
    <header>
      <ul className="flex justify-between items-center px-6 py-5 bg-red-600 sticky top-0 left-0">
        {navlinks.map((navlink) => {
          return (
            <li>
              <a className="text-white uppercase" href={navlink.href}>
                {navlink.text}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;
