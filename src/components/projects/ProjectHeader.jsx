import { Link } from "react-router-dom";

export default function ProjectHeader() {
  function setMenuOpen(open) {
    const nav = document.getElementById("project-menu-mobile");
    const scostato = document.getElementById("project-nav-scostato");
    const firstLine = document.getElementById("first-line");
    const secondLine = document.getElementById("second-line");
    const toggle = document.getElementById("project-menu-toggle");

    nav.classList.toggle("view", open);
    nav.classList.toggle("not-view", !open);

    scostato.classList.toggle("view", open);
    scostato.classList.toggle("not-view", !open);

    firstLine.classList.toggle("is-open", open);
    secondLine.classList.toggle("is-open", open);

    toggle.setAttribute("aria-expanded", String(open));
  }

  function toggleNavMobile() {
    const nav = document.getElementById("project-menu-mobile");
    setMenuOpen(nav.classList.contains("not-view"));
  }

  return (
    <header className="project-header">
      <div className="container">
        <div className="header-grid">
          <div className="header-sx">
            <Link className="logo" to="/#home">
              <div className="logo-image">
                <img
                  src="/logo_BIANCO.webp"
                  alt="Monogramma delle lettere D e T che fanno da logo"
                />
              </div>
              <div className="project-logo-text">[Diego Tosato]</div>
            </Link>
          </div>

          <div className="header-dx">
            <nav className="project-nav-large">
              <ul>
                <li>
                  <Link to="/#about">
                    <span>Chi sono</span>
                  </Link>
                </li>
                <li>
                  <Link to="/#skills">
                    <span>Skills</span>
                  </Link>
                </li>
                <li>
                  <Link to="/#projects">
                    <span>Progetti</span>
                  </Link>
                </li>
                <li>
                  <Link to="/#credits">
                    <span>Credits</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              type="button"
              id="project-menu-toggle"
              className="open-nav-mobile"
              onClick={toggleNavMobile}
              aria-label="Menu di navigazione"
              aria-expanded="false"
              aria-controls="project-menu-mobile"
            >
              <div className="open-menu-icon">
                <div id="first-line" className="icon-line"></div>
                <div id="second-line" className="icon-line"></div>
              </div>
            </button>
          </div>
        </div>

        <div id="project-nav-scostato" className="not-view"></div>

        <nav id="project-menu-mobile" className="not-view">
          <div className="nav-stripes"></div>

          <ul>
            <li>
              <Link to="/#about">
                <i className="fa-solid fa-square" aria-hidden="true"></i>{" "}
                <span>Chi sono</span>
              </Link>
            </li>
            <li>
              <Link to="/#skills">
                <i className="fa-solid fa-square" aria-hidden="true"></i>{" "}
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/#projects">
                <i className="fa-solid fa-square" aria-hidden="true"></i>{" "}
                <span>Progetti</span>
              </Link>
            </li>
            <li>
              <Link to="/#credits">
                <i className="fa-solid fa-square" aria-hidden="true"></i>{" "}
                <span>Credits</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
