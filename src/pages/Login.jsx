import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="contlog">
      <Row className="rowlog">
        <Col lg={{ span: 7, offset: 0 }}>
          <div href="#">
            <img src="https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" width="600" height="625" alt="logo" />
          </div>
        </Col>
        <Col lg={{ span: 5, offset: 0 }} className="collog2">
          <h1>Welcome to Happy App!</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <div>
          Don't have an account? <Link to="/register">Register</Link>
          </div>
          <Link to="/homepage"><Button className="logbtn">LOGIN</Button></Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
