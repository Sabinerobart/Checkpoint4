import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import "../style/Login.scss";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      profile: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { nickname } = this.state;
    const { history } = this.props;
    axios
      .post(`http://localhost:5050/login`, {
        nickname
      })
      .then(({ data }) => {
        this.setState({
          nickname: data.nickname
        });
        localStorage.setItem("user", JSON.stringify(data));
        history.push("/");
      });
  }

  componentDidMount() {
    if ("user" in localStorage) {
      const user = JSON.parse(localStorage.getItem("user")).nickname;
      this.setState({ profile: user });
    }
  }

  render() {
    const user = this.state.profile;
    return (
      <Row className="form-container centered">
        <Col xs="6">
          <Form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <h2>Connecte-toi !</h2>
            <div className="trait" />

            <FormGroup>
              <Label htmlFor="nickname">Pseudo</Label>
              <Input
                type="text"
                name="nickname"
                id="nickname"
                value={this.state.nickname}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Button type="submit">Submit</Button>
            </FormGroup>
          </Form>
        </Col>
        <Col xs="6">
          <p>{user ? `Hello, ${user}` : null}</p>
        </Col>
      </Row>
    );
  }
}

export default Login;
