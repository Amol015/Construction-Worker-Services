import React from "react";
import { Button } from "react-bootstrap";

export default function FeatureBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2> {props.title} </h2>
        <p>{props.description}</p>
        <Button variant="primary" size="sm" type="submit" href="./login">
          Book Now
        </Button>{" "}
      </div>
    </div>
  );
}
