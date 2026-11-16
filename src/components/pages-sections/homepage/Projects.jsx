import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "DragonBall Collector",
      caption: `Una web app per collezionare carte di Dragon Ball: apri
                pacchetti, scopri carte di rarità diverse e completa il tuo
                album personale`,
      img: "/projects/dragonball-collector/image_1-thumb.webp",
      alt: "Immagine della home page di DragonBall Collector",
      type: "Full-Stack Web Application",
      stacks: ["html", "css", "javascript", "react", "express", "mysql"],
      to: "/projects/dragonball-collector",
    },
    {
      id: 2,
      name: "LiveLoot",
      caption: `E-commerce full-stack dedicato a periferiche e hardware gaming, con catalogo per categorie, carrello, pagamento con Stripe e un assistente AI che risponde sui prodotti`,
      img: "/projects/liveloot/image_1-thumb.webp",
      alt: "Immagine della home page di LiveLoot",
      type: "Full-Stack E-commerce",
      stacks: [
        "html",
        "css",
        "javascript",
        "react",
        "express",
        "mysql",
        "stripe",
        "bootstrap",
        "mailtrap",
      ],
      to: "/projects/liveloot",
    },
    {
      id: 3,
      name: "Trap Italiana",
      caption: `Una web app per scoprire gli artisti della trap italiana, cercarli per nome e aprire una scheda con biografia, album pubblicati e player Spotify`,
      img: "/projects/trap-italiana/image_1-thumb.webp",
      alt: "Immagine della home page di Trap Italiana",
      type: "Full-Stack Application",
      stacks: [
        "html",
        "css",
        "javascript",
        "react",
        "php",
        "laravel",
        "mysql",
        "bootstrap",
        "spotify_api",
      ],
      to: "/projects/trap-italiana",
    },
    {
      id: 4,
      name: "GameVault",
      caption: `GameVault è un catalogo di videogiochi con ricerca e filtri per console, genere e modalità multiplayer. Gli utenti registrati possono recensire i giochi e salvarli in una wishlist.`,
      img: "/projects/gamevault/image_1-thumb.webp",
      alt: "Immagine della home page di GameVault",
      type: "Full-Stack Application",
      stacks: ["html", "css", "javascript", "react", "php", "laravel", "mysql"],
      to: "/projects/gamevault",
    },
    {
      id: 5,
      name: "Gym Manager",
      caption: `Gestionale web per reception e trainer, con clienti, abbonamenti, certificati medici e schede di allenamento. L'app mobile permette ai clienti di consultare profilo e scheda e di usare un assistente AI per gli esercizi`,
      img: "/projects/gym-dash-app/image_1-thumb.webp",
      alt: "Immagine della home page di Gym Manager",
      type: "Full-Stack Application · Web App + Mobile App",
      stacks: [
        "html",
        "css",
        "javascript",
        "react",
        "php",
        "laravel",
        "mysql",
        "agenteAI",
        "mailer",
      ],
      to: "/projects/gym-manager",
    },
    {
      id: 6,
      name: "Sonora",
      caption: `Sonora è una landing page per un brand immaginario di cuffie premium`,
      img: "/projects/sonora/image_1-thumb.webp",
      alt: "Immagine della home page di Sonora",
      type: "Landing Page",
      stacks: [
        "html",
        "css",
        "javascript",
        "php",
        "laravel",
        "mysql",
        "stripe",
      ],
      to: "/projects/sonora",
    },
  ];

  const stackInfo = {
    html: { label: "HTML5", icon: "fa-brands fa-html5" },
    css: { label: "CSS3", icon: "fa-brands fa-css3" },
    javascript: { label: "JavaScript", icon: "fa-brands fa-js" },
    express: { label: "Express", icon: "fa-brands fa-node-js" },
    react: { label: "React", icon: "fa-brands fa-react" },
    mysql: { label: "MySQL", icon: "fa-solid fa-database" },
    php: { label: "PHP", icon: "fa-brands fa-php" },
    laravel: { label: "Laravel", icon: "fa-brands fa-laravel" },
    stripe: { label: "Stripe", icon: "fa-brands fa-stripe" },
    bootstrap: { label: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    mailtrap: { label: "Mailtrap", icon: "fa-solid fa-envelope" },
    spotify_api: { label: "Spotify API", icon: "fa-brands fa-spotify" },
    agenteAI: { label: "Agente AI", icon: "fa-solid fa-robot" },
    mailer: { label: "Mailer", icon: "fa-solid fa-envelope-open" },
  };

  return (
    <section className="projects" id="projects">
      <div className="dots"></div>

      <div className="container">
        <div className="projects-header">
          <p className="section-intro">03 / Progetti</p>

          <h2 className="section-title">
            I miei migliori{" "}
            <span className="section-span-formazione">lavori</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <Link to={p.to} className="project-card" key={p.id}>
              <div className="project-card-header">
                <img
                  className="project-image"
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-card-header-shadow"></div>
              </div>

              <div className="project-card-body">
                <div className="project-type">{p.type}</div>
                <p className="project-name">[ {p.name} ]</p>
                <p className="project-desc">{p.caption}</p>

                <div className="project-stacks">
                  {p.stacks.map((stack) => {
                    const info = stackInfo[stack];
                    if (!info) return null;
                    return (
                      <span className="project-stack" key={stack}>
                        <i className={info.icon} aria-hidden="true"></i>
                        {info.label}
                      </span>
                    );
                  })}
                </div>

                <div className="project-link">
                  Apri il case study{" "}
                  <i
                    className="fa-solid fa-arrow-right-long"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
