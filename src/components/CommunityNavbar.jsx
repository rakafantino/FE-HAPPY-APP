import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function CommunityNavbar() {
  return (
    <Nav className="justify-content-evenly mt-4 border container py-2" activeKey="/">
      <Nav.Item>
        <Link to="/community/event" className="text-decoration-none">
          Event
        </Link>
      </Nav.Item>
      <div className="vr" />
      <Nav.Item>
        <Link to="/:id" className="text-decoration-none">
          Feed
        </Link>
      </Nav.Item>
      <div className="vr" />
      <Nav.Item>
        <Link to="/community/store" className="text-decoration-none">
          Store
        </Link>
      </Nav.Item>
      <div className="vr" />
      <Nav.Item>
        <Link to="/community/cart" className="text-decoration-none">
          Cart
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default CommunityNavbar;
