import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal, Stack } from "react-bootstrap";
import Moment from "react-moment";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeaderCommunity from "../components/HeaderCommunity";
import { TopNav } from "../components/TopNav";
import "../styles/HomePage.css";

function CommunityEvent() {
  const [showMember, setShowMember] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);
  const handleCloseModalEvent = () => setShowAddEvent(false);
  const handleShowModalEvent = () => setShowAddEvent(true);
  const [communityMembers, setCommunityMembers] = useState([]);
  const [communityEvent, setCommunityEvent] = useState([]);
  const [communityDetails, setCommunityDetails] = useState({});
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    title: "",
    descriptions: "",
    date_event: "",
    price: "",
    location: "",
  });

  
  const getCommunityEvent = async () => {
    const res = await axios.get(`https://tugas.website/community/${Cookies.get("id")}/event`, {
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });

    setCommunityEvent(res.data.event);
    setCommunityDetails(res.data);
    console.log(res);
  };

  const getCommunityMembers = async () => {
    await axios
      .get(`https://tugas.website/community/members/${Cookies.get("id")}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setCommunityMembers(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDetailEvent = (id) => {
    navigate(`/detailevent/${id}`, {
      state: {
        id: id,
      },
    });
  };

  const addEvent = () => {
    const { title, descriptions, date_event, price, location } = eventData;
    axios
      .post(
        `https://tugas.website/community/${Cookies.get("id")}/event`,
        {
          title,
          descriptions,
          date_event,
          price: parseInt(price),
          location,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then((res) => {
        getCommunityEvent();
        setShowAddEvent(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCommunityEvent();
    getCommunityMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopNav />
      <HeaderCommunity handleShow={handleShow} communityDetails={communityDetails} />
      <CommunityNavbar />
      <Container className="min-vh-100">
        {/* This Button Below will Be Shown When The User Role Is The Admin Of The Community */}
        {communityDetails.role === "admin" ? (
          <div className="d-flex justify-content-center my-3">
            <Button onClick={handleShowModalEvent}>Add Event</Button>
          </div>
        ) : (
          <></>
        )}

        {/* this can be map able */}
        {communityEvent ? (
          <>
            {communityEvent.map((event) => {
              return (
                <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailEvent(event.id)} key={event.id}>
                  <Card.Header className="fw-bold fs-5 bg-primary text-white">Event</Card.Header>
                  <Card.Body className="d-flex">
                    <Card.Img variant="left" src={event.logo} className="img-fluid rounded ms-3" style={{ width: "15.5rem", height: "auto" }} />
                    <Stack className="gap-2 ms-4 text-start">
                      <Card.Title className="fw-semibold fs-4 ">{event.title}</Card.Title>
                      <Card.Text className="fw-semibold fs-6 ">{event.descriptions}</Card.Text>
                    </Stack>
                    <Stack className="justify-content-between ms-4 text-end">
                      <Card.Text className="fw-semibold fs-6 ">
                        <Moment format="DD-MM-YYYY">{event.date}</Moment>
                      </Card.Text>
                      <Card.Text className="fw-semibold fs-6 ">
                        Harga Event :
                        <NumericFormat value={event.price} displayType={"text"} thousandSeparator={true} prefix={"Rp."} />
                      </Card.Text>
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
      {/* modal Show member List */}
      <Modal show={showMember} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>List Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {communityMembers.map((member) => {
            return (
              <h5 className="text-capitalize" key={member}>
                {member}
              </h5>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Akhit Modal Show Member List */}
      {/* Modal Create Event */}
      <Modal show={showAddEvent} onHide={handleCloseModalEvent}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput1">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Event Name" autoFocus onChange={(e) => setEventData({ ...eventData, title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlTextarea1">
              <Form.Label>Event Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setEventData({ ...eventData, descriptions: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput3">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="datetime-local" autoFocus onChange={(e) => setEventData({ ...eventData, date_event: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput3">
              <Form.Label>Event Location</Form.Label>
              <Form.Control type="text" autoFocus onChange={(e) => setEventData({ ...eventData, location: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput4">
              <Form.Label>Event HTM Price</Form.Label>
              <Form.Control type="text" placeholder="Input Price" autoFocus onChange={(e) => setEventData({ ...eventData, price: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalEvent}>
            Close
          </Button>
          <Button variant="primary" onClick={addEvent}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Akhir Modal Create Event */}
    </>
  );
}

export default CommunityEvent;
