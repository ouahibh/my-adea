import "./gestion.css";

import React from "react";
import GestionNavBar from "../../components/gestionnavbar/gestionnavbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../../features/userSlice";

const Gestion = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      {user ? (
        <div className={"adminC"}>
          <GestionNavBar />
          <h1 style={{ color: "red" }}>{user.email}</h1>
          <button onClick={(e) => handleLogout(e)}>Déconnexion</button>
        </div>
      ) : (
        <>
          <h1>Vous n'êtes pas connécté</h1>
          <Link to="/home">Go to home</Link>
        </>
      )}
    </>
  );
};

export default Gestion;
