import "./adhesion.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const Adhesion = () => {
  const classes = useStyles();
  return (
    <div className="contenairAdhesion">
      <div className="title-adhesion jumptarget" id="adhesion">
        <h2>Adhésion</h2>
      </div>
      <div className="adhesionImg">
        <div className="adhesionText">
          <h2>Pourquoi adhérer ?</h2>
          <p>
            Votre adhésion, comme vos dons permettent à l’association de
            poursuivre ses objectifs et d’accroitre le nombre de jeunes enfants
            pris en charge. Les adhésions constituent un apport financier
            important mais augmentent également le nombre de nos adhérents et
            donc notre force de proposition et de mobilisation. En devenant
            adhérent, votre bénéficierez de tarifs préférentiels pour assister à
            nos conférences, et serez tenus au courant de toutes les infos de
            l’associations et des évènements que nous organisons à travers notre
            newsletter. Votre adhésion ouvre également droit à la participation
            à notre assemblée générale. Pour adhérer cliquer.
          </p>

          <div className="buttonStyle">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhAtHV_UtvvW1x-OkKcKs0AzvM36sOsuAtTgWLAkoLge4h3Q/viewform?usp=sf_link"
              target="_blank"
              className={classes.root}
              variant="contained"
              style={{
                width: "8rem",
                height: "2.5rem",
                borderRadius: "1rem .5rem",
                backgroundColor: "#607371",
                color: "white",
              }}
            >
              Adhérer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adhesion;
