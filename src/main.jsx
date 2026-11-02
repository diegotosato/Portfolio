import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import css
//header
import "./styles/Header.css";

// homepage
import "./styles/styles-homepage/HeroSection.css";
import "./styles/styles-homepage/About.css";
import "./styles/styles-homepage/Skills.css";
import "./styles/styles-homepage/Projects.css";

//footer
import "./styles/Footer.css";

//projects
import "./styles/styles-projects/ProjectHeader.css";
import "./styles/styles-projects/ProjectFooter.css";
import "./styles/styles-projects/projects/ProjectHero.css";
import "./styles/styles-projects/projects/ProjectVideo.css";
import "./styles/styles-projects/projects/ProjectGallery.css";
import "./styles/styles-projects/projects/ProjectBrief.css";
import "./styles/styles-projects/projects/ProjectImpl.css";
import "./styles/styles-projects/projects/ProjectTechs.css";

// 404
import "./styles/NotFound.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
