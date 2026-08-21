import useReveal from "../hooks/useReveal.js";
import { profile } from "../data/profile.js";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills-grid reveal" ref={ref}>
          {profile.skills.map((group) => (
            <div className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
