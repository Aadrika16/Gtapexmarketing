import "./index.css";
import { useHistory } from "react-router-dom";
import Header from "../Header";

import {
  FaGlobe,
  FaInstagram,
  FaPalette,
  FaBullhorn,
  FaPenNib,
  FaChartLine,
  FaLaptopCode,
  FaMobileAlt,
  FaCalendarAlt,
  FaSearch,
  FaPaintBrush,
  FaCamera,
  FaUsers,
  FaExternalLinkAlt,
  FaBriefcase,
  FaArrowUp,
} from "react-icons/fa";

const clients = [
  {
    title: "Meal Match",
    subtitle: "Personalized Nutrition. Delivered Daily.",
    description:
      "Meal Match is a modern nutrition-focused meal delivery brand built around the idea that healthy eating should be simple, personalized, and accessible. The brand offers customized meal plans designed to fit different lifestyles and health goals.",

    work: [
      {
        label: "Brand Identity",
        icon: <FaPalette />,
      },
      {
        label: "Social Media Management",
        icon: <FaUsers />,
      },
      {
        label: "Content Strategy",
        icon: <FaPenNib />,
      },
      {
        label: "Digital Campaigns",
        icon: <FaBullhorn />,
      },
    ],

    impact:
      "GT Apex helped Meal Match build a strong online presence through brand identity development, social media storytelling, content strategy, and digital campaigns.",

    website: "",
    instagram: "https://www.instagram.com/mealmatch_hyderabad/",
  },

  {
    title: "Vajra Dental",
    subtitle: "Advanced Dentistry Meets Compassionate Care.",

    description:
      "Vajra Dental is a premium dental clinic dedicated to providing high-quality oral healthcare through advanced technology and patient-first treatment. The clinic focuses on delivering comfortable, reliable, and modern dental solutions.",

    work: [
      {
        label: "Website Design",
        icon: <FaPalette />,
      },
      {
        label: "Website Development",
        icon: <FaLaptopCode />,
      },
      {
        label: "Responsive Design",
        icon: <FaMobileAlt />,
      },
      {
        label: "Appointment Integration",
        icon: <FaCalendarAlt />,
      },
    ],

    impact:
      "GT Apex designed and developed a modern, responsive website for Vajra Dental, creating a professional digital experience that helps patients explore services and book appointments easily.",

    website: "https://vajra-dental.vercel.app/",
    instagram: "https://www.instagram.com/vajradentalclinic/",
  },

  {
    title: "Laverne Studio",
    subtitle: "Crafting Luxury Through Design.",

    description:
      "Laverne Studio is a premium lifestyle and luxury décor brand inspired by craftsmanship, elegance, and timeless aesthetics. The brand specializes in handcrafted furniture and statement décor pieces.",

    work: [
      {
        label: "Brand Strategy",
        icon: <FaPalette />,
      },
      {
        label: "Premium Visual Content",
        icon: <FaCamera />,
      },
      {
        label: "Social Media",
        icon: <FaUsers />,
      },
      {
        label: "Digital Marketing",
        icon: <FaChartLine />,
      },
    ],

    impact:
      "GT Apex helped position Laverne Studio as a premium luxury brand through strategic branding, premium visual content, and digital marketing.",

    website: "",
    instagram: "https://www.instagram.com/lavernestudio.in/",
  },

  {
    title: "Trend Fusion India",
    subtitle: "Fashion, Creativity & Talent.",

    description:
      "Trend Fusion India is a fashion and talent platform dedicated to discovering and promoting emerging talent through fashion showcases, kids fashion weeks, portfolio shoots, and experiential events.",

    work: [
      {
        label: "Website Design",
        icon: <FaPalette />,
      },
      {
        label: "Website Development",
        icon: <FaLaptopCode />,
      },
      {
        label: "Responsive Design",
        icon: <FaMobileAlt />,
      },
      {
        label: "Event Information",
        icon: <FaCalendarAlt />,
      },
    ],

    impact:
      "GT Apex designed and developed a modern, responsive website for Trend Fusion India to showcase fashion events, talent opportunities, and important event information.",

    website: "https://www.trendfusionindia.com/",
    instagram: "https://www.instagram.com/officialtrendfusionindia/",
  },

  {
    title: "Promarvel Signature Salon",
    subtitle: "Where Beauty Meets Confidence.",

    description:
      "Promarvel Signature Salon offers professional hair care, skincare, makeup, styling, and beauty services with a strong focus on delivering premium customer experiences.",

    work: [
      {
        label: "Social Media Content",
        icon: <FaCamera />,
      },
      {
        label: "Campaign Creatives",
        icon: <FaPaintBrush />,
      },
      {
        label: "Digital Marketing",
        icon: <FaBullhorn />,
      },
      {
        label: "Lead Generation",
        icon: <FaChartLine />,
      },
    ],

    impact:
      "GT Apex supports Promarvel through elegant visual content, campaign creatives, social media management, and digital marketing strategies.",

    website: "",
    instagram: "https://www.instagram.com/promarvelsolutions/",
  },

  {
    title: "Srimathi Silks",
    subtitle: "Celebrating Tradition with Timeless Elegance.",

    description:
      "Srimathi Silks is a premium saree brand offering carefully curated collections of silk, bridal, festive, and designer sarees. The brand celebrates traditional craftsmanship while presenting elegant designs.",

    work: [
      {
        label: "Product Creatives",
        icon: <FaPaintBrush />,
      },
      {
        label: "Social Media Content",
        icon: <FaCamera />,
      },
      {
        label: "Visual Storytelling",
        icon: <FaPenNib />,
      },
      {
        label: "Digital Campaigns",
        icon: <FaBullhorn />,
      },
    ],

    impact:
      "GT Apex supports Srimathi Silks through luxury-focused visual content, product presentations, and social media campaigns.",

    website: "",
    instagram: "https://www.instagram.com/srimathisilks7/",
  },

  {
    title: "GT Apex Marketing",
    subtitle: "Strategy. Creativity. Performance.",

    description:
      "GT Apex Marketing is a performance-first digital marketing agency that helps businesses build strong digital identities, reach the right audience, generate quality leads, and achieve measurable growth.",

    work: [
      {
        label: "Website Design",
        icon: <FaPalette />,
      },
      {
        label: "Website Development",
        icon: <FaLaptopCode />,
      },
      {
        label: "Responsive Design",
        icon: <FaMobileAlt />,
      },
      {
        label: "SEO Structure",
        icon: <FaSearch />,
      },
    ],

    impact:
      "The GT Apex team designed and developed its own modern, responsive website to showcase services, client work, and performance-focused marketing solutions.",

    website: "https://www.gtapexmarketing.com/",
    instagram: "https://www.instagram.com/gt_apexmarketing/",
  },
];

