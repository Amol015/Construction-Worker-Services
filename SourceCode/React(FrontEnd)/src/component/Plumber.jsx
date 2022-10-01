import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

function PlumberPage() {
  return (
    // <Navbar></Navbar>
    <Container style={{ backgroundColor: "white" }}>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <h1>Plumber</h1>
        </Col>
        <Col xs={6} md={4}>
          <h1>Six Star Services </h1>
          Assured Warranty <br /> Best Rates <br /> Door Step delivery in Pune
        </Col>
        <br />
        <br></br>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      {/* <Row>
        <Col xs={4} md={4}>
          <h6 style={{ textAlign: "inherit" }}> Fittings </h6>
          <br />
          <img src="./images/Fitting.png" alt="Fitting" />
        </Col>
        <Col xs={2} md={2}>
          <h6>Leak Repairs</h6>
          <img src="./images/LeakRepair.png"></img>
        </Col>
        <Col xs={6} md={4}>
          Pipe Repair and Replacement
          <img src="./images/PipeRepair.png"></img>
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        {" "}
        {/* <Col xs={6}> */}
        <Col>
          <br />
          <br />
          <br /> <h1>Service Providers</h1>
          <br />
          <b>
            Rahul <br></br>
          </b>
          <b>
            Rs 700 <br /> Experience : 8years
          </b>
          <br />
          <Button variant="primary" size="sm" type="submit" href="./bookslot">
            Book Now
          </Button>{" "}
          {/* <br />
          Installation of one wall decor item <br />
          <a href="./bookslot">View Details</a> */}
          <hr />
          <b>
            Abhishek <br></br>
          </b>
          <b>
            Rs 499 <br /> Experience : 3years
          </b>
          <br />
          <Button variant="primary" size="sm" type="submit" href="./bookslot">
            Book Now
          </Button>{" "}
          {/* <br />
          <a href="./bookslot">View Details</a> */}
          <hr />
          <b>
            Mukesh <br></br>
          </b>
          <b>
            Rs 599 <br /> Experience : 5years
          </b>
          <br />
          <Button variant="primary" size="sm" type="submit" href="./bookslot">
            Book Now
          </Button>{" "}
          {/* <br />
          Installation/ Replacement/repair of two cupborad hinges <br />
          <a href="./bookslot">View Details</a> */}
          <hr />
          <b>
            Abhinav <br></br>
          </b>
          <b>
            Rs 999 <br /> Experience : 10 years
          </b>
          <br />
          <Button variant="primary" size="sm" type="submit" href="./bookslot">
            Book Now
          </Button>{" "}
          {/* <br />
          Installation of 1 curtain rod with 2 brackets <br />
          <a href="./bookslot">View Details</a> */}
          <hr />
          <b>
            Govind <br></br>
          </b>
          <b>
            Rs 499 <br /> Experience : 3 years
          </b>
          <br />
          <Button variant="primary" size="sm" type="submit" href="./bookslot">
            Book Now
          </Button>{" "}
          {/* <br />
          Installation of one clothes' hanger <br></br>
          <a href="./bookslot">View Details</a> */}
          <hr />
          <b>
            Varun <br></br>
          </b>
          <b>
            Rs 599 <br /> Experience : 5years
          </b>
          <br />
          <Button variant="primary" size="sm" type="submit" href="./bookslot">
            Book Now
          </Button>{" "}
          {/* <br />
          Repair of bed mattress support(any kind of bed) <br></br>
<a href="./bookslot">View Details</a>
          <hr /> */}
        </Col>
        <Col xs={6}></Col>
      </Row>
    </Container>
  );
}

export default PlumberPage;
