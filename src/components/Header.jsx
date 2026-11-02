import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  function setMenuOpen(open) {
    const nav = document.getElementById("menu-mobile");
    const scostato = document.getElementById("nav-scostato");
    const firstLine = document.getElementById("first-line");
    const secondLine = document.getElementById("second-line");
    const toggle = document.getElementById("menu-toggle");

    nav.classList.toggle("view", open);
    nav.classList.toggle("not-view", !open);

    scostato.classList.toggle("view", open);
    scostato.classList.toggle("not-view", !open);

    firstLine.classList.toggle("is-open", open);
    secondLine.classList.toggle("is-open", open);

    toggle.setAttribute("aria-expanded", String(open));
  }

  function toggleNavMobile() {
    const nav = document.getElementById("menu-mobile");
    setMenuOpen(nav.classList.contains("not-view"));
  }

  // lo scroll segue l'hash dell'URL: link condivisibili e tasto indietro funzionanti
  useEffect(() => {
    const id = location.hash.slice(1);

    if (!id) {
      window.scrollTo(0, 0);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [location]);

  return (
    <header>
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
              <div className="logo-text">[Diego Tosato]</div>
            </Link>
          </div>

          <div className="header-dx">
            <nav className="nav-large">
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
              id="menu-toggle"
              className="open-nav-mobile"
              onClick={toggleNavMobile}
              aria-label="Menu di navigazione"
              aria-expanded="false"
              aria-controls="menu-mobile"
            >
              <div className="open-menu-icon">
                <div id="first-line" className="icon-line"></div>
                <div id="second-line" className="icon-line"></div>
              </div>
            </button>
          </div>
        </div>

        <div id="nav-scostato" className="not-view"></div>

        <nav id="menu-mobile" className="not-view">
          <div className="nav-stripes"></div>

          <ul>
            <li>
              <Link to="/#about" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-square" aria-hidden="true"></i>{" "}
                <span>Chi sono</span>
              </Link>
            </li>
            <li>
              <Link to="/#skills" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-square" aria-hidden="true"></i>{" "}
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/#projects" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-square" aria-hidden="true"></i>{" "}
                <span>Progetti</span>
              </Link>
            </li>
            <li>
              <Link to="/#credits" onClick={() => setMenuOpen(false)}>
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
