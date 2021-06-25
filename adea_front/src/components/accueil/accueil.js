import "./accueil.css";
import React from "react";

const Acceuil = () => {
  return (
    <div className="aceuil-contenair">
      <div className="texte-style">
        <p>
          Votre enfant ou un de vos proches présente des troubles du
          comportement et de la communication. En tant que parents, vous vous
          inquiétez de voir que votre enfant est différent. Vous cherchez des
          réponses à plusieurs questions. Vous avez entendu parler d’autisme.
          Vous êtes au bon endroit pour trouvez une réponse à vos questions et
          une orientation pour faire diagnostiquer votre enfant.
        </p>
      </div>
      <div className="definition-autisme">
        <div className="definition-titre">
          <h3>L'autisme</h3>
        </div>
        <div className="definition">
          <p>
            L’autisme est un 
            <b>trouble neuro-développemental</b>. Les premiers signes sont
            perceptibles avant l’âge de 3 ans. Le TSA (Trouble du spectre de
            l’autisme) affecte le développement de votre enfant dans :
          </p>
          <ul>
            <li>
              <b>La communication</b> (langage, compréhension, contact visuel…),
            </li>
            <li>
              <b>Les interactions sociales</b> (perception et compréhension des
              émotions, relations sociales, jeux…),
            </li>
            <li>
              <b>Le comportement</b> (gestes stéréotypés, intérêts et activités
              spécifiques et restreints, mise en place de routines, etc.).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
