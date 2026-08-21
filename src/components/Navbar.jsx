import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { profile } from "../data/profile.js";
import "./Navbar.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo" onClick={() => setOpen(false)}>
          {profile.initials}
          <span>.dev</span>
        </a>

        <nav className={`navbar-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary navbar-resume"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <FiFileText /> Résumé
          </a>
        </nav>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
        </button>
      </div>
    </header>
  );
}
