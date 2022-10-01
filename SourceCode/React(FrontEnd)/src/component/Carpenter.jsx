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

function CarpenterPage() {
  return (
    // <Navbar></Navbar>
    <Container style={{ backgroundColor: "white" }}>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <h1>Carpenters</h1>
        </Col>
        <Col xs={6} md={4}>
          <h1>Six Star Services </h1>
          Assured Warranty <br /> Best Rates <br /> Door Step delivery in Pune
        </Col>
        <br />
        <br></br>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={4} md={4}>
          <h6 style={{ textAlign: "inherit" }}> BED </h6>
          <br />
          <img
            src="data:image/jpeg;base64,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"
            alt="Bed"
          />
        </Col>
        <Col xs={2} md={2}>
          <h6>CupBoard and Wardrobe</h6>
          <img src="data:image/jpeg;base64,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"></img>
        </Col>
        {/* <Col xs={6} md={4}>
          Tables and Chairs
          <img src="./images/background.png"></img>
        </Col> */}
      </Row>

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
            Rs 499 <br /> Experience : 5years
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
            Bajirao Salunkhe<br></br>
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

export default CarpenterPage;
