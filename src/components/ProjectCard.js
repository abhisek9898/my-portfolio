import React from "react";
import "./ProjectCard.css";

export default function ProjectCard() {
  return (
    <div className="about">
      <div className="left">
        <h3>Money Manager</h3>
        <p>A web application that helps you keep track of your expenses.</p>
        <button className="btn">
          <a href="https://money-manager-mocha.vercel.app/">Visit</a>
        </button>
      </div>
    </div>
  );
}
