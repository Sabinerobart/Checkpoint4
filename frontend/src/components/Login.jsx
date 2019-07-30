import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Container
} from "reactstrap";
import "../style/Login.scss";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      profile: "",
      title: "",
      content: ""
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

  submitContent(e) {
    e.preventDefault();
    let { title, content } = this.state;
    axios
      .post(`http://localhost:5050/newContent`, {
        title,
        content
      })
      .then(({ data }) => {
        this.setState({
          title: data.title,
          content: data.content
        });
      });
  }

  componentDidMount() {
    if ("user" in localStorage) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.setState({ profile: user });
    }
  }

  render() {
    const user = this.state.profile;
    let disabled = true;
    return (
      <Container>
        <Row className="form-container">
          <Col xs="6">
            <Form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              <h1>Connecte-toi !</h1>
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
            {user.is_admin ? (
              <React.Fragment>
                <h1>Hello, {user.nickname} !</h1>
                <Form
                  onSubmit={e => {
                    this.submitContent(e);
                  }}
                >
                  <FormGroup>
                    <Label htmlFor="title">Titre</Label>
                    <Input
                      disabled={user.is_admin ? "" : disabled}
                      type="text"
                      name="title"
                      id="title"
                      value={this.state.title}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="content">Contenu</Label>
                    <Input
                      type="textarea"
                      disabled={user.is_admin ? "" : disabled}
                      name="content"
                      id="content"
                      style={{ height: "300px" }}
                      value={this.state.content}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </FormGroup>
                  <Button type="submit">Submit</Button>
                </Form>
              </React.Fragment>
            ) : (
              <h1>{user ? `Hello, ${user.nickname}` : "Hello, Stranger"}</h1>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
