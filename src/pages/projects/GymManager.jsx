import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// SEO
import { seoData } from "../../data/seoData";
import SEO from "../../components/SEO/SEO.jsx";

export default function GymManager() {
  const [openImage, setOpenImage] = useState(false);
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      src: "/projects/gym-dash-app/image_1.webp",
      alt: "Gym Manager - Gestionale - Receptionist - Home Page",
    },
    {
      id: 2,
      src: "/projects/gym-dash-app/image_2.webp",
      alt: "Gym Manager - Gestionale - Log-In",
    },
    {
      id: 3,
      src: "/projects/gym-dash-app/image_3.webp",
      alt: "Gym Manager - Gestionale - Receptionist - Lista clienti",
    },
    {
      id: 4,
      src: "/projects/gym-dash-app/image_4.webp",
      alt: "Gym Manager - Gestionale - Receptionist - Focus cliente",
    },
    {
      id: 5,
      src: "/projects/gym-dash-app/image_5.webp",
      alt: "Gym Manager - Gestionale - Receptionist - Focus storico abbonamenti e sospensioni cliente",
    },
    {
      id: 6,
      src: "/projects/gym-dash-app/image_6.webp",
      alt: "Gym Manager - Gestionale - Receptionist - Sezione aggiungi cliente",
    },
    {
      id: 7,
      src: "/projects/gym-dash-app/image_7.webp",
      alt: "Gym Manager - Gestionale - Trainer - Focus cliente, visualizzazione programma di allenamento",
    },
    {
      id: 8,
      src: "/projects/gym-dash-app/image_8.webp",
      alt: "Gym Manager - Applicazione per telefono - Log-In cliente",
    },
    {
      id: 9,
      src: "/projects/gym-dash-app/image_9.webp",
      alt: "Gym Manager - Applicazione per telefono - Dashboard cliente",
    },
    {
      id: 10,
      src: "/projects/gym-dash-app/image_10.webp",
      alt: "Gym Manager - Applicazione per telefono - Programma allenamento cliente",
    },
    {
      id: 11,
      src: "/projects/gym-dash-app/image_11.webp",
      alt: "Gym Manager - Applicazione per telefono - Chat cliente con assistente AI",
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
      <SEO {...seoData.gymmanager} />

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

                <div className="app-type-tag">
                  Full-Stack Application · Web App + Mobile App
                </div>

                <h1 className="project-title">[Gym Manager]</h1>

                <p className="project-intro">
                  Gestionale web per reception e trainer, con clienti,
                  abbonamenti, certificati medici e schede di allenamento. L'app
                  mobile permette ai clienti di consultare profilo e scheda e di
                  usare un assistente AI per gli esercizi.
                </p>

                <div className="repo-links">
                  <a
                    href="https://github.com/diegotosato/Gym-Dashboard"
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
                  src="/projects/gym-dash-app/image_1.webp"
                  alt="Gym Manager - Gestionale - Receptionist - Home Page"
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
                src="https://www.youtube-nocookie.com/embed/T0PzLWWHuO0?playsinline=1&rel=0&hl=it"
                title="Gym Manager - Video dimostrativo"
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
                Digitalizzare la gestione quotidiana di una palestra e dare ai
                clienti uno strumento sempre a portata di mano. Lo staff
                gestisce anagrafica, rinnovi e programmi. Il cliente li consulta
                dallo smartphone.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Utenti a cui è destinato]</p>
              <p className="brief-text"></p>
              <ul>
                <li>
                  Receptionist: gestisce clienti, abbonamenti, sospensioni e
                  certificati medici
                </li>
                <li>Trainer: costruisce i programmi di allenamento</li>
                <li>Cliente: usa l'app mobile</li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Requisiti iniziali]</p>
              <p className="brief-text"></p>
              <ul>
                <li>Anagrafica clienti con ricerca e paginazione</li>
                <li>
                  Abbonamenti mensili, quadrimensili e annuali con rinnovi e
                  sospensioni
                </li>
                <li>Tracciamento della scadenza del certificato medico</li>
                <li>
                  Schede strutturate in programmi → settimane → allenamenti →
                  esercizi
                </li>
                <li>Area riservata per i clienti</li>
                <li>
                  Un assistente AI per suggerire alternative agli esercizi
                </li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Problema risolto]</p>
              <p className="brief-text">
                Scadenze di abbonamenti e certificati, sospensioni che spostano
                la data di fine e schede di allenamento sono spesso gestite su
                carta o fogli sparsi. Qui il sistema calcola lo stato aggiornato
                e lo rende consultabile al cliente in autonomia.
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
                Monorepo con due applicazioni: un backoffice Laravel per
                reception e trainer, basato su viste Blade, e un'app
                React/Capacitor per i clienti. Le due parti comunicano tramite
                API REST protette da token Sanctum.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Funzionalità principali</p>
              <ul>
                <li>
                  Backoffice: clienti, abbonamenti con sospensioni, certificati
                  medici e dashboard con tre grafici
                </li>
                <li>
                  Trainer: schede per programmi, settimane, allenamenti ed
                  esercizi
                </li>
                <li>App: profilo, scheda, timer e assistente AI</li>
              </ul>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Backend</p>
              <p className="impl-text">
                Login a sessione per lo staff e token Sanctum per i clienti.
                Validazione lato server, transazione sulla registrazione
                cliente, relazioni Eloquent su MySQL. Quattro endpoint
                gestiscono le conversazioni con l'assistente AI.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Scelte tecniche e sfide</p>
              <ul>
                <li>
                  Stato dell'abbonamento calcolato, non salvato. Un unico
                  metodo, Subscription::currentStatus(), restituisce pending,
                  suspended, expired o active in base alle date e alle
                  sospensioni. Dashboard, lista clienti e API usano la stessa
                  logica, senza stati duplicati da tenere allineati
                </li>
                <li>
                  Sospensioni che spostano la scadenza. Creare, terminare in
                  anticipo o annullare una sospensione ricalcola base_end_date
                  in base ai giorni effettivamente usati. Anche la modifica di
                  un rinnovo riapplica i giorni già sospesi, per non perderli
                </li>
                <li>
                  Assistente AI conversazionale. Un agente basato su Laravel AI
                  SDK ha un prompt di dominio e una regola di sicurezza: se
                  l'utente riferisce dolore o infortuni, non propone
                  sostituzioni. Le conversazioni sono persistenti e legate al
                  cliente. In sviluppo usa un modello locale compatibile OpenAI
                  (Ollama, qwen3:8b), così non servono chiavi a pagamento
                </li>
                <li>
                  Due autenticazioni separate. Lo staff usa la tabella users con
                  sessione. I clienti usano credenziali dedicate
                  (client_credentials) con token Sanctum, ripristinato al
                  riavvio dell'app tramite /api/user. L'app è buildata con
                  Capacitor per Android
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
              <p className="brief-subtitle">[FrontEnd - APP]</p>
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

                <div className="tech-tag">
                  <i className="fa-solid fa-robot" aria-hidden="true"></i>{" "}
                  Agente AI
                </div>
              </div>
            </div>

            <div className="techs-row">
              <p className="brief-subtitle">[BackEnd - Gestionale]</p>
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
                  <i
                    className="fa-solid fa-envelope-open"
                    aria-hidden="true"
                  ></i>{" "}
                  Mailer
                </div>

                <div className="tech-tag backend">
                  <i className="fa-solid fa-chart-pie" aria-hidden="true"></i>{" "}
                  ChartJS
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
            <Link to={"/projects/gamevault"} className="link-project">
              <span>
                <i
                  className="fa-solid fa-arrow-left-long"
                  aria-hidden="true"
                ></i>{" "}
                precedente
              </span>
              <p className="link-project-title">[GameVault]</p>
            </Link>

            <Link
              to={"/projects/dragonball-collector"}
              className="link-project"
            >
              <span>
                successivo{" "}
                <i
                  className="fa-solid fa-arrow-right-long"
                  aria-hidden="true"
                ></i>
              </span>
              <p className="link-project-title">[DragonBall Collector]</p>
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
