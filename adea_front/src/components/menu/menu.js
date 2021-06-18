import "./menu.css";
import React from "react";
import Popup from "reactjs-popup";
import Login from "../login/login";
import Don from "../don/don"

const Menu = () => {
  return (
    <div className={"menu-contenair"}>
      <div className="sub-conetenair">
        <div className={"menu-left"}>
          <a href="/home/#accueil" className="acceuil-style">
            <span id="hover-style">Acceuil</span>
          </a>
        </div>
        <div className={"menu-right"}>
          <a href="/home/#quiSommeNous" className="button-style">
            <span id="hover-style">Qui sommes-nous?</span>
          </a>
          <a href="/home/corpsPage/#notreMission" className="button-style">
            <span id="hover-style">Nos objectifs</span>
          </a>
          <a href="/home/priseEnCharge/#priseEnCarge" className="button-style">
            <span id="hover-style">La prise en charge</span>
          </a>
          <a href="/home/adhesion/#adhesion" className="button-style">
            <span id="hover-style">Adhérer</span>
          </a>
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
