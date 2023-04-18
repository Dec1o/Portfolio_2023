import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",
        "",
        form.current,
        ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="positionContact">
      <h5>Entrar em contato</h5>
      <h2>Contate-Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>deciocarvalhofaria@gmail.com</h5>
            <a
              href="deciocarvalhofaria@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Envie um Email
            </a>
          </article>
          <article className="contact__option">
            <BsGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <h5>Dec1o</h5>
            <a
              href="https://github.com/Dec1o"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma Mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Décio Carvaho Faria</h5>
            <a
              href="https://www.linkedin.com/in/decio-faria/"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma Mensagem
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Desativado :("
            required
          />
          <input type="email" name="email" placeholder="Desativado :(" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Desativado :("
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Desativado
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
