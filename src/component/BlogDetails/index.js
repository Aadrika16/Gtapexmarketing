// BlogDetails.jsx
import CanvasScene from "../RoboScene/CanvasScene"
import { useParams } from "react-router-dom";
import { blogs } from "./blogData";

import "./index.css";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <div className="not-found">
        <h1>Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="blog-page">

      {/* HERO SECTION */}
      <div className="robot-layer">

        <CanvasScene/>

      </div>

      <section
        className="blog-hero"
        style={{
          backgroundImage: `url(${blog.heroImage})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="blog-category">
            {blog.category}
          </p>

          <h5>
            {blog.title}
          </h5>

          <p className="blog-intro">
            {blog.intro}
          </p>

          <div className="blog-meta">
            <span>GT Apex Marketing</span>
          </div>

        </div>
      </section>

      {/* ARTICLE */}

     
       <section className="article-wrapper">

        {blog.sections.map((section, index) => (

            <article
            key={index}
            className={`editorial-section ${
                index % 2 !== 0 ? "reverse" : ""
            }`}
            >

            {/* IMAGE 
            <div className="image-wrapper">
                <img
                src={section.image}
                alt={section.heading}
                /> 
            </div>
            */}


            {/* CONTENT */}

            <div className="editorial-content">


                <p className="section-number">
                0{index + 1}
                </p>

                <h2>
                {section.heading}
                </h2>

                {section.content
                .split("\n")
                .map((line, i) =>
                    line.trim() ? (
                    <p key={i}>
                        {line}
                    </p>
                    ) : null
                )}

            </div>

            </article>

        ))}

        </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

         

        </div>

      </section>


    </div>
  );
};

export default BlogDetails;