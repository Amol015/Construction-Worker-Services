import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FeatureBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2> {props.title} </h2>
        <p>{props.description}</p>

        <Link to={`/${props.url}`}>
          <Button variant="primary" size="sm" type="submit">
            Book Now
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
}