const AboutUs = () => {
  const history = useHistory();

  const handleStrategyCall = () => {
    history.push("/register");
  };

  const handleServices = () => {
    history.push("/services");
  };

  return (
    <>
      <Header />

      <main className="about-page">

        {/* HERO */}

        <section className="about-hero">
          <div className="container">

            <span className="section-badge">
              ABOUT GT APEX
            </span>

            <h1>
              One Year of Building
              <span>
                {" "}Brands That Move Forward.
              </span>
            </h1>

            <p>
              In just one year,{" "}
              <strong>
                GT Apex Marketing
              </strong>{" "}
              has evolved from an ambitious idea into a
              performance-driven digital marketing agency
              trusted by growing brands across multiple
              industries.
            </p>

            <p>
              Built on the belief that marketing should create
              <strong>
                {" "}measurable business impact
              </strong>
              , we combine strategy, creativity, and technology
              to help businesses stand out in an increasingly
              competitive digital world.
            </p>

            <p>
              As a{" "}
              <strong>
                performance-first digital marketing agency
              </strong>{" "}
              in Hyderabad, our mission is simple: to create
              meaningful{" "}
              <strong>
                brand experiences
              </strong>{" "}
              that attract the right audience, generate quality
              leads, and{" "}
              <strong>
                accelerate sustainable growth.
              </strong>
            </p>

            <p>
              From startups taking their first steps to
              established businesses looking to scale, we build{" "}
              <strong>
                marketing systems that deliver real results.
              </strong>
            </p>

            <p>
              <strong>
                At GT Apex, we don't just manage brands—we
                become part of their journey.
              </strong>
            </p>

          </div>
        </section>

        {/* CLIENTS */}

        <section className="brands-section">
          <div className="container">

            <span className="section-badge">
              CLIENT ECOSYSTEM
            </span>

            <h2>
              Brands We've Helped Build
            </h2>

            <p className="brands-intro">
              A growing portfolio of partners across nutrition,
              healthcare, luxury, fashion, beauty, and digital
              marketing.
            </p>

            <div className="brands-grid">

              {clients.map((item) => (

                <article
                  className="brand-card"
                  key={item.title}
                >

                  <div className="brand-header">

                    <h3>
                      {item.title}
                    </h3>

                    <h4>
                      {item.subtitle}
                    </h4>

                  </div>

                  <p className="brand-description">
                    {item.description}
                  </p>

                  {/* WORK DELIVERED */}

                  <div className="work-section">

                    <h5>
                      <FaBriefcase />

                      <span>
                        WORK DELIVERED
                      </span>
                    </h5>

                    <div className="work-grid">

                      {item.work.map((work) => (

                        <div
                          className="work-item"
                          key={work.label}
                        >

                          <div className="work-icon">
                            {work.icon}
                          </div>

                          <span className="work-label">
                            {work.label}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* GT APEX IMPACT */}

                  <div className="impact-box">

                    <div className="impact-icon">
                      <FaArrowUp />
                    </div>

                    <div className="impact-content">

                      <strong>
                        GT Apex Impact:
                      </strong>

                      <span className="impact-text">
                        {item.impact}
                      </span>

                    </div>

                  </div>

                  {/* WEBSITE AND INSTAGRAM */}

                  {(item.website ||
                    item.instagram) && (

                    <div className="client-links">

                      {item.website && (

                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="client-link website-link"
                        >

                          <FaGlobe />

                          <span>
                            Visit Website
                          </span>

                          <FaExternalLinkAlt />

                        </a>

                      )}

                      {item.instagram && (

                        <a
                          href={item.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="client-link instagram-link"
                        >

                          <FaInstagram />

                          <span>
                            Instagram
                          </span>

                          <FaExternalLinkAlt />

                        </a>

                      )}

                    </div>

                  )}

                </article>

              ))}

            </div>

          </div>
        </section>

        {/* WHY */}

        <section className="why-section">
          <div className="container">

            <span className="section-badge">
              DIGITAL IMPACT
            </span>

            <h2>
              Why Digital Marketing Matters
            </h2>

            <p>
              In today's world, your digital presence is often
              the first interaction a customer has with your
              business.
            </p>

            <p>
              A great product or service alone is no longer
              enough—you need the right strategy to reach the
              right audience at the right time.
            </p>

            <p>
              At GT Apex, we see digital marketing as more than
              advertising. It's about understanding people,
              solving problems, and building long-term value
              through creativity, strategy, and
              performance-driven execution.
            </p>

            <div className="features-grid">

              <div className="feature-card">
                Brand Visibility
              </div>

              <div className="feature-card">
                Trust & Authority
              </div>

              <div className="feature-card">
                Lead Generation
              </div>

              <div className="feature-card">
                Customer Engagement
              </div>

              <div className="feature-card">
                Data & Analytics
              </div>

            </div>

          </div>
        </section>

        {/* APPROACH */}

        <section className="approach-section">
          <div className="container">

            <span className="section-badge">
              GROWTH FRAMEWORK
            </span>

            <h2>
              Our Approach
            </h2>

            <blockquote>
              “How can this help the brand grow?”
            </blockquote>

            <div className="steps">

              <div>Strategy</div>

              <div>Create</div>

              <div>Execute</div>

              <div>Analyze</div>

              <div>Scale</div>

            </div>

          </div>
        </section>

        {/* FUTURE */}

        <section className="future-section">
          <div className="container">

            <span className="section-badge">
              THE FUTURE
            </span>

            <h2>
              Looking Ahead
            </h2>

            <p>
              The first year of GT Apex has been about building
              strong foundations, meaningful partnerships, and
              successful growth stories.
            </p>

            <p>
              The years ahead are about innovation, creativity,
              and helping more brands achieve their full
              potential.
            </p>

          </div>
        </section>

        {/* CTA */}

        <section className="cta-section">
          <div className="container">

            <h2>
              We Don't Just Market Brands.
              <span>
                {" "}We Engineer Growth.
              </span>
            </h2>

            <p>
              Strategy. Creativity. Performance.
            </p>

            <div className="cta-buttons">

              <button
                type="button"
                onClick={handleStrategyCall}
              >
                Book a Free Strategy Call
              </button>

              <button
                type="button"
                className="outline-btn"
                onClick={handleServices}
              >
                Explore Our Services
              </button>

            </div>

          </div>
        </section>

      </main>
    </>
  );
};

export default AboutUs;