import React from "react";
import {
  Card,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col
} from "reactstrap";
import { Heart } from "react-feather";
import axios from "axios";

class ActiCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    };
  }

  handleClick() {
    const currentUser = 2;
    const activityId = this.props.acti.id;
    if (!this.state.isLiked) {
      axios
        .post(`http://localhost:5050/like/${activityId}`, {
          idAuthor: currentUser
        })
        .then(({ data }) => {
          this.setState({
            isLiked: true
          });
        });
    } else {
      axios
        .put(`http://localhost:5050/like/${activityId}`, {
          idAuthor: currentUser
        })
        .then(({ data }) => {
          this.setState({
            isLiked: false
          });
        });
    }
  }

  render() {
    const acti = this.props.acti;
    const actiLiked = this.props.liked;
    const liked = actiLiked && actiLiked.indexOf(acti.id) !== -1 ? true : false;
    return (
      <Card>
        <CardBody className="d-flex p-0">
          <Col md="5" className="p-0">
            <CardTitle className="m-0">
              <img src={acti.image} alt="" />
              <h1>{acti.title}</h1>
            </CardTitle>
          </Col>
          <Col md="7" className="d-flex align-items-center p-5">
            <CardText>{acti.content}</CardText>
          </Col>
        </CardBody>
        <CardFooter>
          <Heart
            onClick={this.handleClick}
            className={liked ? "liked" : "notLiked"}
          />
        </CardFooter>
      </Card>
    );
  }
}

export default ActiCard;
