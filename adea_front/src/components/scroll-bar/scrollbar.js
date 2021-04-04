import "./scrollbar.css";
import ProgressBar from "react-scroll-progress-bar";
import React from "react";

const ScrollBar = () => {
  return (
    <div className={"myScroll"}>
      <ProgressBar bgcolor="#0000FF" />
    </div>
  );
};

export default ScrollBar;
