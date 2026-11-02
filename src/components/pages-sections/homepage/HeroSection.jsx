import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-space" id="home">
      <div className="white-blur-circle"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-sx">
            <p className="intro">[Diego Tosato] • full stack developer</p>

            <h1 className="hero-title">
              full stack <span className="hero-span-web">web</span>{" "}
              <span className="hero-span-dev">developer</span>
            </h1>

            <p className="hero-paragraph">
              Unisco la formazione in grafica e comunicazione alla
              programmazione web: sviluppo applicazioni complete, curate e
              intuitive con React, Node.js, PHP e Laravel. Master Full Stack Web
              Developer Boolean.
            </p>

            <Link className="btn-explore-projects" to="/#projects">
              Esplora i progetti{" "}
              <i
                className="fa-solid fa-arrow-right-long"
                aria-hidden="true"
              ></i>
            </Link>
          </div>

          <div className="hero-dx">
            <div className="smussato-orange"></div>
            <div className="smussato-blue"></div>
            <div className="hero-photo">
              <img
                src="/hero-photo.webp"
                alt="Diego Tosato, sviluppatore web full stack junior"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
