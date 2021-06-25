import "./contact.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const myMail = {
    name: name,
    email: email,
    phone: phone,
    message: message
  }
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "Gmail_ADEA_Web",
      "template_y8385wb",
      myMail,
      "user_WNxFbwi2JIJYwFYL2oMwk"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
      resetFrom()
  };
  
  const resetFrom = () => {
    document.getElementById("resetMyForm").reset();
  }
  return (
    <div className="contenairContact">
      <div className="title-contact" id="contact">
        <h2>Contactez-nous</h2>
      </div>
      <div className="fromMpas">
        <div className="contenairFrom">
          <div className="titleForm">
            <h2>Vous souhaitez nous aider ? Contactez-nous !</h2>
          </div>
          <form onSubmit={onSubmit} className={"form"} id="resetMyForm">
            <input
              required
             id="contactInput"
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              id="contactInput"
              type="0560042603"
              placeholder="Votre téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              required
              id="contactInput"
              type="mail"
              placeholder="Votre adresse mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label id="not-mail">Email non valide</label>
            <br />
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message *"
            />
            <button type="submit" id="send-button" >
              Envoyer
            </button>
          </form>
        </div>

        <a
          className="contenairMaps"
          href="https://goo.gl/maps/7WKN8x7xcwyyhmdg6"
          target="blank"
        >
          <div></div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
