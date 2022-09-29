import React from 'react';
import { Card, Container, Stack } from 'react-bootstrap';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';
import { TopNav } from '../components/TopNav';
import { useNavigate } from 'react-router-dom';

function EventList() {
  const navigate = useNavigate();

  const handleDetailEvent = () => {
    navigate('/detailevent');
  };

  return (
    <>
      <TopNav />
      <NavBar />
      <Container className="min-vh-100">
        <main>
          <h3 className="text-center mt-3">Event List</h3>
          <Card className="text-center mt-3 shadow" onClick={() => handleDetailEvent()}>
            <Card.Header className="fw-bold fs-5 bg-primary text-white">Event</Card.Header>
            <Card.Body className="d-flex">
              <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
              <Stack className="gap-2 ms-4 text-start">
                <Card.Title className="fw-semibold fs-4 ">Event Title</Card.Title>
                <Card.Text className="fw-semibold fs-6 ">With supporting text below as a natural lead-in to additional content.</Card.Text>
              </Stack>
              <Stack className="justify-content-between ms-4 text-end">
                <Card.Text className="fw-semibold fs-6 ">Jum'at, 26 Desember 2022</Card.Text>
                <Card.Text className="fw-semibold fs-6 ">Harga Event : Rp.150.000</Card.Text>
              </Stack>
            </Card.Body>
          </Card>
          <Card className="text-center mt-3 shadow" onClick={() => handleDetailEvent()}>
            <Card.Header className="fw-bold fs-5 bg-primary text-white">Event</Card.Header>
            <Card.Body className="d-flex">
              <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
              <Stack className="gap-2 ms-4 text-start">
                <Card.Title className="fw-semibold fs-4 ">Event Title</Card.Title>
                <Card.Text className="fw-semibold fs-6 ">With supporting text below as a natural lead-in to additional content.</Card.Text>
              </Stack>
              <Stack className="justify-content-between ms-4 text-end">
                <Card.Text className="fw-semibold fs-6 ">Jum'at, 26 Desember 2022</Card.Text>
                <Card.Text className="fw-semibold fs-6 ">Harga Event : Rp.150.000</Card.Text>
              </Stack>
            </Card.Body>
          </Card>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default EventList;
