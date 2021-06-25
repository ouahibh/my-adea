import "./contact.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail_ADEA_Web",
        "template_y8385wb",
        e.target,
        "user_WNxFbwi2JIJYwFYL2oMwk"
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
    <div className="contenairContact" >
      <div className="title-contact jumptargetC" id="contact" >
        <h2>Contactez-nous</h2>
      </div>
      <div className="fromMpas">
        <div className="contenairFrom">
          <div className="titleForm">
            <h2>Vous souhaitez nous aider ? Contactez-nous !</h2>
          </div>
          <form className={"form"}>
            <input
            id="contactInput"
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
            id="contactInput"
              type="0560042603"
              placeholder="Votre téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
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
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message *"
              value={message}
            />
            <button type="submit" id="send-button" onClick={sendEmail}>
              Envoyer
            </button>
          </form>
        </div>
        
          
        <a className="contenairMaps"  href="https://goo.gl/maps/7WKN8x7xcwyyhmdg6" target="blank"/>
        
      </div>
    </div>
  );
};

export default Contact;
