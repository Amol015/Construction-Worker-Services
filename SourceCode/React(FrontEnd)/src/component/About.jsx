import React from "react";

export default function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>

        <h4>{props.heading}</h4>
        <p>{props.content}</p>

        {/* <button>{props.button}</button> */}
      </div>
    </div>
  );
}
