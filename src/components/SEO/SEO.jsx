import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { DOMAIN } from "../../data/seoData";

const PERSON_ID = `${DOMAIN}/#person`;
const WEBSITE_ID = `${DOMAIN}/#website`;

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Diego Tosato",
  url: DOMAIN,
  image: `${DOMAIN}/social-preview.jpg`,
  jobTitle: "Junior Full Stack Web Developer",
  description:
    "Sviluppatore web full stack junior con formazione in grafica e comunicazione.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Treviso",
    addressCountry: "IT",
  },
  email: "mailto:tosato1998@gmail.com",
  sameAs: [
    "https://github.com/diegotosato",
    "https://www.linkedin.com/in/diego-tosato/",
  ],
  knowsAbout: [
    "React",
    "Node.js",
    "Express",
    "MySQL",
    "PHP",
    "Laravel",
    "JavaScript",
    "HTML5",
    "CSS3",
  ],
};

function buildHomeGraph({ url, title, description }) {
  return [
    person,
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${DOMAIN}/`,
      name: "Diego Tosato",
      inLanguage: "it-IT",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${url}#profilepage`,
      url,
      name: title,
      description,
      inLanguage: "it-IT",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    },
  ];
}

function buildProjectGraph({
  url,
  name,
  description,
  image,
  repository,
  languages,
  technologies,
}) {
  return [
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${DOMAIN}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: url,
        },
      ],
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${url}#project`,
      name,
      description,
      url,
      image: `${DOMAIN}${image}`,
      codeRepository: repository,
      programmingLanguage: languages,
      keywords: technologies.join(", "),
      inLanguage: "it-IT",
      author: {
        "@type": "Person",
        "@id": PERSON_ID,
        name: person.name,
        url: DOMAIN,
      },
      isPartOf: { "@id": WEBSITE_ID },
    },
  ];
}

export default function SEO({
  type,
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  name,
  image,
  repository,
  languages,
  technologies,
}) {
  const url = `${DOMAIN}${path}`;

  const graph =
    type === "project"
      ? buildProjectGraph({
          url,
          name,
          description,
          image,
          repository,
          languages,
          technologies,
        })
      : buildHomeGraph({ url, title, description });

  const schema = { "@context": "https://schema.org", "@graph": graph };

  // rimuove i tag statici di index.html: restano solo quelli della pagina corrente
  useEffect(() => {
    document.head
      .querySelectorAll("[data-static-seo]")
      .forEach((tag) => tag.remove());
  }, []);

  console.log(document.head.querySelectorAll("[data-static-seo]"));

  return (
    <Helmet>
      {/* Title e description base */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Title e description OG */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />

      {/* URL canonico per pagina */}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      {/* Dati strutturati (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
