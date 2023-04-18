import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Eu_de_frente-removebg.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, meu nome é</h5>
        <h1>Décio Carvalho Faria</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className="me_eu" src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Rolar para baixo
        </a>
      </div>
    </header>
  );
};

export default Header;
