import "./menu.css";
import { Button } from "@material-ui/core";
import React from "react";
//import { useHistory } from "react-router";
import Popup from "reactjs-popup";
import Login from "../login/login";

const Menu = () => {
  //const history = useHistory();
  //const navigate = (path) => {
  //history.push(path);
  //};

  return (
    <div className={"menu-contenair"}>
      <div className={"menu-left"}></div>
      <div className={"menu-right"}>
        <Button
          style={{
            color: "white",
            backgroundColor: "rgb(10, 126, 155)",
            borderRadius: ".2rem 1rem .2rem",
          }}
        >
          Association
        </Button>
        <Button
          style={{
            color: "white",
            backgroundColor: "rgb(10, 126, 155)",
            borderRadius: ".2rem 1rem .2rem",
          }}
        >
          Association
        </Button>
        <Button
          style={{
            color: "white",
            backgroundColor: "rgb(10, 126, 155)",
            borderRadius: ".2rem 1rem .2rem",
          }}
        >
          Association
        </Button>
        <Popup
          trigger={
            <Button
              style={{
                color: "white",
                backgroundColor: "rgb(10, 126, 155)",
                borderRadius: ".2rem 1rem .2rem",
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
