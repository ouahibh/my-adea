import "./weAndOurGoals.css";
import React from "react";
import { Card } from "react-card-component";
const WeAndOurGoals = () => {
  return (
    <div className="corps-contenair">
      <section className="whoAreWe">
        <div className="titleW jumptargetW" id="quiSommeNous">
          <h2>Qui sommes nous?</h2>
        </div>
        <div className="myText">
          <p>
            Créée durant l’année 2012 par des parents d’enfants autistes et des
            psychologues bénévoles, l’association d’aide aux enfants autistes
            ‘’d’un monde à l’autre’’ œuvre depuis pour une prise en charge
            efficiente des enfants autistes et de leurs familles. L’équipe
            dirigeante et l’équipe thérapeutique (psychologues, orthophonistes
            et éducatrices) travaillent pour la mise en place d’un modèle de
            prise en charge basé sur les recherches scientifiques les plus
            récentes.
          </p>
        </div>
        <h1 id="memberTitle">Les membres de l'équipe thérapeutique</h1>
      </section>
      <section id="imgCadreCarte" className="presentationCard">
        <div className="contenairCard">
          <div className="contenairCard2">
            <div className="cardStyle" id="card1">
              <Card
                glass
                glassOption={{ blur: 5, transparency: 0.2 }}
                background={"white"}
                hoverType={"up"}
                bordered
              >
                <div id="img-card1"></div>
              </Card>
            </div>
            <div className="cardStyle" id="card2">
              <Card
                glass
                glassOption={{ blur: 5, transparency: 0.2 }}
                background={"white"}
                hoverType={"up"}
                bordered
              >
                <div id="img-card2"></div>
              </Card>
            </div>
            <div className="cardStyle" id="card3">
              <Card
                glass
                glassOption={{ blur: 5, transparency: 0.2 }}
                background={"white"}
                hoverType={"up"}
                bordered
              >
                <div id="img-card3"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="ourGoals">
        <div className="titleGoals jumptarget" id="notreMission">
          <h2>Nos objectifs</h2>
        </div>
        <div className="notreMissionImg">
          <div id="img">
            <div className="myCards">
              <div className="objectifCard">
                <Card
                  background={"#121226"}
                  style={{
                    color: "white",
                    "text-align": "justify",
                    padding: "1rem",
                    "line-height": "1.8em",
                  }}
                  bordered
                  hoverType={"zoom"}
                >
                  <h2 style={{ paddingBottom: "1rem" }}>Objectif global :</h2>
                  <p>
                    Car nous avons la certitude que l’autisme n’est pas une
                    fatalité, l’objectif premier de notre association reste
                    l’inclusion des enfants autistes dans l’école et dans la
                    société.
                  </p>
                </Card>
              </div>
              <div className="missionCard">
                <Card
                  background={"#121226"}
                  style={{
                    color: "white",
                    "text-align": "justify",
                    padding: "1rem",
                    "line-height": "1.4em",
                  }}
                  bordered
                  hoverType={"zoom"}
                  id="missionCardId"
                >
                  <h2 style={{ paddingBottom: "1rem" }}>Objectifs :</h2>

                  <span>
                    <ol>
                      <li>La prise en charge des enfants avec autismes.</li>
                      <li>
                        L’accompagnement psychologique des parents, leurs
                        formations et leurs guidances.
                      </li>
                      <li>
                        La formation des professionnel(le)s (Psychologues,
                        orthophonistes, AVS, Educateurs).
                      </li>
                      <li>
                        La sensibilisation des autorités publiques, du milieu
                        médico-scolaire et de la société civile à l’autisme, et
                        à l'extrême importance de l’inclusion des personnes
                        autistes dans les milieux ordinaires.
                      </li>
                    </ol>
                  </span>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeAndOurGoals;
