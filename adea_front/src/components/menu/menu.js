import "./menu.css";
import React from "react";
import { NavHashLink } from "react-router-hash-link";
import Popup from "reactjs-popup";
import Login from "../login/login";
import Don from "../don/don";

const Menu = () => {
  return (
    <div className={"menu-contenair"}>
      <div className="sub-conetenair">
        <div className={"menu-left"}>
          <NavHashLink smooth to="/home/#accueil" className="acceuil-style">
            <span id="acceuil-hover-style">Acceuil</span>
          </NavHashLink>
        </div>
        <div className={"menu-right"}>
          <NavHashLink
            scroll={(el) => {
              const yCoordinate =
                el.getBoundingClientRect().top + window.pageYOffset;
              const yOffset = -80;
              window.scrollTo({
                top: yCoordinate + yOffset,
                behavior: "smooth",
              });
            }}
            to={"/home/#quiSommeNous"}
            className="button-style"
          >
            <span id="hover-style">Qui sommes-nous?</span>
          </NavHashLink>
          <NavHashLink
            scroll={(el) => {
              const yCoordinate =
                el.getBoundingClientRect().top + window.pageYOffset;
              const yOffset = -80;
              window.scrollTo({
                top: yCoordinate + yOffset,
                behavior: "smooth",
              });
            }}
            to="/home/corpsPage/#notreMission"
            className="button-style"
          >
            <span id="hover-style">Nos objectifs</span>
          </NavHashLink>
          <NavHashLink
            scroll={(el) => {
              const yCoordinate =
                el.getBoundingClientRect().top + window.pageYOffset;
              const yOffset = -80;
              window.scrollTo({
                top: yCoordinate + yOffset,
                behavior: "smooth",
              });
            }}
            to="/home/priseEnCharge/#priseEnCarge"
            className="button-style"
          >
            <span id="hover-style">La prise en charge</span>
          </NavHashLink>
          <NavHashLink
            scroll={(el) => {
              const yCoordinate =
                el.getBoundingClientRect().top + window.pageYOffset;
              const yOffset = -80;
              window.scrollTo({
                top: yCoordinate + yOffset,
                behavior: "smooth",
              });
            }}
            to="/home/adhesion/#adhesion"
            className="button-style"
          >
            <span id="hover-style">Adhérer</span>
          </NavHashLink>
          <Popup
            trigger={
              <div className="button-style">
                <span id="hover-style">Faire un don</span>
              </div>
            }
            modal
          >
            {(close) => (
              <div className={"login-popup"}>
                <div className={"close-top"} onClick={close}></div>
                <div className={"login-container"}>
                  <Don />
                </div>
                <div className={"close-bottom"} onClick={close}></div>
              </div>
            )}
          </Popup>
          <Popup
            trigger={
              <div className="button-style">
                <span id="hover-style">S'identifier</span>
              </div>
            }
            modal
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
        </div>
      </div>
    </div>
  );
};

export default Menu;
