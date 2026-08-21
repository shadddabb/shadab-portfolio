import { FiBookOpen } from "react-icons/fi";
import useReveal from "../hooks/useReveal.js";
import { profile } from "../data/profile.js";
import "./Education.css";

export default function Education() {
  const ref = useReveal();

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background</p>
        </div>

        <div className="timeline reveal" ref={ref}>
          {profile.education.map((edu) => (
            <div className="timeline-item" key={edu.institution}>
              <span className="timeline-icon">
                <FiBookOpen />
              </span>
              <div className="timeline-card">
                <div className="timeline-head">
                  <h3>{edu.institution}</h3>
                  <span className="timeline-period">{edu.period}</span>
                </div>
                <p className="timeline-degree">{edu.degree}</p>
                <div className="timeline-meta">
                  <span>{edu.score}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
