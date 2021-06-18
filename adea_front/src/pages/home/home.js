import "./home.css";
import React from "react";
import ScrollBar from "../../components/scroll-bar/scrollbar";
import Menu from "../../components/menu/menu";
import Slider from "../../components/slider2/slider";
import Topnavbar from "../../components/top-navbar/topnabar";
import Acceuil from "../../components/accueil/accueil";
import WeAndOurGoals from "../../components/weAndOurGoals/weAndOurGoals";
import PriseEnCharge from "../../components/priseEnCharge/priseEnCharge";
import Adhesion from "../../components/adhesion/adhesion";
import Contact from "../../components/contact/contact";
import Foot from "../../components/foot/foot";

const Home = () => {
  return (
    <>
      <ScrollBar />
      <div className="myBody" id="accueil">
        <Topnavbar />
        <div className="banner">
          <Slider />
        </div>
        <div className="position-sticky active">
          <Menu />
        </div>
        <div className="acceuil">
          <Acceuil />
        </div>
        <WeAndOurGoals />
        <PriseEnCharge/>
        <Adhesion/>
        <Contact/>
        <Foot/>
      </div>
    </>
  );
};

export default Home;
