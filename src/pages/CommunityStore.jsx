import React, { useState } from "react";
import "../styles/CommunityStore.css";
import ProductCard from "../components/ProductCard";
import { Footer } from "../components/Footer";
import CommunityNavbar from "../components/CommunityNavbar";
import HeaderCommunity from "../components/HeaderCommunity";
import { Button, Card, Container, Modal } from "react-bootstrap";

const CommunityStore = () => {
  const [showMember, setShowMember] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);

  return (
    <>
      <HeaderCommunity handleShow={handleShow} />
      <CommunityNavbar />
      <Container className="contcs min-vh-100">
        <ProductCard />
      </Container>
      <Footer />
      <Modal show={showMember} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>List Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Raka</h5>
          <h5>Doffa</h5>
          <h5>Amin</h5>
          <h5>Nawi</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommunityStore;
