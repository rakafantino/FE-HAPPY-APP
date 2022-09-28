import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <Container fluid className="bg-primary">
        <footer>
          <Navbar>
            <Container>
              <Navbar.Brand href="/homepage" className="fw-bold fs-5 text-white">
                Happy App
              </Navbar.Brand>
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
