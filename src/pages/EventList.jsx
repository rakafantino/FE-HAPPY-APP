import React, { useEffect, useState } from "react";
import { Card, Container, Stack } from "react-bootstrap";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { TopNav } from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import axios from "axios";

function EventList() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    axios
      .get("https://tugas.website/event")
      .then((response) => {
        setEvents(response.data.event);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDetailEvent = () => {
    navigate("/detailevent");
  };

  return (
    <>
      <TopNav />
      <NavBar />
      <Container className="min-vh-100">
        <main>
          <h3 className="text-center mt-3">Event List</h3>
          {events.map((event) => {
            return (
              <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailEvent()} key={event.id}>
                <Card.Header className="fw-bold fs-5 bg-primary text-white">Event</Card.Header>
                <Card.Body className="d-flex">
                  <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
                  <Stack className="gap-2 ms-4 text-start">
                    <Card.Title className="fw-semibold fs-4 ">{event.title}</Card.Title>
                    <Card.Text className="fw-semibold fs-6 ">{event.descriptions}</Card.Text>
                  </Stack>
                  <Stack className="justify-content-between ms-4 text-end">
                    <Card.Text className="fw-semibold fs-6 ">{event.date}</Card.Text>
                    <Card.Text className="fw-semibold fs-6 ">Harga Event : Rp.{event.price}</Card.Text>
                  </Stack>
                </Card.Body>
              </Card>
            );
          })}
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default EventList;
