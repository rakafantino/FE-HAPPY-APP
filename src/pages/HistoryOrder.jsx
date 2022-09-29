import React, { useState } from "react";
import { Button, Card, Container, Form, Modal, Stack } from "react-bootstrap";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeaderCommunity from "../components/HeaderCommunity";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

function HistoryOrder() {
  const [showMember, setShowMember] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);

  return (
    <>
      <HeaderCommunity handleShow={handleShow} />
      <CommunityNavbar />
      <Container className="min-vh-100">
        <h3 className="text-center mt-3">History Order</h3>
        {/* this can be map able */}
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">Order</Card.Header>
          <Card.Body className="d-flex">
            <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
            <Stack className="gap-2 ms-4 text-start">
              <Card.Title className="fw-semibold fs-4 ">Item Name</Card.Title>
              <Card.Text className="fw-semibold fs-6 ">Buyer Name: Raka</Card.Text>
            </Stack>
            <Stack className="justify-content-between ms-4 text-end">
              <Card.Text className="fw-semibold fs-6 ">Price : Rp.150.000</Card.Text>
            </Stack>
          </Card.Body>
        </Card>
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">Order</Card.Header>
          <Card.Body className="d-flex">
            <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
            <Stack className="gap-2 ms-4 text-start">
              <Card.Title className="fw-semibold fs-4 ">Item Name</Card.Title>
              <Card.Text className="fw-semibold fs-6 ">Buyer Name: Raka</Card.Text>
            </Stack>
            <Stack className="justify-content-between ms-4 text-end">
              <Card.Text className="fw-semibold fs-6 ">Price : Rp.150.000</Card.Text>
            </Stack>
          </Card.Body>
        </Card>
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">Order</Card.Header>
          <Card.Body className="d-flex">
            <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
            <Stack className="gap-2 ms-4 text-start">
              <Card.Title className="fw-semibold fs-4 ">Item Name</Card.Title>
              <Card.Text className="fw-semibold fs-6 ">Buyer Name: Raka</Card.Text>
            </Stack>
            <Stack className="justify-content-between ms-4 text-end">
              <Card.Text className="fw-semibold fs-6 ">Price : Rp.150.000</Card.Text>
            </Stack>
          </Card.Body>
        </Card>
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
}

export default HistoryOrder;
