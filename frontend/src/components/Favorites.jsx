import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
import "../style/Favorites.scss";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: []
    };
  }

  componentDidMount() {
    // change to current user in localhost
    const authorId = 2;
    axios.get(`http://localhost:5050/favs/${authorId}`).then(({ data }) => {
      this.setState({ fav: data });
    });
  }

  render() {
    const favs = this.state.fav;
    return (
      <Row className="centered favs-container">
        {favs.map((fav, key) => {
          return (
            <Col md="5" key={key} className="m-5">
              <p>{fav.title}</p>
              <p>{fav.content}</p>
            </Col>
          );
        })}
      </Row>
    );
  }
}
