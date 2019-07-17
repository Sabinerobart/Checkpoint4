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
import { NavLink } from "react-router-dom";
import "../style/CircusNav.scss";
import { User, Star } from "react-feather";

class CircusNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" className="px-5">
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
              <NavLink to="/prestations" className="mx-2 px-3">
                Prestations
              </NavLink>
              <NavLink to="/favoris" className="mx-2 px-3">
                Favoris
              </NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <User />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
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
