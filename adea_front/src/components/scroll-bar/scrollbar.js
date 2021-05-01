import "./scrollbar.css";
import ProgressBar from "react-scroll-progress-bar";
import React from "react";

const ScrollBar = () => {
  return (
    <div className={"myScroll"}>
      <ProgressBar bgcolor="#129DDE" />
    </div>
  );
};

export default ScrollBar;
