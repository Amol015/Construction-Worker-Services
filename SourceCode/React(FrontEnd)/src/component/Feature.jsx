import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";
import featureimage3 from "../images/feature_4.png";

export default function Feature() {
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
        ></FeatureBox>
        <FeatureBox
          image={featureimage1}
          title="Electrician"
          description="Switch/Socket Replacement Ceiling fan Installation 
          "
        ></FeatureBox>
        <FeatureBox
          image={featureimage2}
          title="Interior Designer"
          description="Living room/Bedroom Modular Kitchen Modern Washrooms
          "
        ></FeatureBox>
        <FeatureBox
          image={featureimage3}
          title="Carpenter"
          description="Bed Wardrobe Tables Chairs 
        "
        ></FeatureBox>
      </div>
    </div>
  );
}
