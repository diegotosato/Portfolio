import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// SEO
import { seoData } from "../../data/seoData";
import SEO from "../../components/SEO/SEO.jsx";

export default function DragonBallCollector() {
  const [openImage, setOpenImage] = useState(false);
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      src: "/projects/dragonball-collector/image_1.webp",
      alt: "Dragon Ball Collector - Home Page",
    },
    {
      id: 2,
      src: "/projects/dragonball-collector/image_2.webp",
      alt: "Dragon Ball Collector - Collection Page",
    },
    {
      id: 3,
      src: "/projects/dragonball-collector/image_3.webp",
      alt: "Dragon Ball Collector - Log-in Page",
    },
    {
      id: 4,
      src: "/projects/dragonball-collector/image_4.webp",
      alt: "Dragon Ball Collector - Register Page",
    },
    {
      id: 5,
      src: "/projects/dragonball-collector/image_5.webp",
      alt: "Dragon Ball Collector - Collezione di carte personale",
    },
    {
      id: 6,
      src: "/projects/dragonball-collector/image_6.webp",
      alt: "Dragon Ball Collector - Conferma apertura pacchetto con carte coperte",
    },
    {
      id: 7,
      src: "/projects/dragonball-collector/image_7.webp",
      alt: "Dragon Ball Collector - Pacchetto aperto con carte rivelate",
    },
    {
      id: 8,
      src: "/projects/dragonball-collector/image_8.webp",
      alt: "Dragon Ball Collector - Ingradimento di una carta",
    },
  ];

  function openPortal(src, alt, trigger) {
    triggerRef.current = trigger;
    setOpenImage(true);
    setSrc(src);
    setAlt(alt);
  }

  function closeFocus() {
    setOpenImage(false);
    setSrc("");
    setAlt("");
  }

  function renderFocus() {
    return (
      <div
        className="gallery-image-focus"
        role="dialog"
        aria-modal="true"
        aria-label="Immagine ingrandita"
      >
        <img src={src} alt={alt} />
        <button
          type="button"
          className="btn-close-focus"
          onClick={closeFocus}
          aria-label="Chiudi immagine"
          ref={closeButtonRef}
        >
          <i className="fa-solid fa-x" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  function clickScroll(e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    if (!openImage) return;
    document.body.classList.add("no-overflow");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpenImage(false);

      // il dialog ha un solo elemento focusabile: il focus resta sul bottone
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("no-overflow");
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [openImage]);

  return (
    <>
      <SEO {...seoData.dragonball} />

      <main>
        <section className="project-hero">
          <div className="dark-blur-circle"></div>

          <div className="container">
            <div className="project-grid">
              <div className="project-sx">
                <Link to={"/#projects"} className="back-link">
                  <i
                    className="fa-solid fa-arrow-left-long"
                    aria-hidden="true"
                  ></i>{" "}
                  Torna ai progetti
                </Link>

                <div className="app-type-tag">Full-Stack Web Application</div>

                <h1 className="project-title">[DragonBall Collector]</h1>

                <p className="project-intro">
                  Una web app per collezionare carte di Dragon Ball: apri
                  pacchetti, scopri carte di rarità diverse e completa il tuo
                  album personale. Frontend in React, API REST in Express con
                  autenticazione JWT e database MySQL.
                </p>

                <div className="repo-links">
                  <a
                    href="https://github.com/diegotosato/DragonBallCollector"
                    className="repo-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github" aria-hidden="true"></i>{" "}
                    Repository GitHub
                  </a>
                </div>
              </div>

              <div className="project-dx">
                <img
                  src="/projects/dragonball-collector/image_1.webp"
                  alt="Dragon Ball Collector - Home Page"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="project-video">
          <div className="project-video-dots-left"></div>
          <div className="project-video-dots-right"></div>

          <div className="container">
            <div className="project-section-index">
              <div className="list-smussato"></div>
              <h2 className="section-index-title">Video</h2>
            </div>

            <div className="video-player">
              <iframe
                src="https://www.youtube-nocookie.com/embed/_I356tjLZUU?playsinline=1&rel=0&hl=it"
                title="DragonBall Collector - Video dimostrativo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="project-gallery">
          <div className="project-gallery-stripes"></div>

          <div className="container">
            <div className="project-section-index">
              <div className="list-smussato"></div>
              <h2 className="section-index-title">Galleria</h2>
            </div>

            <div className="gallery-grid">
              {projectImages.map((image) => (
                <div
                  className="gallery-image"
                  role="button"
                  tabIndex={0}
                  onClick={(e) =>
                    openPortal(image.src, image.alt, e.currentTarget)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openPortal(image.src, image.alt, e.currentTarget);
                    }
                  }}
                  key={image.id}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {openImage && renderFocus()}

        <section className="project-brief">
          <div className="project-brief-dots"></div>

          <div className="container">
            <div className="project-section-index">
              <div className="list-smussato"></div>
              <h2 className="section-index-title">Project Brief</h2>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Scopo del progetto]</p>
              <p className="brief-text">
                Realizzare un'esperienza da "trading card game digitale".
                L'utente si registra, apre pacchetti da 5 carte e costruisce una
                collezione personale che vede in un album.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Utenti a cui è destinato]</p>
              <p className="brief-text"></p>
              <ul>
                <li>
                  Fan di Dragon Ball e appassionati di carte collezionabili che
                  vogliono un'esperienza di apertura pacchetti online
                </li>
                <li>
                  Visitatori non registrati, che possono sfogliare l'album
                  completo del set
                </li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Requisiti iniziali]</p>
              <p className="brief-text"></p>
              <ul>
                <li>Registrazione e login sicuri</li>
                <li>Catalogo carte con rarità e varianti artistiche</li>
                <li>Apertura pacchetti con probabilità di rarità differenti</li>
                <li>
                  Collezione persistente per utente, con le quantità dei
                  doppioni
                </li>
                <li>Interfaccia che valorizzi le carte più rare</li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Problema risolto]</p>
              <p className="brief-text">
                Raccogliere carte digitali in un solo posto, dove ogni utente ha
                il proprio inventario salvato sul database. L'album mostra
                subito cosa è stato ottenuto e cosa manca, e le carte sono
                presentate in modo coinvolgente.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Note]</p>
              <p className="brief-text">
                Progetto didattico senza scopo commerciale. Dragon Ball, i
                personaggi e le immagini delle carte appartengono ai rispettivi
                proprietari: il sito non è affiliato né approvato da loro.
              </p>
            </div>
          </div>
        </section>

        <section className="project-impl">
          <div className="container">
            <div className="project-section-index">
              <div className="list-smussato"></div>
              <h2 className="section-index-title">Implementazione</h2>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Architettura</p>
              <p className="impl-text">
                Due progetti indipendenti: una SPA React con Vite e un'API REST
                Express 5, collegata a MySQL. Il backend segue la struttura
                routes, controllers e database, e serve le immagini delle carte
                come file statici.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Funzionalità principali</p>
              <ul>
                <li>
                  Autenticazione: registrazione con password validata, login e
                  sessione tramite JWT
                </li>
                <li>
                  Album: vista pubblica del set e collezione personale con
                  quantità e carte mancanti
                </li>
                <li>
                  Pacchetti: apertura da 5 carte con rivelazione una per una e
                  badge NEW
                </li>
                <li>
                  Carte 3D: effetto interattivo che segue il mouse, con modale
                  di ingrandimento
                </li>
              </ul>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Backend</p>
              <p className="impl-text">
                Cinque endpoint REST: carte, registrazione, login, collezione
                utente e apertura pacchetto, quest'ultimo protetto da JWT.
                Password cifrate con bcrypt, query parametrizzate e CORS
                limitato al frontend.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Scelte tecniche e sfide</p>
              <ul>
                <li>
                  Logica lato server: le probabilità di rarità e il salvataggio
                  avvengono nel backend, così il client non può influenzare
                  l'esito dell'apertura. I pacchetti hanno 3 Common garantite e
                  2 slot jolly, con fallback se una categoria è vuota
                </li>
                <li>
                  Doppioni con un solo upsert: grazie al vincolo univoco su
                  (user_id, card_id) e a ON DUPLICATE KEY UPDATE, ogni carta
                  ripetuta incrementa la quantità senza righe duplicate
                </li>
                <li>
                  Effetto 3D leggero: rotazione e riflesso sono calcolati dalla
                  posizione del cursore e passati al CSS con custom properties.
                  Le animazioni restano fluide e il JavaScript minimo
                </li>
                <li>
                  UX dell'apertura: loader, copertine che sfumano al click e
                  modali con createPortal ricreano la sensazione di scartare un
                  pacchetto vero, senza problemi di z-index
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="project-techs">
          <div className="project-techs-dots"></div>

          <div className="container">
            <div className="project-section-index">
              <div className="list-smussato"></div>
              <h2 className="section-index-title">Tecnologie</h2>
            </div>

            <div className="techs-row">
              <p className="brief-subtitle">[FrontEnd]</p>
              <div className="techs-grid">
                <div className="tech-tag">
                  <i className="fa-brands fa-html5" aria-hidden="true"></i>{" "}
                  HTML5
                </div>

                <div className="tech-tag">
                  <i className="fa-brands fa-css3" aria-hidden="true"></i> CSS3
                </div>

                <div className="tech-tag">
                  <i className="fa-brands fa-js" aria-hidden="true"></i>{" "}
                  JavaScript
                </div>

                <div className="tech-tag">
                  <i className="fa-brands fa-react" aria-hidden="true"></i>{" "}
                  React
                </div>

                <div className="tech-tag">
                  <i className="fa-solid fa-bolt" aria-hidden="true"></i> Vite
                </div>

                <div className="tech-tag">
                  <i className="fa-brands fa-bootstrap" aria-hidden="true"></i>{" "}
                  Bootstrap
                </div>

                <div className="tech-tag">
                  <i className="fa-solid fa-spinner" aria-hidden="true"></i>{" "}
                  LDRS
                </div>
              </div>
            </div>

            <div className="techs-row">
              <p className="brief-subtitle">[BackEnd]</p>
              <div className="techs-grid">
                <div className="tech-tag backend">
                  <i className="fa-brands fa-node" aria-hidden="true"></i>{" "}
                  NodeJS
                </div>

                <div className="tech-tag backend">
                  <i className="fa-brands fa-node-js" aria-hidden="true"></i>{" "}
                  Express
                </div>

                <div className="tech-tag backend">
                  <i className="fa-solid fa-database" aria-hidden="true"></i>{" "}
                  MySQL
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="project-footer">
        <div className="black-blur-circle"></div>

        <div className="container">
          <div className="nav-projects">
            <Link to={"/projects/gym-manager"} className="link-project">
              <span>
                <i
                  className="fa-solid fa-arrow-left-long"
                  aria-hidden="true"
                ></i>{" "}
                precedente
              </span>
              <p className="link-project-title">[Gym Manager]</p>
            </Link>

            <Link to={"/projects/liveloot"} className="link-project">
              <span>
                successivo{" "}
                <i
                  className="fa-solid fa-arrow-right-long"
                  aria-hidden="true"
                ></i>
              </span>
              <p className="link-project-title">[LiveLoot]</p>
            </Link>
          </div>

          <div className="copyright">
            <span>© 2026 [Diego Tosato] — Full Stack Web Developer</span>

            <div onClick={(e) => clickScroll(e)} style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-arrow-up" aria-hidden="true"></i> Torna
              all'inizio
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
