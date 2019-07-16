import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "../style/Homepage.scss";

class Homepage extends Component {
  render() {
    return (
      <Row className="homepage-container m-0">
        <Col md="4" className="text-right">
          <h1>
            Wildest
            <br />
            Circus
          </h1>
        </Col>
        <Col md="7" className="m-5 p-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          aliquam aspernatur, ipsum, reprehenderit quidem, ab provident sit sint
          tenetur id praesentium unde est quam dolor omnis reiciendis quasi!
          Ipsum, pariatur?
        </Col>
      </Row>
    );
  }
}
export default Homepage;
