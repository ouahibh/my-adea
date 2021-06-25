import "./priseEnCharge.css";

import React from "react";

const PriseEnCharge = () => {
  return (
    <div className="contenair-prise">
      <div className="title-prise jumptargetP" id="priseEnCarge">
        <h2>La prise en charge</h2>
      </div>
      <div className="contenairImg">
        <div id="img-prise">
          <div className="prise-en-charge">
            <h2>
              La prise en charge des enfants (le volet qui représente
              l’essentiel de notre activité) est structuré autour de trois axes
              principaux :
            </h2>
            <div className="priseEnChargeList">
              <ol>
                <li>
                  <b>L’évaluation</b> (réalisée dans un cadre aménagé à cet
                  effet, à l’aide d’outils spécifiques, principalement la CARS
                  et le PEP-3, et pour lesquels nous avons acquis le matériels
                  de passation, et sur lesquels notre personnel a suivi une
                  formation spécifique).
                </li>
                <li>
                  <b>Le travail avec les enfants :</b> s’effectue sur trois
                  volets, psychologique (le comportement et l’état de l’enfant),
                  orthophonique (la communication) et éducatif (les
                  apprentissages), A partir de l’évaluation, et en tenant compte
                  des demandes particulières des parents, l’équipe construit un
                  programme individualisé, et qui évoluera régulièrement
                  (environ tous les 3 mois). Ce programme psycho-ortho-éducatif,
                  propre à chaque enfant, est divisé en plusieurs objectifs à
                  travailler (par exemple : les compétences de communication ou
                  de jeu). Ces objectifs sont eux-mêmes divisés en
                  sous-objectifs permettant une avancée plus précise, étape par
                  étape.
                </li>
                <li>
                  <b>Le travail avec les parents :</b> un accompagnement
                  psychologique est mis en place dès que le diagnostic de
                  l’enfant est posé, les parents entrent ensuite dans un cycle
                  de formation et de guidance et il sont par ailleurs associés à
                  la confection du programme individualisé de leur enfant. Une
                  prise en charge psychologique est mise en place pour les
                  parents qui en ont besoin. Des groupes de parole sont aussi
                  organisés pour les mamans.
                </li>
              </ol>
            </div>
            <div id="my-txt">
              <p>
                La prise en charge de l’enfant est réalisée en lien avec sa
                famille. Elle comprend des réunions régulières avec les
                intervenants et les parents, des formations théoriques, ainsi
                que des guidances parentales dont l’objectif, plus pratique, est
                de soutenir les familles au quotidien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriseEnCharge;
