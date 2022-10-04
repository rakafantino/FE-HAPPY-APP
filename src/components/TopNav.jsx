import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TopNav = ({ setSearch }) => {
  return (
    <>
      <Container fluid className="g-0 shadow">
        <Navbar expand="lg" className="bg-primary">
          <Container>
            <Navbar.Brand>
              <Link to="/community" className="fw-bold fs-5 text-white text-decoration-none">
                Happy App
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="ms-auto mt-lg-0 mt-2 w-75 mx-auto">
                <Form.Control type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
              </Form>
              <Nav className="my-2 my-lg-0 ms-auto py-3" style={{ maxHeight: "100px" }} navbarScroll>
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
