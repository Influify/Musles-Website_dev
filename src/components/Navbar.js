import React, { useContext } from "react";
import { Container, Anchor, Icon } from "atomize";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link className="text-light" href="/">
              Home <Icon name="Home" color="white" size="20px" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="/about">
              About <Icon name="Info" color="white" size="20px" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="/contact">
              Contact <Icon name="Email" color="white" size="20px" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="/merch">
              Merch <Icon name="Store" color="white" size="20px" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
