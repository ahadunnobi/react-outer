import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand ><Link to={'/'}>Navbar</Link></Navbar.Brand>
          <Nav className="ms-auto">
             <Nav.Link > <Link to={'/home'}>Home</Link></Nav.Link>
             <Nav.Link ><Link to={'/orderReview'}>Order Review</Link></Nav.Link>
             <Nav.Link ><Link to={'/'}>Pricing</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
