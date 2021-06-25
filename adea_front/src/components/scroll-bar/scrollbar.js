import "./scrollbar.css";
import ProgressBar from "react-progressbar-on-scroll";
import React from "react";

const ScrollBar = () => {
  return (
    <div className={"myScroll"}>
      <ProgressBar
        height={7}
        color="#94dde2"
        gradient={true}
        gradientColor="#225fba"
      />
    </div>
  );
};

export default ScrollBar;
