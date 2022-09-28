import React from "react";
import { Card, Container, Stack } from "react-bootstrap";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { TopNav } from "../components/TopNav";

function HomePage() {
  return (
    <>
      <TopNav />
      <NavBar />
      <Container className="min-vh-100">
        <main>
          <h3 className="text-center mt-3">Community List</h3>
          <Card className="text-center mt-3 shadow">
            <Card.Header className="fw-bold fs-5 bg-primary text-white">Community Title</Card.Header>
            <Card.Body className="d-flex">
              <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
              <Stack className="gap-2">
                <Card.Text className="fw-semibold fs-6 pe-4 me-4">With supporting text below as a natural lead-in to additional content.</Card.Text>
              </Stack>
            </Card.Body>
            <Card.Footer className="text-center text-md-end">Jumlah Anggota: 28</Card.Footer>
          </Card>

          <Card className="text-center mt-3 shadow">
            <Card.Header className="fw-bold fs-5 bg-primary text-white">Community Title</Card.Header>
            <Card.Body className="d-flex">
              <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
              <Stack className="gap-2">
                <Card.Text className="fw-semibold fs-6 pe-4 me-4 d-block">With supporting text below as a natural lead-in to additional content.</Card.Text>
              </Stack>
            </Card.Body>
            <Card.Footer className="text-center text-md-end">Jumlah Anggota: 28</Card.Footer>
          </Card>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
