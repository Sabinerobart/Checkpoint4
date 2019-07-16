import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "../style/Homepage.scss";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <Row className="homepage-container m-0">
        <Col md="5" className="text-right">
          <h1>
            Wildest
            <br />
            Circus
          </h1>
        </Col>
        <Col md="6" className="m-5 p-5">
          <div>
            <div className="separation" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              aliquam aspernatur, ipsum, reprehenderit quidem, ab provident sit
              sint tenetur id praesentium unde est quam dolor omnis reiciendis
              quasi! Ipsum, pariatur?
            </p>
          </div>
          <Link to="/prestations" className="CTA">
            Go now !
          </Link>
        </Col>
      </Row>
    );
  }
}
export default Homepage;
