import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../data/profile.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <p className="hero-hello">Hello, I&apos;m</p>
        <h1 className="hero-name">{profile.name}</h1>
        <h2 className="hero-role">{profile.role}</h2>
        <p className="hero-tagline">{profile.tagline}</p>

        <ul className="hero-meta">
          <li>
            <FiMapPin /> {profile.location}
          </li>
          <li>
            <FiMail /> {profile.email}
          </li>
          <li>
            <FiPhone /> {profile.phone}
          </li>
        </ul>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Download Résumé
          </a>
        </div>

        <div className="hero-socials">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
