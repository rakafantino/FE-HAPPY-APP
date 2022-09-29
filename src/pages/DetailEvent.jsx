import React from 'react';
import '../styles/DetailEvent.css';
import { BsCalendar2Date } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import HeadEvent from '../components/HeadEvent';
import { TopNav } from '../components/TopNav';
import { Footer } from '../components/Footer';

const DetailEvent = () => {
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
              <ListGroup.Item>Total Participants : <span>80</span></ListGroup.Item>
              <ListGroup.Item>Price : <span>Rp 123</span></ListGroup.Item>
            </ListGroup>
            <Button className="mt-3">Join Event</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DetailEvent;
