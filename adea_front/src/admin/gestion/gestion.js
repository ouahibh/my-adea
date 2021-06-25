import "./gestion.css";

import React from "react";
import GestionNavBar from "../../components/gestionnavbar/gestionnavbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout, selectUser } from "../../features/userSlice";

const Gestion = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/home')
  };
  return (
    <>
      {user ? (
        <div className={"adminC"}>
          <div className="topBar">
            <h2 style={{ color: "white" }}>
              {user.email} {user.name}{" "}
            </h2>
            <button onClick={(e) => handleLogout(e)}>Déconnexion</button>
          </div>
          <GestionNavBar />
        </div>
      ) : (
        <>
          <div className="">
            <Link to="/home">Go to home</Link>
            <h1>Vous n'êtes pas connécté</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Gestion;
