import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
import "../style/Favorites.scss";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: [],
      profile: ""
    };
  }

  componentDidMount() {
    const authorId = JSON.parse(localStorage.getItem("user")).id;

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
              <h1>{fav.title}</h1>
              <div className="separation" />
              <p>{fav.content}</p>
              <div style={{ position: "relative" }}>
                <img src={fav.image} alt="cook" />
                <div className="overlay" />
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}
