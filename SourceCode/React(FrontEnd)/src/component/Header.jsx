import React from "react";
import Navbar from "../component/Navbar";

export default function Header() {
  return (
    <div id="main">
      <Navbar></Navbar>
      <div className="name">
        <h1>
          <span>
            <b>Construction Worker Services </b>
          </span>{" "}
          Six Star Services
        </h1>
        <p className="details">Book Your Services at your finger Tips</p>
        <a href="#" className="cv-btn">
          Explore More
        </a>
      </div>
    </div>
  );
}
