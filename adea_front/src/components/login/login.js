import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useCallback, useEffect } from "react";
import API from "../../api/api";

import { useHistory } from "react-router";
import { login } from "../../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    API.post("login", data)
      .then((res) => {
        if (res.data.error === false) {
          console.log(res.data);
          dispatch(
            login({
              email: email,
              password: password,
              loggedIn: true,
            })
          );
          navigate("/gestion");
        } else {
          alert(res.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={"wrapper"}>
      <div className={"container"}>
        <h1>Bienvenue</h1>

        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
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

          <button type="submit" id="login-button">
            Connexion
          </button>
        </form>
      </div>
      <ul className={"bg-bubbles"}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Login;
