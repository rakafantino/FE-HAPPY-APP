import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Nav className="justify-content-evenly mt-4 border container py-2" activeKey="/">
        <Nav.Item>
          <Link to="/homepage" className="text-decoration-none">
            Community
          </Link>
        </Nav.Item>
        <div className="vr" />
        <Nav.Item>
          <Link to="/event" className="text-decoration-none">
            Event
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
