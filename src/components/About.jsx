import useReveal from "../hooks/useReveal.js";
import { profile } from "../data/profile.js";
import "./About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content reveal" ref={ref}>
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
