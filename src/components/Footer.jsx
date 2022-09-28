import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Container fluid className="bg-primary">
        <footer>
          <Navbar>
            <Container>
              <Link to="/homepage">
                <Navbar.Brand className="fw-bold fs-5 text-white">Happy App</Navbar.Brand>
              </Link>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="text-white fw-semibold fs-6">Copyright © 2022</Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </footer>
      </Container>
    </>
  );
};
