import React, { Component } from "react";
import {Navbar,Nav,Container} from "react-bootstrap"

class Barra extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">TELclassroombooking</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/215">Horario Sala 215</Nav.Link>
              <Nav.Link href="/213">Horario Sala 213</Nav.Link>
              <Nav.Link href="/Reserva">Realizar Reserva</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Barra;