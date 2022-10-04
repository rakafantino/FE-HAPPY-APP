import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, Modal, Stack } from 'react-bootstrap';
import CommunityNavbar from '../components/CommunityNavbar';
import { Footer } from '../components/Footer';
import HeaderCommunity from '../components/HeaderCommunity';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../styles/HomePage.css';

function CommunityEvent(props) {
  const [showMember, setShowMember] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);

  const handleCloseModalEvent = () => setShowAddEvent(false);
  const handleShowModalEvent = () => setShowAddEvent(true);

  const [communityEvent, setCommunityEvent] = useState([]);

  useEffect(() => {
    getCommunityEvent();
  }, []);

  const navigate = useNavigate();
  var axios = require('axios');

  const getCommunityEvent = () => {
    axios
      .get(`https://tugas.website/community/${Cookies.get('id')}/event`, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .then((res) => {
        console.log(res.data);
        setCommunityEvent(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  // const data = {
  //   productID: props.id,
  // };
  // const config = {
  //   headers: { Authorization: `Bearer ${props.token}` },
  // };
  // const url = 'http://13.57.49.65/carts';

  const handleDetailEvent = () => {
    navigate('/detailevent');
  };
  return (
    <>
      <HeaderCommunity handleShow={handleShow} />
      <CommunityNavbar />
      <Container className="min-vh-100">
        {/* This Button Below will Be Shown When The User Role Is The Admin Of The Community */}
        <Button className="mt-3" onClick={handleShowModalEvent}>
          Add Event
        </Button>
        {/* this can be map able */}
        {communityEvent.map((event) => {
          return (
            <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailEvent()}>
              <Card.Header className="fw-bold fs-5 bg-primary text-white">Event</Card.Header>
              <Card.Body className="d-flex">
                <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
                <Stack className="gap-2 ms-4 text-start">
                  <Card.Title className="fw-semibold fs-4 ">{event.title}</Card.Title>
                  <Card.Text className="fw-semibold fs-6 ">With supporting text below as a natural lead-in to additional content.</Card.Text>
                </Stack>
                <Stack className="justify-content-between ms-4 text-end">
                  <Card.Text className="fw-semibold fs-6 ">Jum'at, 26 Desember 2022</Card.Text>
                  <Card.Text className="fw-semibold fs-6 ">Harga Event : Rp.150.000</Card.Text>
                </Stack>
              </Card.Body>
            </Card>
          );
        })}

        <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailEvent()}>
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
