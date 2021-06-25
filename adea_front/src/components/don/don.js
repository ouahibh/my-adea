import "./don.css";
import React from "react";

const Don = () => {
  return (
    <div className={"wrapperDon"}>
      <div className={"containerDon"}>
        <h1>Faites un don</h1>
        <h2>
          Votre contribution permet de donner une chance à des enfants autistes
          de partir à l’école et d’avoir un avenir comme tous les enfants du
          monde.
        </h2>
        <h2>
          Vous pouvez nous faire un virement sur ce compte bancaire : &emsp;
          &emsp; &emsp; BEA (00040) Numéro : <b>002 00040 0401300026 36.</b>
        </h2>
        <h2>
          ou bien sur ce compte CCP : <b>0013745435 56.</b>
        </h2>
        <p>
          Vous pouvez aussi déposer vos dons directement dans notre centre de
          prise en charge.
        </p>
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

export default Don;
