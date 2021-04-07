import "./signup.css";

import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import API from "../../api/api";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Login from "../login/login";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [qualite, setQualite] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Ces mots de passe ne correspondent pas. Veuillez réessayer.");
      return;
    }
    const data = { name, email, password, profession, qualite };
    API.post("/signup", data)
      .then((res) => {
        if (res.data.error === false) {
          alert("Vous avez été enregister");
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setProfession("");
    setQualite("");
  };
  return (
    <div className="container-form">
      <div className="class-menu">
        <Button>
          <Link
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Accueil
          </Link>
        </Button>

        <Popup
          trigger={
            <Button
              style={{
                color: "white",
              }}
            >
              Se connecter
            </Button>
          }
          modal
          nested
        >
          {(close) => (
            <div className={"login-popup"}>
              <div className={"close-top"} onClick={close}></div>
              <div className={"login-container"}>
                <Login />
              </div>
              <div className={"close-bottom"} onClick={close}></div>
            </div>
          )}
        </Popup>

        <Button>
          <Link
            to="/don"
            style={{
              color: "whitesmoke",
              textDecoration: "none",
            }}
          >
            Faire un don
          </Link>
        </Button>
      </div>

      <div className={"wrapper-signup"}>
        <div className="contenair-square">
          <div className="text-square">
            <p>
              L’inscription est réservée aux parents dont les enfants sont
              intégrés dans le centre de prise en charge de l’association et aux
              employé(e)s de l'association, tout autre inscription sera de fait
              annulée.
            </p>
          </div>
        </div>
        <div className={"container-signup"}>
          <h1>Bienvenue</h1>

          <form className={"form"}>
            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmer votre mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <input
              type="text"
              placeholder="Votre profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
            <div className="style-select">
              <FormControl className={classes.formControl}>
                <InputLabel id="my-select-label">
                  Choisissez votre qualité:
                </InputLabel>
                <Select
                  labelId="my-select-label"
                  id="my-select-label"
                  value={qualite}
                  onChange={(e) => setQualite(e.target.value)}
                >
                  <MenuItem id="menu-item" value="parent">
                    Parent
                  </MenuItem>
                  <MenuItem value="Psy">Psychologue</MenuItem>
                  <MenuItem value="Ortho">Orthophoniste</MenuItem>
                  <MenuItem value="Educ">Educatrice</MenuItem>
                  <MenuItem value="responsable">Responsable</MenuItem>
                </Select>
                <FormHelperText>
                  <p>
                    Choisissez parent pour les parents des enfants, oubien votre
                    poste pour les employé(e)s, et résponsable pour les membres
                    du bureau
                  </p>
                </FormHelperText>
              </FormControl>
            </div>
            <button type="submit" id="login-button" onClick={send}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
