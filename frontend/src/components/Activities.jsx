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
      actiLiked: null,
      profile: ""
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5050/activities`).then(({ data }) => {
      this.setState({
        infos: data
      });
    });

    if ("user" in localStorage) {
      const authorId = JSON.parse(localStorage.getItem("user")).id;
      this.setState({ profile: authorId });
    }

    const authorId = this.state.profile;
    axios.get(`http://localhost:5050/likes/${authorId}`).then(({ data }) => {
      this.setState({ actiLiked: data });
    });
  }

  render() {
    const activities = this.state.infos;
    const actiLiked = this.state.actiLiked;
    console.log(this.state.profile);
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
