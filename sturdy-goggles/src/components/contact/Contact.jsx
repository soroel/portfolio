import React, { useRef } from "react";
import "./contact.css";
import { HiMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uld5v81",
        "template_92suu77",
        form.current,
        "Jpm7ALwRMK1S8_oCd"
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
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sorophinenoel@gmail.com</h5>
            <a
              href="mailto:sorophinenoel@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <IoMdCall className="contact__option-icon" />
            <h4>Call</h4>
            <h5>+254 794 824 427</h5>
            <a href="tel:+254794824427" target="_blank" rel="noreferrer">
              +254794824427
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp </h4>
            <h5>Sorophine</h5>
            <a
              href="https://wa.me/+254794824427"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
