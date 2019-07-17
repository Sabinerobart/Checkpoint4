import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "../style/CircusNav.scss";
import { User, Star } from "react-feather";

class CircusNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      profile: null
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onClick() {
    localStorage.removeItem("user");
  }

  componentDidMount() {
    if ("user" in localStorage) {
      const authorId = JSON.parse(localStorage.getItem("user")).id;
      this.setState({ profile: authorId });
    }
  }

  render() {
    const user = this.state.profile;
    return (
      <div>
        <Navbar expand="md" dark className="px-5">
          <NavbarBrand href="/">
            <Row className="centered">
              <Col xs="6" className="d-flex centered p-0">
                <Star />
              </Col>
              <Col xs="6">
                Wildest
                <br />
                Circus
              </Col>
            </Row>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto align-items-center" navbar>
              <NavLink
                to="/prestations"
                className="mx-2 px-3 hvr-underline-from-left"
              >
                Prestations
              </NavLink>
              {user ? (
                <NavLink
                  to="/favoris"
                  className="mx-2 px-3 hvr-underline-from-left"
                >
                  Favoris
                </NavLink>
              ) : null}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <User />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/connexion">Connexion</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <a
                      href="/connexion"
                      onClick={() => {
                        this.onClick();
                      }}
                    >
                      Déconnexion
                    </a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CircusNav;
