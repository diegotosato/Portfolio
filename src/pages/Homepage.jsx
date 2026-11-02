import HeroSection from "../components/pages-sections/homepage/HeroSection.jsx";
import About from "../components/pages-sections/homepage/About.jsx";
import Skills from "../components/pages-sections/homepage/Skills.jsx";
import Projects from "../components/pages-sections/homepage/Projects.jsx";

// SEO
import { seoData } from "../data/seoData";
import SEO from "../components/SEO/SEO.jsx";

export default function Homepage() {
  return (
    <>
      <SEO {...seoData.home} />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
