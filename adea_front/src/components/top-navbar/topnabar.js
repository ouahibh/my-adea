import "./topnabar.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@material-ui/core";


const Topnavbar = () => {
  return (
    <div className="contenair-top">
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
                className="icon-style survole-style"
                icon={["fab", "facebook-f"]}
              />
            </div>
          </Link>
        </>
        <>
          <a href="/home/contact/#contact" className="contact-style">
            <span className='survole-style'>Contact</span>
          </a>
        </>
      </div>
    </div>
  );
};

export default Topnavbar;
