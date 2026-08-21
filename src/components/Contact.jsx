import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import useReveal from "../hooks/useReveal.js";
import { profile } from "../data/profile.js";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I&apos;m open to software engineering and QA opportunities
          </p>
        </div>

        <div className="contact-grid reveal" ref={ref}>
          <a href={`mailto:${profile.email}`} className="contact-card">
            <span className="contact-icon">
              <FiMail />
            </span>
            <span className="contact-label">Email</span>
            <span className="contact-value">{profile.email}</span>
          </a>

          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-card">
            <span className="contact-icon">
              <FiPhone />
            </span>
            <span className="contact-label">Phone</span>
            <span className="contact-value">{profile.phone}</span>
          </a>

          <div className="contact-card">
            <span className="contact-icon">
              <FiMapPin />
            </span>
            <span className="contact-label">Location</span>
            <span className="contact-value">{profile.location}</span>
          </div>
        </div>

        <div className="contact-cta reveal" ref={ref}>
          <p>
            Whether you have a role in mind or just want to say hello — my
            inbox is always open.
          </p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <FiSend /> Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
