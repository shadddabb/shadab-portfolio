import { FiAward, FiExternalLink } from "react-icons/fi";
import useReveal from "../hooks/useReveal.js";
import { profile } from "../data/profile.js";
import "./Certifications.css";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section className="section section-alt" id="certifications">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">
            Continuous learning across cloud, AI and software testing
          </p>
        </div>

        <ul className="cert-list reveal" ref={ref}>
          {profile.certifications.map((cert) => (
            <li className="cert-item" key={cert.title}>
              <span className="cert-icon">
                <FiAward />
              </span>
              <div className="cert-info">
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    {cert.title} <FiExternalLink />
                  </a>
                ) : (
                  <h3>{cert.title}</h3>
                )}
                <p>{cert.issuer}</p>
              </div>
              <span className="cert-date">{cert.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
