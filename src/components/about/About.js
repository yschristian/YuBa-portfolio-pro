import React from "react";
import "./About.css";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card"></div>
      </div>
      <div className="a-right">
        <h1 className="a-title"> About me</h1>
        <p className="a-sub">
          I'm a web developer with a passion for creating beautiful and
          intuitive user experiences.
        </p>
        <p className="a-desc">
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit
          amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
      </div>
    </div>
  );
}

export default About;
