import "./topnabar.css";
import { NavHashLink } from "react-router-hash-link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@material-ui/core";

const Topnavbar = () => {
  return (
    <div className="contenair-top">
      <div className="sub-contenair-top">
        <div className="top-flex">
          <>
            <div className="espace-style">
              <FontAwesomeIcon className="icon-style" icon="phone-alt" />
              <span>00213.541.56.89.46</span>
            </div>
            <div className="espace-style">
              <FontAwesomeIcon className="icon-style" icon="at" />
              <span>adea.autisme@gmail.com</span>
            </div>
            <Link href={"https://www.facebook.com/ADEA.Bejaia"} target="_blank">
              <div className="espace-style ">
                <FontAwesomeIcon
                  className="icon-facebook-style survole-style"
                  icon={["fab", "facebook-f"]}
                />
              </div>
            </Link>
          </>
        </div>
        <div className="contact-style">
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
            to="/home/contact/#contact"
          >
            <span className="survole-style">Contact</span>
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
