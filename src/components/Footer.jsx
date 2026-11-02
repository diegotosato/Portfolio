import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="credits" id="credits">
      <div className="black-blur-circle"></div>

      <div className="container">
        <div className="section-grid">
          <div className="section-sx">
            <p className="section-intro-alternate">04 / Credits</p>

            <h2 className="section-title" style={{ color: "white" }}>
              Grazie per aver seguito il{" "}
              <span className="section-span-codice">viaggio</span>
            </h2>

            <p className="greetings">
              Trovi i miei progetti su GitHub e il mio percorso su LinkedIn. Se
              vuoi contattarmi per un'opportunità di lavoro, scrivimi via email.
            </p>
          </div>

          <div className="section-dx">
            <div className="socials-links">
              <div className="link-box">
                <span>
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                  linkedin
                </span>
                <a
                  href="https://www.linkedin.com/in/diego-tosato/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Diego Tosato]
                </a>
              </div>

              <div className="link-box">
                <span>
                  <i className="fa-brands fa-github" aria-hidden="true"></i>{" "}
                  github
                </span>
                <a
                  href="https://github.com/diegotosato"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Diego Tosato]
                </a>
              </div>

              <div className="link-box">
                <span>
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>{" "}
                  email
                </span>
                <a href="mailto:tosato1998@gmail.com">[tosato1998@gmail.com]</a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <span>
            © {new Date().getFullYear()} [Diego Tosato] — Full Stack Web
            Developer
          </span>

          <Link to="/#home">
            <i className="fa-solid fa-arrow-up" aria-hidden="true"></i> Torna
            all'inizio
          </Link>
        </div>
      </div>
    </footer>
  );
}
