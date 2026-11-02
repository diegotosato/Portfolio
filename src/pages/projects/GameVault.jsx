import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// SEO
import { seoData } from "../../data/seoData";
import SEO from "../../components/SEO/SEO.jsx";

export default function GameVault() {
  const [openImage, setOpenImage] = useState(false);
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      src: "/projects/gamevault/image_1.webp",
      alt: "GameVault - Home Page",
    },
    {
      id: 2,
      src: "/projects/gamevault/image_2.webp",
      alt: "GameVault - Log-In Page",
    },
    {
      id: 3,
      src: "/projects/gamevault/image_3.webp",
      alt: "GameVault - Pagina di tutti i giochi con filtri attivi",
    },
    {
      id: 4,
      src: "/projects/gamevault/image_4.webp",
      alt: "GameVault - Pagina singolo gioco",
    },
    {
      id: 5,
      src: "/projects/gamevault/image_5.webp",
      alt: "GameVault - Pagina visualizzazione profilo con sezione preferiti",
    },
    {
      id: 6,
      src: "/projects/gamevault/image_6.webp",
      alt: "GameVault - Gestionale dei giochi",
    },
    {
      id: 7,
      src: "/projects/gamevault/image_7.webp",
      alt: "GameVault - Gestionale dei giochi, sezione vedi info sul gioco",
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
      <SEO {...seoData.gamevault} />

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

                <div className="app-type-tag">Full-Stack Application</div>

                <h1 className="project-title">[GameVault]</h1>

                <p className="project-intro">
                  GameVault è un catalogo di videogiochi con ricerca e filtri
                  per console, genere e modalità multiplayer. Gli utenti
                  registrati possono recensire i giochi e salvarli in una
                  wishlist. Gli amministratori gestiscono i contenuti da un
                  pannello dedicato
                </p>

                <div className="repo-links">
                  <a
                    href="https://github.com/diegotosato/GameVault"
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
                  src="/projects/gamevault/image_1.webp"
                  alt="GameVault - Home Page"
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
                src="https://www.youtube-nocookie.com/embed/TRMnvIAek2c?playsinline=1&rel=0&hl=it"
                title="GameVault - Video dimostrativo"
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
                Realizzare una piattaforma per consultare un catalogo di
                videogiochi, con un'area utente e un pannello di gestione dei
                contenuti. Frontend React e backend Laravel sono due
                applicazioni distinte che comunicano via API.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Utenti a cui è destinato]</p>
              <p className="brief-text"></p>
              <ul>
                <li>
                  Visitatori e giocatori, che sfogliano il catalogo, leggono le
                  recensioni, si registrano, scrivono recensioni e gestiscono la
                  wishlist
                </li>
                <li>
                  Amministratori, che inseriscono e modificano giochi e dati
                  correlati
                </li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Requisiti iniziali]</p>
              <p className="brief-text"></p>
              <ul>
                <li>
                  Catalogo paginato con ricerca testuale e filtri combinabili
                </li>
                <li>
                  Registrazione, login, recupero e cambio password, cambio email
                  con verifica, eliminazione dell'account
                </li>
                <li>Recensioni e wishlist riservate agli utenti autenticati</li>
                <li>
                  Pannello admin con CRUD per videogiochi, console, generi,
                  sviluppatori e modalità multiplayer
                </li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Problema risolto]</p>
              <p className="brief-text">
                Il progetto riunisce in un unico punto la scoperta dei giochi,
                il filtraggio per piattaforma o genere e il feedback degli
                utenti. Allo stesso tempo dà a chi gestisce il catalogo uno
                strumento per mantenerlo aggiornato senza toccare il database.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Note]</p>
              <p className="brief-text">
                Progetto didattico senza scopo commerciale. Titoli, copertine e
                marchi dei videogiochi appartengono ai rispettivi proprietari:
                il sito non è affiliato né approvato da loro.
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
                SPA React (Vite) separata da un backend Laravel che espone API
                JSON. L'autenticazione usa Sanctum in modalità stateful, con
                cookie di sessione e CSRF. Il pannello admin è server-side con
                viste Blade e middleware di ruolo.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Funzionalità principali</p>
              <ul>
                <li>
                  Catalogo con ricerca, filtri multipli e "carica altri"
                  paginato
                </li>
                <li>
                  Scheda gioco con dettaglio, recensioni paginate e invio di
                  nuove recensioni
                </li>
                <li>
                  Profilo con wishlist, cambio email/password ed eliminazione
                  account
                </li>
                <li>Flussi di registrazione, login e reset password</li>
              </ul>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Backend</p>
              <p className="impl-text">
                Endpoint pubblici in sola lettura per catalogo e filtri.
                Wishlist e recensioni sono protette da auth:sanctum, le
                operazioni sensibili da throttle. Lo schema ha 5 tabelle di
                dominio più 3 pivot, con vincoli di chiave esterna. Le cover
                sono caricate su storage pubblico.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Scelte tecniche e sfide</p>
              <ul>
                <li>
                  Filtri con whereHas: i filtri sulle relazioni many-to-many
                  (console, generi, modalità) sono combinabili con la ricerca
                  testuale. Il conteggio dei risultati viene restituito insieme
                  alla pagina
                </li>
                <li>
                  Auth SPA/API cross-origin: frontend su localhost:5173 e
                  backend su localhost:8000. Ho configurato CORS con
                  credenziali, il cookie CSRF di Sanctum e
                  withCredentials/withXSRFToken su Axios
                </li>
                <li>
                  Doppia interfaccia sullo stesso backend: API JSON per i
                  giocatori e Blade con middleware admin per la gestione. I
                  ruoli user/admin stanno su un enum nella tabella utenti
                </li>
                <li>
                  Gestione dei media: al caricamento di un nuovo file l'immagine
                  precedente viene eliminata dallo storage. Lo slug viene
                  generato dal nome e usato come chiave di route, per URL
                  leggibili (/videogames/:slug)
                </li>
                <li>
                  Cambio email con verifica: passa da un token, un'email
                  dedicata (Mailable) e un endpoint di conferma. Una pagina di
                  landing con countdown riporta poi al profilo
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
                  <i className="fa-brands fa-php" aria-hidden="true"></i> PHP
                </div>

                <div className="tech-tag backend">
                  <i className="fa-brands fa-laravel" aria-hidden="true"></i>{" "}
                  Laravel
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
            <Link to={"/projects/trap-italiana"} className="link-project">
              <span>
                <i
                  className="fa-solid fa-arrow-left-long"
                  aria-hidden="true"
                ></i>{" "}
                precedente
              </span>
              <p className="link-project-title">[Trap Italiana]</p>
            </Link>

            <Link to={"/projects/gym-manager"} className="link-project">
              <span>
                successivo{" "}
                <i
                  className="fa-solid fa-arrow-right-long"
                  aria-hidden="true"
                ></i>
              </span>
              <p className="link-project-title">[Gym Manager]</p>
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
