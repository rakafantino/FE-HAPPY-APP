import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BsCalendar2Date } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { NumericFormat } from "react-number-format";
import { useLocation } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeadEvent from "../components/HeadEvent";
import { TopNav } from "../components/TopNav";
import "../styles/DetailEvent.css";

const DetailEvent = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccessVA, setShowSuccessVA] = useState(false);
  const [detailEvent, setDetailEvent] = useState({});
  const [payments, setPayments] = useState("");
  const [linkPayments, setLinkPayments] = useState("");
  const [cancelJoin, setCancelJoin] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const location = useLocation();

  const getDetailEvent = () => {
    axios
      .get(`https://tugas.website/event/${location.state.id}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setDetailEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const joinEvent = () => {
    axios
      .post(
        `https://tugas.website/join/event/${location.state.id}`,
        {
          payment_type: payments,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then((res) => {
        setModalShow(false);

        if (res.data.data.actions) {
          setLinkPayments(res.data.data.actions[1].url);
          setCancelJoin(res.data.data.actions[3].url);
          setShowSuccess(true);
        } else {
          if (res.data.data.bill_number) {
            setBillNumber(res.data.data.bill_number);
            setShowSuccessVA(true);
          } else {
            setBillNumber(res.data.data.bill_key);
            setShowSuccessVA(true);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getDetailEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <TopNav />
      <HeadEvent detailEvent={detailEvent} />
      <hr></hr>
      <Container className="conde vh-100">
        <CommunityNavbar />
        <Row className="mt-3">
          <Col lg={{ span: 9, offset: 0 }}>
            <h4>Detail Event</h4>
            <h5>Time Event</h5>
            <p className="pde1 mb-3">
              <BsCalendar2Date className="me-2" />
              {detailEvent.date_event}
            </p>
            <h5>Location Event</h5>
            <p className="pde1 mb-3">
              <MdPlace className="me-2" />
              {detailEvent.location}
            </p>

            <h6>Event Organizer</h6>
            <p className="pde2">{detailEvent.penyelenggara}</p>
            <h6>Description</h6>
            <p className="pde3">{detailEvent.descriptions}</p>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>
                Total Participants : <span>{detailEvent.partisipasi}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Price:
                <span>
                  <NumericFormat value={detailEvent.price} displayType={"text"} thousandSeparator={true} prefix={" Rp."} />
                </span>
              </ListGroup.Item>
            </ListGroup>
            <Button className="mt-3" onClick={() => setModalShow(true)}>
              Join Event
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
      {/* Modal Payments Start */}
      <Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicRadio" onChange={(e) => setPayments(e.target.value)}>
            <Form.Check label="GOPAY" name="group1" type="radio" value="GOPAY" />
            <Form.Check label="BCA Virtual Account" name="group1" type="radio" value="BCA Virtual Account" />
            <Form.Check label="Mandiri Virtual Account" name="group1" type="radio" value="Mandiri Virtual Account" />
          </Form.Group>
        </Modal.Body>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Review Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>
            Total Item : <span>1</span>
          </h6>
          <h6>
            Total Price :
            <span>
              <NumericFormat value={detailEvent.price} displayType={"text"} thousandSeparator={true} prefix={" Rp."} />
            </span>
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={joinEvent}>Confirm</Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Payments End */}

      {/* Modal Success Join Gopay */}
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success Join The Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>Silahkan Lanjutkan Pembayaran dengan cara klik tombol Bayar</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowSuccess(false);
              window.location = cancelJoin;
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowSuccess(false);
              window.open(`${linkPayments}`, "_blank");
            }}
          >
            Bayar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Success Join End */}

      {/* Modal Success Join VA */}
      <Modal show={showSuccessVA} onHide={() => setShowSuccessVA(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success Join The Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Silahkan Lanjutkan Pembayaran dengan cara transfer ke nomor Virtual Account berikut: <br /> <span className="fw-bold fs-5">{billNumber}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowSuccessVA(false);
            }}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Success Join VA end */}
    </>
  );
};

export default DetailEvent;
