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

function InteriorPage() {
  return (
    // <Navbar></Navbar>
    <Container style={{ backgroundColor: "white" }}>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <h1>Interior</h1>
        </Col>
        <Col xs={6} md={4}>
          <h1>Six Star Services </h1>
          Assured Warranty <br /> Best Rates <br /> Door Step delivery in Pune
        </Col>
        <br />
        <br></br>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        {/* <Col xs={6}> */}
        <Col>
          <br />
          <br />
          <br /> <h1>Service Providers</h1>
          <br />
          <b>
            Raju Mishraji<br></br>
          </b>
          <b>
            Rs 499 <br /> Experience : 4years
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
            Rahul Sharmaji<br></br>
          </b>
          <b>
            Rs 599 <br /> Experience : 7years
          </b>
          <br />
          <Button variant="primary" size="sm" type="submit" href="./bookslot">
            Book Now
          </Button>{" "}
          {/* <br />
          <a href="./bookslot">View Details</a> */}
          <hr />
          <b>
            mayur Verma<br></br>
          </b>
          <b>
            Rs 399 <br /> Experience : 3years
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
            Ramesh hira<br></br>
          </b>
          <b>
            Rs 449 <br /> Experience : 6 years
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
            Govind Meshram <br></br>
          </b>
          <b>
            Rs 550 <br /> Experience : 15years
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
            Varun Mishra<br></br>
          </b>
          <b>
            Rs 459 <br /> Experience : 5years
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

export default InteriorPage;
