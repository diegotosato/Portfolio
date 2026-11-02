import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// SEO
import { seoData } from "../../data/seoData";
import SEO from "../../components/SEO/SEO.jsx";

export default function LiveLoot() {
  const [openImage, setOpenImage] = useState(false);
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      src: "/projects/liveloot/image_1.webp",
      alt: "LiveLoot - Home Page",
    },
    {
      id: 2,
      src: "/projects/liveloot/image_2.webp",
      alt: "LiveLoot - Home Page, i più venduti",
    },
    {
      id: 3,
      src: "/projects/liveloot/image_3.webp",
      alt: "LiveLoot - Home Page, ultimi arrivi",
    },
    {
      id: 4,
      src: "/projects/liveloot/image_4.webp",
      alt: "LiveLoot - Tutte le categorie",
    },
    {
      id: 5,
      src: "/projects/liveloot/image_5.webp",
      alt: "LiveLoot - Tutti i prodotti",
    },
    {
      id: 6,
      src: "/projects/liveloot/image_6.webp",
      alt: "LiveLoot - Focus prodotto singolo",
    },
    {
      id: 7,
      src: "/projects/liveloot/image_7.webp",
      alt: "LiveLoot - Carrello",
    },
    {
      id: 8,
      src: "/projects/liveloot/image_8.webp",
      alt: "LiveLoot - Checkout con indirizzo di spedizione",
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
      <SEO {...seoData.liveloot} />

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

                <div className="app-type-tag">Full-Stack E-commerce</div>

                <h1 className="project-title">[LiveLoot]</h1>

                <p className="project-intro">
                  E-commerce full-stack dedicato a periferiche e hardware
                  gaming, con catalogo per categorie, carrello, pagamento con
                  Stripe e un assistente AI che risponde sui prodotti. Frontend
                  React, API REST Node/Express, database MySQL
                </p>

                <div className="repo-links">
                  <a
                    href="https://github.com/diegotosato/liveloot-frontend"
                    className="repo-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github" aria-hidden="true"></i>{" "}
                    Frontend GitHub
                  </a>

                  <a
                    href="https://github.com/calogerosorce/liveloot-backend"
                    className="repo-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github" aria-hidden="true"></i>{" "}
                    Backend GitHub
                  </a>
                </div>
              </div>

              <div className="project-dx">
                <img
                  src="/projects/liveloot/image_1.webp"
                  alt="LiveLoot - Home Page"
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
                src="https://www.youtube-nocookie.com/embed/U2ynmoZPvrM?playsinline=1&rel=0&hl=it"
                title="LiveLoot - Video dimostrativo"
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
                Realizzare un negozio online completo, dalla navigazione del
                catalogo all'ordine pagato, passando per un assistente
                conversazionale.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Utenti a cui è destinato]</p>
              <p className="brief-text"></p>
              <ul>
                <li>
                  Appassionati di gaming e streamer che cercano hardware
                  (tastiere, monitor, cuffie, PC, sedie e altro). Il testo del
                  sito si rivolge anche a pro-player
                </li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Requisiti iniziali]</p>
              <p className="brief-text"></p>
              <ul>
                <li>
                  Catalogo di prodotti in 10 categorie, con scheda di dettaglio
                </li>
                <li>Ricerca e ordinamento</li>
                <li>Carrello persistente</li>
                <li>Checkout con dati di spedizione e pagamento online</li>
                <li>Email di conferma</li>
                <li>Assistenza tramite chatbot</li>
              </ul>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Problema risolto]</p>
              <p className="brief-text">
                Chi cerca hardware gaming deve confrontare molti prodotti
                simili. Il sito li organizza per categoria e li rende
                ricercabili. L'assistente aiuta a scegliere o confrontare usando
                i dati reali del catalogo. L'intero acquisto avviene in un unico
                flusso.
              </p>
            </div>

            <div className="brief-article">
              <p className="brief-subtitle">[Note]</p>
              <p className="brief-text">
                Progetto di gruppo: frontend e backend sono stati sviluppati in
                team. Per questo il repository del backend appartiene a un altro
                membro del gruppo.
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
                Applicazione a due livelli: SPA React/Vite che consuma un'API
                REST Express su MySQL. Stato globale con Context API, carrello
                persistito in localStorage, immagini servite come file statici
                dal backend.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Funzionalità principali</p>
              <ul>
                <li>
                  Catalogo per categorie, ricerca e ordinamento (nome, prezzo,
                  novità)
                </li>
                <li>Scheda prodotto con quantità da 1 a 5</li>
                <li>Carrello con spedizione gratuita sopra 150 €</li>
                <li>Chatbot "Ambrogio" e checkout Stripe</li>
              </ul>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Backend</p>
              <p className="impl-text">
                9 endpoint REST: catalogo, ordini, PaymentIntent Stripe e chat
                Gemini. Query SQL parametrizzate su MySQL (4 tabelle), email di
                conferma via Nodemailer/Mailtrap, CORS limitato all'origine del
                frontend.
              </p>
            </div>

            <div className="impl-scheda">
              <p className="impl-subtitle">Scelte tecniche e sfide</p>
              <ul>
                <li>
                  Pagamento server-driven. Il PaymentIntent viene creato dal
                  backend quando si entra nel checkout, così la chiave segreta
                  Stripe non esce mai dal server. Il frontend usa Stripe
                  Elements. La pagina /complete legge lo stato dall'intent e
                  svuota il carrello solo se il pagamento è succeeded
                </li>
                <li>
                  Chatbot contestuale con Gemini 2.5 Flash. Ambrogio ha due
                  modalità: sul prodotto corrente (query per slug) oppure
                  sull'intero catalogo, che viene iniettato nel prompt tramite
                  JOIN con le categorie. Le risposte sono in Markdown,
                  renderizzate con react-markdown con skipHtml
                </li>
                <li>
                  Ricerca e ordinamento sicuri e condivisibili. Filtri e
                  ordinamento sono sincronizzati con la query string
                  (useSearchParams), quindi gli URL sono condivisibili. Lato SQL
                  la ricerca è parametrizzata. Le colonne e la direzione di
                  ORDER BY passano da una whitelist, per evitare SQL injection
                  su parti non parametrizzabili
                </li>
                <li>
                  Modello dati relazionale e routing annidato. Gli ordini sono
                  divisi in orders e product_order (chiave primaria composta,
                  chiavi esterne verso prodotti e ordini), con il prezzo
                  congelato al momento dell'acquisto. Le rotte
                  /categorie/:slug/:slug_product verificano che il prodotto
                  appartenga alla categoria richiesta
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

                <div className="tech-tag backend">
                  <i className="fa-brands fa-stripe" aria-hidden="true"></i>{" "}
                  Stripe
                </div>

                <div className="tech-tag backend">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>{" "}
                  Mailtrap
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
            <Link
              to={"/projects/dragonball-collector"}
              className="link-project"
            >
              <span>
                <i
                  className="fa-solid fa-arrow-left-long"
                  aria-hidden="true"
                ></i>{" "}
                precedente
              </span>
              <p className="link-project-title">[DragonBall Collector]</p>
            </Link>

            <Link to={"/projects/trap-italiana"} className="link-project">
              <span>
                successivo{" "}
                <i
                  className="fa-solid fa-arrow-right-long"
                  aria-hidden="true"
                ></i>
              </span>
              <p className="link-project-title">[Trap Italiana]</p>
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
