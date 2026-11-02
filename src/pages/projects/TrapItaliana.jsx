import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// SEO
import { seoData } from "../../data/seoData";
import SEO from "../../components/SEO/SEO.jsx";

export default function TrapItaliana() {
  const [openImage, setOpenImage] = useState(false);
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      src: "/projects/trap-italiana/image_1.webp",
      alt: "Trap Italiana - Home Page",
    },
    {
      id: 2,
      src: "/projects/trap-italiana/image_2.webp",
      alt: "Trap Italiana - Pagina degli artisti",
    },
    {
      id: 3,
      src: "/projects/trap-italiana/image_3.webp",
      alt: "Trap Italiana - Pagina artisti filtrata con ricerca dell'artista",
    },
    {
      id: 4,
      src: "/projects/trap-italiana/image_4.webp",
      alt: "Trap Italiana - Pagina del singolo artista con spotify player",
    },
    {
      id: 5,
      src: "/projects/trap-italiana/image_5.webp",
      alt: "Trap Italiana - Responsive su tablet",
    },
    {
      id: 6,
      src: "/projects/trap-italiana/image_6.webp",
      alt: "Trap Italiana - Responsive su telefono",
    },
    {
      id: 7,
      src: "/projects/trap-italiana/image_7.webp",
      alt: "Trap Italiana - Gestore degli artisti",
    },
    {
      id: 8,
      src: "/projects/trap-italiana/image_8.webp",
      alt: "Trap Italiana - Gestore degli artisti, sezione aggiungi artista",
    },
    {
      id: 9,
      src: "/projects/trap-italiana/image_9.webp",
      alt: "Trap Italiana - Gestore degli artisti, visualizzazione dell'artista",
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
      <SEO {...seoData.trapitaliana} />

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

                <h1 className="project-title">[Trap Italiana]</h1>

                <p className="project-intro">
                  Una web app per scoprire gli artisti della trap italiana,
                  cercarli per nome e aprire una scheda con biografia, album
                  pubblicati e player Spotify. Un pannello di amministrazione
                  Laravel gestisce il catalogo e recupera immagini e discografie
                  dalle API di Spotify
                </p>

                <div className="repo-links">
                  <a
                    href="https://github.com/diegotosato/Trap-Italiana"
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
                  src="/projects/trap-italiana/image_1.webp"
                  alt="Trap Italiana - Home Page"
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
                src="https://www.youtube-nocookie.com/embed/Z6N7Q4oP0Cg?playsinline=1&rel=0&hl=it"
                title="Trap Italiana - Video dimostrativo"
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
                Realizzare un catalogo consultabile di artisti trap italiani. Il
                sito pubblico mostra l'elenco e le schede di dettaglio. Un
                backoffice separato permette di aggiungere, modificare ed
                eliminare gli artisti, mentre i dati musicali arrivano da
                Spotify.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Utenti a cui è destinato]</p>
              <p className="brief-text"></p>
              <ul>
                <li>
                  Appassionati di musica che vogliono scoprire artisti ed
                  esplorarne i dischi
                </li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Requisiti iniziali]</p>
              <p className="brief-text"></p>
              <ul>
                <li>Cercare un artista tramite slug</li>
                <li>Recuperarne immagine profilo e album da Spotify</li>
                <li>Mostrare in pagina il player incorporato</li>
                <li>
                  Elenco paginato, ricerca per nome e gestione CRUD degli
                  artisti.
                </li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Problema risolto]</p>
              <p className="brief-text">
                Evita di cercare gli artisti sparsi su Spotify. Raccoglie in un
                unico posto una selezione curata, con descrizione, copertine e
                ascolto immediato. Per l'amministratore, bastano nome, Spotify
                ID e descrizione: immagine e album vengono ricavati dall'API.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Note]</p>
              <p className="brief-text">
                Progetto didattico senza scopo commerciale. Nomi, immagini e
                copertine degli artisti appartengono ai rispettivi proprietari e
                sono ricavati dalle API di Spotify: il sito non è affiliato né
                approvato da Spotify o dagli artisti.
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
                Due applicazioni separate. Una SPA React (Vite) consuma le API
                JSON di un backend Laravel 12 e usa Sanctum in modalità stateful
                (cookie e CSRF). Laravel serve anche il backoffice Blade e
                comunica con le API Spotify. Il database è MySQL.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Funzionalità principali</p>
              <ul>
                <li>Home con hero e invito all'esplorazione</li>
                <li>
                  Elenco artisti con paginazione "load more" e ricerca per nome
                </li>
                <li>
                  Scheda artista con biografia, griglia degli album e player
                  Spotify incorporato
                </li>
                <li>
                  Backoffice con CRUD, ricerca e paginazione degli artisti
                </li>
              </ul>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Backend</p>
              <p className="impl-text">
                Due endpoint pubblici: GET /api/artists/{`:slug`} e POST
                /api/artists (elenco filtrato, 10 per pagina). Il modello Artist
                usa lo slug come chiave di route. Il backoffice ha rotte
                resource con validazione. Il token Spotify viene richiesto con
                client credentials e messo in cache per 3500 secondi.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Scelte tecniche e sfide</p>
              <ul>
                <li>
                  Dati ibridi: nel database ci sono solo i dati curati (nome,
                  slug, Spotify ID, descrizione). Immagini e album sono letti da
                  Spotify a ogni richiesta, così non vanno duplicati e restano
                  aggiornati
                </li>
                <li>
                  Autenticazione verso Spotify: il flusso client credentials sta
                  lato server, quindi le credenziali non arrivano mai al
                  browser. Il token è condiviso tramite Cache::remember per
                  evitare una richiesta di autenticazione a ogni chiamata
                </li>
                <li>
                  Paginazione degli album: l'API Spotify restituisce al massimo
                  10 album per chiamata (parametro limit). Il controller fa fino
                  a tre chiamate, in base al campo total, e unisce i risultati
                  in una lista unica
                </li>
                <li>
                  Integrazione SPA–API: CORS con credenziali e Sanctum stateful
                  (statefulApi). Il frontend richiede /sanctum/csrf-cookie prima
                  delle chiamate e imposta withCredentials e withXSRFToken su
                  axios
                </li>
                <li>
                  Esperienza utente: loader a schermo intero con portal React
                  (ldrs), reset dell'elenco quando la ricerca viene svuotata,
                  tema grafico dedicato con font Google e layout responsive su
                  più breakpoint
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

                <div className="tech-tag backend">
                  <i className="fa-brands fa-bootstrap" aria-hidden="true"></i>{" "}
                  Bootstrap
                </div>

                <div className="tech-tag backend">
                  <i className="fa-brands fa-spotify" aria-hidden="true"></i>{" "}
                  SpotifyAPI
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
            <Link to={"/projects/liveloot"} className="link-project">
              <span>
                <i
                  className="fa-solid fa-arrow-left-long"
                  aria-hidden="true"
                ></i>{" "}
                precedente
              </span>
              <p className="link-project-title">[LiveLoot]</p>
            </Link>

            <Link to={"/projects/gamevault"} className="link-project">
              <span>
                successivo{" "}
                <i
                  className="fa-solid fa-arrow-right-long"
                  aria-hidden="true"
                ></i>
              </span>
              <p className="link-project-title">[GameVault]</p>
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
