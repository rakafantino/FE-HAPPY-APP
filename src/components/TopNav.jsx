import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export const TopNav = () => {
  return (
    <>
      <Container fluid className="g-0 shadow">
        <Navbar expand="lg" className="bg-primary">
          <Container>
            <Navbar.Brand href="/" className="fw-bold fs-5 text-white">
              Happy App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="ms-auto mt-lg-0 mt-2">
                <Form.Control type="search" placeholder="Search" aria-label="Search" xs={7} />
                <Button variant="outline-success d-none">Search</Button>
              </Form>
              <Nav className="my-2 my-lg-0 ms-auto" style={{ maxHeight: "100px" }} navbarScroll>
                <Link to="/profile" className="text-white text-center">
                  <FontAwesomeIcon icon={faCircleUser} size="2x" bounce />
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};
