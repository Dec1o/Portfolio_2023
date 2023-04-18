import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "To-do-list, with checkmark, delete, delete all options and browser database storage, REACT JS:",
      github: "https://github.com/Dec1o/To-do-list",
      demo: "https://to-do-list-vercel-ten.vercel.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Website with information about Resolve Bambu, project that took 2nd place in a hackathon:",
      github: "https://github.com/Dec1o/Resolve_Bambu",
      demo: "https://dec1o.github.io/Resolve_Bambu/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Form with registration and login option, design with relative complexity, HTML + CSS:",
      github: "https://github.com/Dec1o/formulario_cadastro-login",
      demo: "https://dec1o.github.io/formulario_cadastro-login/",
    },
    {
      id: 4,
      image: IMG4,
      title: "API system, calculator with addition and subtraction running on web, made with Java Spring Boot:",
      github: "https://github.com/Dec1o/Calculator_Spring",
    },
    {
      id: 5,
      image: IMG5,
      title: "Back-end for weather forecast, OpenWeather API, Requests library and Python language:",
      github: "https://github.com/Dec1o/previsao_tempo",
    },
    {
      id: 6,
      image: IMG6,
      title: "Full-Stack PDF searcher, type file name and it will open automatically, Java:",
      github: "https://github.com/Dec1o/PDF_search_engine",
    },
  ];

  return (
    <section id="portfolio" className="positionSixHundred">
      <h5>Meu recente Trabalo</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
