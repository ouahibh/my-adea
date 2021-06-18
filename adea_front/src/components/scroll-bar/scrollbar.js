import "./scrollbar.css";
import ProgressBar from "react-progressbar-on-scroll";
import React from "react";

const ScrollBar = () => {
  return (
    <div className={"myScroll"}>
      <ProgressBar height={5} bgcolor="#129DDE"  />
    </div>
  );
};

export default ScrollBar;
