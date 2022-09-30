import React from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="contlog">
      <Row className="rowreg">
        <Col lg={{ span: 7, offset: 0 }}>
          <div href="#">
            <img src="https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className='imgreg' alt="logo" />
          </div>
        </Col>
        <Col lg={{ span: 5, offset: 0 }} className="colreg2">
          <h1>Register to Happy App!</h1>
          <Form>
            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Select className="mb-2" aria-label="Default select example">
              <option>Gender</option>
              <option value="admin">Male</option>
              <option value="default">Female</option>
            </Form.Select>
            <Form.Group className="mb-2" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Link to="/community"><Button className="logbtn">SIGN UP</Button></Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
