import React from 'react';
import '../styles/DetailEvent.css';
import { BsCalendar2Date } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { Container, Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import HeadEvent from '../components/HeadEvent';
import { TopNav } from '../components/TopNav';
import { Footer } from '../components/Footer';
import Modal from 'react-bootstrap/Modal';

function CenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Payment Method</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
      {['radio'].map((type) => (
        <div key={`payments-${type}`} className="mb-3">
          <Form.Check
            label="GOPAY"
            name="group1"
            type={type}
            id={`payments-${type}-1`}
          />
          <Form.Check
            label="BCA Virtual Account"
            name="group1"
            type={type}
            id={`payments-${type}-2`}
          />
                    <Form.Check
            label="Mandiri Virtual Account"
            name="group1"
            type={type}
            id={`payments-${type}-2`}
          />
        </div>
      ))}
    </Form>
      </Modal.Body>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Review Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          Total Item : <span>1</span>
        </h6>
        <h6>
          Total Price : <span>Rp 123</span>
        </h6>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

const DetailEvent = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <TopNav />
      <HeadEvent />
      <hr></hr>
      <Container className="conde">
        <Row>
          <Col lg={{ span: 9, offset: 0 }}>
            <h4>Detail Event</h4>
            <h5>Time Event</h5>
            <p className="pde1">
              <BsCalendar2Date className="me-2" />
              Friday, 18 December 2022
            </p>
            <p>
              <BiTime className="me-2" />
              15.00 - 17.00 WIB
            </p>
            <h6>Penyelenggara</h6>
            <p className="pde2">Jamet Community</p>
            <h6>Description</h6>
            <p className="pde3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vero necessitatibus esse labore corrupti iure enim. Similique aliquid maxime ipsum provident nemo quae atque ratione animi officia officiis? Delectus, eligendi.
            </p>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>
                Total Participants : <span>80</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Price : <span>Rp 123</span>
              </ListGroup.Item>
            </ListGroup>
            <Button className="mt-3" onClick={() => setModalShow(true)}>
              Join Event
            </Button>
          </Col>
          <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DetailEvent;
