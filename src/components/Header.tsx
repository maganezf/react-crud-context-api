import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';

const Header: React.FC = () => {
  return (
    <Navbar color="dark" dark className="rounded">
      <Container>
        <NavbarBrand href="/">My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
