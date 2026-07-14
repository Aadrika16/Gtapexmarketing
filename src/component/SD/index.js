import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import servicesData from "../data/servicesData";
import "./index.css";

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "active" : ""}`}>
      <button className="faq-header" onClick={() => setOpen(!open)}>
        <span>{item.question}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>

      <div className={`faq-body ${open ? "show" : ""}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

const SD = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <>
        <Header />
        <div className="service-not-found">
          <h1>Service Not Found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="service-page">
        <section className="service-hero">
          <div className="hero-left">
            <span className="service-badge">{service.badge}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <div className="hero-buttons">
              <button className="primary-btn">{service.button1}</button>
              <button className="secondary-btn">{service.button2}</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img src={service.heroImage} alt={service.title} />
            </div>
          </div>
        </section>

        <section className="overview-section">
          <div className="overview-box">
            <div className="overview-content">
              <h2>{service.overviewTitle}</h2>
              <p>{service.overview}</p>
            </div>

            <div className="overview-stats">
              <div className="overview-card">
                <h3>Fast</h3>
                <p>Optimized Performance</p>
              </div>

              <div className="overview-card">
                <h3>SEO</h3>
                <p>Search Engine Ready</p>
              </div>

              <div className="overview-card">
                <h3>Growth</h3>
                <p>Conversion Focused</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>{service.servicesTitle}</h2>

          <div className="sd-services-grid">
            {service.services.map((item) => (
              <div className="sd-service-card" key={item}>
                <div className="service-icon">✓</div>

                <h3>{item}</h3>

                <p>
                  Professional solutions designed to help your business grow
                  faster.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="why-section">
          <h2>{service.whyChooseTitle}</h2>

          <div className="why-grid">
            {service.whyChoose.map((item) => (
              <div className="why-card" key={item}>
                <div className="why-icon">⚡</div>

                <h3>{item}</h3>

                <p>Delivering measurable results through proven strategies.</p>
              </div>
            ))}
          </div>
        </section>

        {service.faq && (
          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>

            {service.faq.map((item) => (
              <FAQItem key={item.question} item={item} />
            ))}
          </section>
        )}
      </main>
    </>
  );
};

export default SD;