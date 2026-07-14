import "./index.css";
import { useHistory } from "react-router-dom";
import Header from "../Header";
const clients = [
  {
    title: "Meal Match",
    subtitle: "Personalized Nutrition. Delivered Daily.",
    description:
      "Meal Match is a modern nutrition-focused meal delivery brand built around the idea that healthy eating should be simple, personalized, and accessible. The brand offers customized meal plans designed to fit different lifestyles and health goals, helping people enjoy balanced nutrition without the hassle of planning and preparation.",
    impact:
      "GT Apex helped Meal Match build a strong online presence through brand identity development, social media storytelling, content strategy, and digital campaigns.",
  },
  {
    title: "Vajra Dental",
    subtitle: "Advanced Dentistry Meets Compassionate Care.",
    description:
      "Vajra Dental is a premium dental clinic dedicated to providing high-quality oral healthcare through advanced technology and patient-first treatment. From smile makeovers and cosmetic dentistry to preventive care and dental implants, the clinic focuses on delivering comfortable and reliable dental solutions.",
    impact:
      "GT Apex supports Vajra Dental through branding, content strategy, digital marketing, and patient engagement campaigns.",
  },
  {
    title: "Laverne Studio",
    subtitle: "Crafting Luxury Through Design.",
    description:
      "Laverne Studio is a premium lifestyle and luxury décor brand inspired by craftsmanship, elegance, and timeless aesthetics. The brand specializes in handcrafted furniture and statement décor pieces that blend artistry with functionality.",
    impact:
      "GT Apex has helped position Laverne Studio as a premium luxury brand through strategic branding, premium visual content, and digital marketing.",
  },
  {
    title: "Trend Fusion India",
    subtitle: "Fashion, Creativity & Talent.",
    description:
      "Trend Fusion India is a fashion and talent platform dedicated to discovering and promoting emerging talent. Through fashion showcases, kids fashion weeks, portfolio shoots, and experiential events, TFI creates opportunities for aspiring models and creative individuals.",
    impact:
      "GT Apex supports TFI through digital campaigns, event promotions, social media management, and audience engagement strategies.",
  },
  {
  title: "Promarvel Signature Salon",
  subtitle: "Where Beauty Meets Confidence.",
  description:
    "Promarvel Signature Salon offers professional hair care, skincare, makeup, styling, and beauty services with a strong focus on delivering premium customer experiences. The salon combines expert beauty solutions with personalized care to help clients look and feel their best.",
  impact:
    "GT Apex supports Promarvel Signature Salon through elegant visual content, campaign creatives, social media management, and digital marketing strategies that showcase the salon's expertise and attract new clients.",
},
{
  title: "Srimathi Silks",
  subtitle: "Celebrating Tradition with Timeless Elegance.",
  description:
    "Srimathi Silks is a premium saree brand offering carefully curated collections of silk, bridal, festive, and designer sarees. The brand is dedicated to preserving traditional craftsmanship while presenting elegant and contemporary designs for every occasion.",
  impact:
    "GT Apex helps Srimathi Silks grow its digital presence through luxury-focused campaigns, visual storytelling, product presentations, and social media content that highlights the heritage, craftsmanship, and elegance behind every collection.",
},
];

const AboutUs = () => {
  const history = useHistory();

  const handleStrategyCall = () => {
    history.push("/register"); // Register Form Route
  };

  const handleServices = () => {
    history.push("/services"); // Services Page Route
  };
  return (
    <>
      <Header />
      <div className="about-page">
        {/* Hero */}
        <section className="about-hero">
          <div className="container">
            <span className="section-badge">ABOUT GT APEX</span>

            <h1>
              One Year of Building
              <span> Brands That Move Forward.</span>
            </h1>
            <p>
              In just one year, <strong>GT Apex Marketing</strong> has evolved from an
              ambitious idea into a performance-driven digital marketing agency trusted by
              growing brands across multiple industries.
            </p>

            <p>
              Built on the belief that marketing should create
              <strong> measurable business impact</strong>, we combine strategy,
              creativity, and technology to help businesses stand out in an increasingly
              competitive digital world.
            </p>

            <p>
              As a <strong>performance-first digital marketing agency</strong> in
              Hyderabad, our mission is simple: to create meaningful
              <strong> brand experiences</strong> that attract the right audience,
              generate quality leads, and
              <strong> accelerate sustainable growth.</strong>
            </p>

            <p>
              From startups taking their first steps to established businesses looking to
              scale, we build <strong>marketing systems that deliver real results.</strong>
            </p>

            <p>
              <strong>
                At GT Apex, we don't just manage brands—we become part of their journey.
              </strong>
            </p>
          </div>
        </section>

        {/* Brands */}
        <section className="brands-section">
          <div className="container">
            <span className="section-badge">CLIENT ECOSYSTEM</span>

            <h2>Brands We've Helped Build</h2>
            <p>A growing portfolio of partners across nutrition, healthcare, luxury, and fashion.</p>

            <div className="brands-grid">
              {clients.map((item) => (
                <div className="brand-card" key={item.title}>
                  <h3>{item.title}</h3>

                  <h4>{item.subtitle}</h4>

                  <p>{item.description}</p>

                  <div className="impact-box">
                    <strong>GT Apex Impact:</strong> {item.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Digital Marketing */}
        <section className="why-section">
          <div className="container">
            <span className="section-badge">DIGITAL IMPACT</span>

            <h2>Why Digital Marketing Matters</h2>

            <p>
              In today's world, your digital presence is often the first interaction a customer has with your business.</p>
            <p>
              A great product or service alone is no longer enough—you need the right strategy to reach the right audience at the right time.
            </p>
            <p>At GT Apex, we see digital marketing as more than advertising. It's about understanding people, solving problems, and building long-term value through creativity, strategy, and performance-driven execution.</p>

            <div className="features-grid">
              <div className="feature-card">Brand Visibility</div>
              <div className="feature-card">Trust & Authority</div>
              <div className="feature-card">Lead Generation</div>
              <div className="feature-card">Customer Engagement</div>
              <div className="feature-card">Data & Analytics</div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="approach-section">
          <div className="container">
            <span className="section-badge">GROWTH FRAMEWORK</span>

            <h2>Our Approach</h2>

            <blockquote>
              "How can this help the brand grow?"
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

        {/* Future */}
        <section className="future-section">
          <div className="container">
            <span className="section-badge">THE FUTURE</span>

            <h2>Looking Ahead</h2>

            <p>
              The first year of GT Apex has been about building strong
              foundations, meaningful partnerships, and successful growth
              stories.
            </p>

            <p>
              The years ahead are about innovation, creativity, and helping more
              brands achieve their full potential.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>
              We Don't Just Market Brands. <span>We Engineer Growth.</span>
            </h2>

            <p>Strategy. Creativity. Performance.</p>

            <div className="cta-buttons">
              <button onClick={handleStrategyCall}>Book a Free Strategy Call</button>
              <button className="outline-btn" onClick={handleServices}>Explore Our Services</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;