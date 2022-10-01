import React from "react";
import Navbar from "../component/Navbar";
import Contact from "./Contact";
import Feature from "./Feature";

function ServicePage() {
  return (
    <div>
      {" "}
      <Navbar></Navbar>
      <Feature></Feature>
      <Contact></Contact>
    </div>
  );
}

export default ServicePage;
