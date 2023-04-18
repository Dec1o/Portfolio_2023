/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import ME from "../../assets/Eu1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Saiba Mais</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>6+ meses de trabalho</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Interpessoal</h5>
              <small>Boas soft skills</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>10+ Completos</small>
            </article>
          </div>

          <p className="alinhamento">
            {" "}
            Cerca de 1 ano que dedico-me a carreira de desenvolvedor. Atualmente, já conto com conhecimento em várias das principais tecnologias do mercado, curso Ciência da Computação na UNIT-SE e estou estagiando como desenvolvedor estagiário na PM-SE.
            <br/>
            <br/>
            Em dezembro de 2022 participei do 3º Hackathon Business organizado pelo SEBRAE-SE e atingi a 2ª colocação, fui o único programador do time e me responsabilizei por desenvolver o website do projeto da equipe em algumas horas.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
