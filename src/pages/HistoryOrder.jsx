import React from "react";
import { Card, Container, Stack } from "react-bootstrap";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";

function HistoryOrder() {
  return (
    <>
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
    </>
  );
}

export default HistoryOrder;
