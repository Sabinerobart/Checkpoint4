import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import "../style/Activities.scss";
import axios from "axios";
import ActiCard from "./ActiCard";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: [],
      actiLiked: null
    };
  }

  componentDidMount() {
    const authorId = 2;
    axios.get(`http://localhost:5050/activities`).then(({ data }) => {
      this.setState({
        infos: data
      });
    });

    axios.get(`http://localhost:5050/likes/${authorId}`).then(({ data }) => {
      this.setState({ actiLiked: data });
    });
  }

  render() {
    const activities = this.state.infos;
    const actiLiked = this.state.actiLiked;

    return (
      <Container>
        <Row className="activities-container align-items-center">
          {activities.map((acti, key) => {
            return <ActiCard acti={acti} key={key} liked={actiLiked} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default Activities;
