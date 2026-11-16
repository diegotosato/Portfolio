import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// SEO
import { seoData } from "../../data/seoData";
import SEO from "../../components/SEO/SEO.jsx";

export default function Sonora() {
  const [openImage, setOpenImage] = useState(false);
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      src: "/projects/sonora/image_1.webp",
      alt: "Sonora - Home Page",
    },
    {
      id: 2,
      src: "/projects/sonora/image_2.webp",
      alt: "Sonora - Products traits",
    },
    {
      id: 3,
      src: "/projects/sonora/image_3.webp",
      alt: "Sonora - Product variants",
    },
    {
      id: 4,
      src: "/projects/sonora/image_4.webp",
      alt: "Sonora - Register Page",
    },
    {
      id: 5,
      src: "/projects/sonora/image_5.webp",
      alt: "Sonora - Profile dashboard",
    },
    {
      id: 6,
      src: "/projects/sonora/image_6.webp",
      alt: "Sonora - Order reacp before payment",
    },
    {
      id: 7,
      src: "/projects/sonora/image_7.webp",
      alt: "Sonora - Payment page with Stripe checkout",
    },
    {
      id: 8,
      src: "/projects/sonora/image_8.webp",
      alt: "Sonora - Responsive design on mobile and tablet",
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

                <div className="app-type-tag">Landing Page</div>

                <h1 className="project-title">[Sonora]</h1>

                <p className="project-intro">
                  Sonora è una landing page per un brand immaginario di cuffie
                  premium. Presenta il prodotto attraverso caratteristiche,
                  varianti e contenuti visivi, con un percorso di acquisto
                  dimostrativo integrato.
                </p>

                <div className="repo-links">
                  <a
                    href="https://github.com/diegotosato/Sonora"
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
                  src="/projects/sonora/image_1.webp"
                  alt="Sonora - Home Page"
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
                src="https://www.youtube-nocookie.com/embed/f6yM_bPSYd8?playsinline=1&rel=0&hl=it"
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
                Realizzare una landing page dedicata a un singolo prodotto,
                capace di presentarlo e accompagnare il visitatore verso una
                simulazione di acquisto.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Utenti a cui è destinato]</p>
              <p className="brief-text"></p>
              <ul>
                <li>
                  Visitatori interessati a scoprire le caratteristiche e le
                  varianti delle cuffie
                </li>
                <li>
                  Utenti registrati che vogliono esplorare il percorso di
                  acquisto dimostrativo
                </li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Requisiti iniziali]</p>
              <p className="brief-text"></p>
              <ul>
                <li>Presentazione responsive del prodotto</li>
                <li>
                  Sezioni dedicate a caratteristiche, confronto, varianti,
                  recensioni e FAQ
                </li>
                <li>Selezione del colore con aggiornamento dell’immagine</li>
                <li>Area utente e checkout dimostrativo con Stripe</li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Problema risolto]</p>
              <p className="brief-text">
                Raccogliere in un’unica pagina le informazioni utili a conoscere
                il prodotto, collegando la presentazione a un percorso di
                acquisto accessibile agli utenti registrati.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Note]</p>
              <p className="brief-text">
                Sonora è un concept dimostrativo, non un negozio reale.
                Prodotto, recensioni, prezzi e caratteristiche sono contenuti di
                esempio.
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
                Un’unica applicazione Laravel gestisce pagine, logica e
                database. Le viste Blade compongono l’interfaccia, CSS e
                JavaScript personalizzati ne curano aspetto e interazioni,
                mentre Vite gestisce gli asset frontend.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Funzionalità principali</p>
              <ul>
                <li>
                  Landing page: caratteristiche, confronto, recensioni e FAQ
                </li>
                <li>Varianti: selezione del colore con cambio dell’immagine</li>
                <li>
                  Account: registrazione, accesso e gestione della password
                </li>
                <li>
                  Acquisto demo: scelta della quantità, checkout Stripe e
                  storico ordini
                </li>
              </ul>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Backend</p>
              <p className="impl-text">
                Laravel gestisce l’autenticazione, valida i dati del checkout e
                salva utenti, prodotti, varianti e ordini. Un webhook riceve gli
                eventi Stripe e aggiorna lo stato degli ordini pagati.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Scelte tecniche e sfide</p>
              <ul>
                <li>
                  Presentazione interattiva: la selezione del colore aggiorna
                  immagine e nome della variante tramite JavaScript, senza
                  ricaricare la pagina
                </li>
                <li>
                  Prezzo lato server: il totale dell’ordine viene calcolato
                  usando il prezzo nel database, anziché affidarsi al riepilogo
                  visualizzato nel browser
                </li>
                <li>
                  Checkout incorporato: Stripe Embedded Checkout presenta il
                  pagamento in una pagina dedicata, accanto al riepilogo
                  dell’ordine
                </li>
                <li>
                  Conferma del pagamento: il webhook verifica firma, sessione,
                  importo e valuta prima di aggiornare lo stato dell’ordine
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
              </div>
            </div>

            <div className="techs-row">
              <p className="brief-subtitle">[BackEnd]</p>
              <div className="techs-grid">
                <div className="tech-tag backend">
                  <i className="fa-solid fa-database" aria-hidden="true"></i>{" "}
                  PHP
                </div>

                <div className="tech-tag backend">
                  <i className="fa-solid fa-database" aria-hidden="true"></i>{" "}
                  Laravel
                </div>

                <div className="tech-tag backend">
                  <i className="fa-solid fa-database" aria-hidden="true"></i>{" "}
                  Stripe
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
