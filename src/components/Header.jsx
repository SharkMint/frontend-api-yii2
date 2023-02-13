import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-link" to="/" >Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link"  to="/client" >Client</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/perfil" >Perfil</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link"  to="/address" >Address</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header