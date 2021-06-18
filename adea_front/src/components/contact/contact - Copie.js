import "./contact.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FormControl, InputLabel, Input, makeStyles  } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#32a1ce', // Solid underline on focus
      },
    },
    inputStyle:{
      borderBottom: "#32a1ce",
    },
  }));

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("***TEMPLAYE_ID***", {
      name,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("success !");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          (document.querySelector(".form-message").innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <div className="contenairContact">
      <div className="title-contact jumptarget" id="contact">
        <h2>Contactez-nous</h2>
      </div>
      <div className="fromMpas">
        <div className="contenairFrom">
          <FormControl style={{ width: "30rem", height: "2rem" }}>
            <InputLabel htmlFor="component-simple">
              Votre nom et prénom
            </InputLabel>
            <Input
            MenuProps={{ classes: { paper: classes.inputStyle } }}
              id="component-simple"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
            />
          </FormControl>
          <FormControl style={{ width: "30rem", height: "2rem" }}>
            <InputLabel htmlFor="component-simple">
              Votre numéro de téléphone
            </InputLabel>
            <Input
              id="component-simple"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Phone"
            />
          </FormControl>
          <FormControl style={{ width: "30rem", height: "2rem", borderBottomColor:"hsl(210, 100%, 70%)" }}>
            <InputLabel htmlFor="component-simple">
              Votre adresse mail
            </InputLabel>
            <Input
              id="component-simple"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="email"
            />
          </FormControl>
          <textarea
         
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </div>
        <div className="contenairMaps"></div>
      </div>
    </div>
  );
};

export default Contact;
