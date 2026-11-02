export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="stripes"></div>

      <div className="container">
        <div className="skills-header">
          <p className="section-intro">02 / Skills & percorso</p>

          <h2 className="section-title">
            Competenze e{" "}
            <span className="section-span-formazione">formazione</span>
          </h2>
        </div>

        <div className="section-grid">
          <div className="section-sx">
            <div className="technical-skills">
              <h3 className="skills-title">Competenze tecniche</h3>

              <div className="skills-tags">
                <div className="skill">
                  <i className="fa-solid fa-pen-nib" aria-hidden="true"></i> Adobe Illustrator
                </div>

                <div className="skill">
                  <i className="fa-solid fa-book-open" aria-hidden="true"></i> Adobe InDesign
                </div>

                <div className="skill">
                  <i className="fa-solid fa-image" aria-hidden="true"></i> Adobe Photoshop
                </div>

                <div className="skill">
                  <i className="fa-brands fa-html5" aria-hidden="true"></i> HTML5
                </div>

                <div className="skill">
                  <i className="fa-brands fa-css3" aria-hidden="true"></i> CSS3
                </div>

                <div className="skill">
                  <i className="fa-brands fa-js" aria-hidden="true"></i> JavaScript
                </div>

                <div className="skill">
                  <i className="fa-brands fa-node" aria-hidden="true"></i> NodeJS
                </div>

                <div className="skill">
                  <i className="fa-brands fa-node-js" aria-hidden="true"></i> Express
                </div>

                <div className="skill">
                  <i className="fa-brands fa-react" aria-hidden="true"></i> React
                </div>

                <div className="skill">
                  <i className="fa-solid fa-bolt" aria-hidden="true"></i> Vite
                </div>

                <div className="skill">
                  <i className="fa-solid fa-database" aria-hidden="true"></i> MySQL
                </div>

                <div className="skill">
                  <i className="fa-brands fa-php" aria-hidden="true"></i> PHP
                </div>

                <div className="skill">
                  <i className="fa-brands fa-laravel" aria-hidden="true"></i> Laravel
                </div>
              </div>
            </div>
          </div>

          <div className="section-dx">
            <div className="training">
              <h3 className="skills-title">Formazione</h3>

              <div className="training-tree">
                <div className="tree-el">
                  <i className="fa-solid fa-square" aria-hidden="true"></i>

                  <div className="tree-texts">
                    <p className="tree-title">
                      Diploma in Grafica e Comunicazione
                    </p>

                    <p className="tree-desc">
                      IIS Andrea Palladio di Treviso: le basi della
                      comunicazione visiva e il primo approccio, teorico e
                      pratico, allo sviluppo front-end
                    </p>
                  </div>
                </div>

                <div className="tree-el">
                  <i className="fa-solid fa-square" aria-hidden="true"></i>

                  <div className="tree-texts">
                    <p className="tree-title">Corso di Graphic Design</p>

                    <p className="tree-desc">
                      Scuola Internazionale di Comics a Padova (2017-2020): tre
                      anni su fondamenti del design, brand identity e Suite
                      Adobe, tra progetti in team e primo sito web
                    </p>
                  </div>
                </div>

                <div className="tree-el">
                  <i className="fa-solid fa-square" aria-hidden="true"></i>

                  <div className="tree-texts">
                    <p className="tree-title">
                      Master Full Stack Web Developer
                    </p>

                    <p className="tree-desc">
                      Boolean, corso intensivo di 6 mesi: progettazione,
                      sviluppo e ottimizzazione di applicazioni web complete,
                      front-end e back-end, con focus su PHP e Laravel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
