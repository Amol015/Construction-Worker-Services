import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";
import featureimage3 from "../images/feature_4.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Features() {
  const navigate = useNavigate();
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox
          image={featureimage}
          title="Plumber"
          description="Grouting 
          Water Filter 
          Bath Fitting
          Tap Fitting
          "
          url="plumber"
        ></FeatureBox>
        <FeatureBox
          image={featureimage1}
          title="Electrician"
          description="Switch/Socket Replacement Ceiling fan Installation"
          url="electrician"
        ></FeatureBox>
        <FeatureBox
          image={featureimage2}
          title="Interior Designers"
          description="Living room/Bedroom Modular Kitchen Modern Washrooms"
          url="interior"
        ></FeatureBox>
        <FeatureBox
          image={featureimage3}
          title="Carpenter"
          description="Bed Wardrobe Tables Chairs 
        "
          url="carpenter"
        ></FeatureBox>
      </div>
    </div>
  );
}
