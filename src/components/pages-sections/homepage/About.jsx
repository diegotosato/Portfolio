export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-grid">
          <div className="section-sx">
            <p className="section-intro">01 / chi sono</p>

            <h2 className="section-title">
              Dal design al <span className="section-span-codice">codice</span>
            </h2>

            <div className="hobby-tags">
              <div className="hobby">nerd culture</div>
              <div className="hobby">videogiochi</div>
              <div className="hobby">anime</div>
              <div className="hobby">YouTube</div>
              <div className="hobby">Twitch</div>
              <div className="hobby">calcio</div>
              <div className="hobby">basket</div>
              <div className="hobby">palestra</div>
            </div>
          </div>

          <div className="section-dx">
            <p className="about-paragraph">
              <span>
                Sono Diego Tosato, <b>sviluppatore web full stack junior</b> di
                Treviso. Il mio percorso parte da{" "}
                <b>grafica e comunicazione</b>: alle superiori ho conosciuto il
                front-end e durante il triennio di Graphic Design ho realizzato
                il mio primo progetto web. Da lì, la programmazione non mi ha
                più lasciato.
              </span>
              <span>
                Per quasi otto anni ho lavorato nella stessa azienda, prima in
                ambito grafico e poi in produzione, imparando a gestire flussi
                di lavoro, dialogare con clienti e colleghi e adattarmi a ruoli
                diversi. Poi ho scelto di investire davvero nel codice con il{" "}
                <b>Master Full Stack Web Developer di Boolean</b>, lavorando su
                front-end e back-end e costruendo applicazioni complete anche in
                team.
              </span>
              <span>
                Oggi sviluppo con <b>React, Node.js, Express, MySQL, PHP e
                Laravel</b>, unendo l'attenzione per l'esperienza utente tipica
                di un designer alla logica del back-end. Mi piace perché mette
                insieme creatività e problem solving e mi permette di imparare
                ogni giorno.
              </span>
              <span>
                Fuori dal codice sono appassionato di cultura nerd, videogiochi
                e anime, con un debole per Dragon Ball Legends.
              </span>
            </p>

            <div className="section-slogan">
              <div className="slogan">
                Occhio da designer, mentalità da <span>sviluppatore</span>
              </div>
              <div className="slogan-repeat"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
