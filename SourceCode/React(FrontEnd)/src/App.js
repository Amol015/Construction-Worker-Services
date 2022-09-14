import React, { useState } from "react";
import Component1 from "./component1";
import Appli from "./App3";
import { Route, Router } from "react-router";
import Applications from "./App4";
import Register from "./registercws";
import App2 from "./App2";
import Header from "./component/Header";
import Feature from "./component/Feature";
import About from "./component/About";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";


function App() {
  return (
    <div>

      {/* // <Applications></Applications>
    // <App2></App2>
    // <Register></Register>
    // <TextForm></TextForm> */}
      <Header></Header>
      <Feature />
      <About image={aboutimage} title='Services at your finger Tips' button='Book your Service'></About>
      <About image={aboutimage1} title='About Us' button='Know more'></About>
    </div>
  );
}

export default App;

