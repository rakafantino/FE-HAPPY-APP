import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal, Stack } from "react-bootstrap";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeaderCommunity from "../components/HeaderCommunity";
import "../styles/HomePage.css";

function CommunityEvent() {
  const [showMember, setShowMember] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);

  const handleCloseModalEvent = () => setShowAddEvent(false);
  const handleShowModalEvent = () => setShowAddEvent(true);

  const [communityEvent, setCommunityEvent] = useState([]);
  const [communityDetails, setCommunityDetails] = useState({});

  useEffect(() => {
    getCommunityEvent();
  }, []);

  const navigate = useNavigate();
  var axios = require("axios");

  const getCommunityEvent = async () => {
    const res = await axios.get(`https://tugas.website/community/${Cookies.get("id")}/event`, {
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });

    setCommunityEvent(res.data.event);
    setCommunityDetails(res.data);
  };

  const handleDetailEvent = () => {
    navigate("/detailevent");
  };

  console.log(communityEvent);

  return (
    <>
      <HeaderCommunity handleShow={handleShow} communityDetails={communityDetails} />
      <CommunityNavbar />
      <Container className="min-vh-100">
        {/* This Button Below will Be Shown When The User Role Is The Admin Of The Community */}
        <Button className="mt-3" onClick={handleShowModalEvent}>
          Add Event
        </Button>
        {/* this can be map able */}
        {communityEvent ? (
          <>
            {communityEvent.map((event) => {
              return (
                <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailEvent()} key={event.id}>
                  <Card.Header className="fw-bold fs-5 bg-primary text-white">Event</Card.Header>
                  <Card.Body className="d-flex">
                    <Card.Img variant="left" src={event.logo} className="img-fluid rounded ms-3" />
                    <Stack className="gap-2 ms-4 text-start">
                      <Card.Title className="fw-semibold fs-4 ">{event.title}</Card.Title>
                      <Card.Text className="fw-semibold fs-6 ">{event.descriptions}</Card.Text>
                    </Stack>
                    <Stack className="justify-content-between ms-4 text-end">
                      <Card.Text className="fw-semibold fs-6 ">
                        <Moment format="DD-MM-YYYY">{event.date}</Moment>
                      </Card.Text>
                      <Card.Text className="fw-semibold fs-6 ">Harga Event : Rp.{event.price}</Card.Text>
                    </Stack>
                  </Card.Body>
                </Card>
              );
            })}
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <h5>There's No Event In Here</h5>
            </div>
          </>
        )}
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
      <Modal show={showAddEvent} onHide={handleCloseModalEvent}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput1">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Event Name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput2">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput3">
              <Form.Label>Event Time</Form.Label>
              <Form.Control type="time" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput4">
              <Form.Label>Event HTM Price</Form.Label>
              <Form.Control type="text" placeholder="Input Price" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalEvent}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModalEvent}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommunityEvent;
