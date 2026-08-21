import { FiGithub, FiExternalLink } from "react-icons/fi";
import useReveal from "../hooks/useReveal.js";
import { profile } from "../data/profile.js";
import "./Projects.css";

export default function Projects() {
  const ref = useReveal();

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of development and quality-assurance work
          </p>
        </div>

        <div className="projects-grid reveal" ref={ref}>
          {profile.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <header className="project-head">
                <h3>{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </header>

              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point.slice(0, 24)}>{point}</li>
                ))}
              </ul>

              <footer className="project-foot">
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`${project.title} repository`}
                >
                  <FiGithub /> Code
                </a>
              </footer>
            </article>
          ))}
        </div>

        <p className="projects-more">
          More on my{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <FiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
}
