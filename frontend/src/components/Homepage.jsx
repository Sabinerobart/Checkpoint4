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
              Un cirque est une troupe d'artistes, traditionnellement
              itinérante, qui comporte le plus souvent des acrobates, propose
              des numéros de dressage et de domptage d’animaux et donne des
              spectacles de clowns et des tours de magie. Plus généralement au
              XXIe siècle, le cirque est un spectacle vivant populaire organisé
              autour d’une scène circulaire. Le terme cirque vient du latin
              circus, en référence à une enceinte circulaire.
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
