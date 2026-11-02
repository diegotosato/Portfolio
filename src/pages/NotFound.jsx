import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-white-blur-circle"></div>

      <section className="error-section">
        <div className="error-tag">errore 404</div>

        <div className="error-display">404</div>

        <h1 className="error-title">
          Questa tavola <span>non esiste</span>
        </h1>

        <p className="error-text">
          La pagina che cerchi è stata spostata o non è mai stata disegnata.
          Torniamo alla storia principale
        </p>

        <Link className="btn-explore-projects" to="/">
          <i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i>{" "}
          Torna alla Home
        </Link>
      </section>
    </main>
  );
}
