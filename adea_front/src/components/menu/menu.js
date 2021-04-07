import "./menu.css";
import { Button } from "@material-ui/core";
import React from "react";
import Popup from "reactjs-popup";
import Login from "../login/login";

const Menu = () => {
  return (
    <div className={"menu-contenair"}>
      <div className={"menu-left"}></div>
      <div className={"menu-right"}>
        <Button
          style={{
            color: "white",
          }}
        >
          Accueil
        </Button>
        <Button
          style={{
            color: "white",
          }}
        >
          Association
        </Button>
        <Button
          style={{
            color: "white",
          }}
        >
          Association
        </Button>
        <Popup
          trigger={
            <Button
              style={{
                color: "white",
              }}
            >
              Login
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
      </div>
    </div>
  );
};

export default Menu;
