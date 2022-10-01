import React from "react";
import Navbar from "../component/Navbar";
import {Link} from 'react-router-dom';
//import ServicePage from 'ServicePage';

export default function Header() {
  return (
    <div id="main">
      <Navbar></Navbar>
      <div className="name">
        <h1>
          <span>
            <h2>
              <b>Six Star Services</b>
            </h2>{" "}
          </span>{" "}
        </h1>

        <p className="details">Book Your Services at your finger Tips</p>
        <a href="#" className="cv-btn" >
          Explore More
        </a>
        <Link to="./ServicePage">
          
     <button type="button">
          Click Me!
     </button>
 </Link>
      </div>
    </div>
  );
}
