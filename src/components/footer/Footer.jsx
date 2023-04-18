/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footerPosition">
      <a href="#" className="footer__logo">
        Décio Carvalho Faria
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Página Inicial</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/Dec1o">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/decio-faria/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Décio Carvalho Faria. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
