import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/iissn-logo.png";

const TopNav = () => {
  return (
    <>
      <Navbar bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" height={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="top-nav">
              <Nav.Item className="mx-3 my-1">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  to="/about"
                >
                  About
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-3 my-1">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  to="/registration"
                >
                  Registration
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-3 my-1">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
