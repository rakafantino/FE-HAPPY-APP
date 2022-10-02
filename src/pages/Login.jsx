import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookies] = useCookies();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async () => {
    console.log(email, password);

    await axios
      .post(
        'https://tugas.website/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(function (response) {
        setCookies('token', response.data.data, '/community');
        console.log(response.data);
        navigate('/community');
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  return (
    <Container className="contlog">
      <Row className="rowlog">
        <Col lg={{ span: 7, offset: 0 }}>
          <div href="#">
            <img src="https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="imglog" alt="logo" />
          </div>
        </Col>
        <Col lg={{ span: 5, offset: 0 }} className="collog2">
          <h1>Welcome to Happy App!</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(value) => handleEmail(value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(value) => handlePassword(value)} />
            </Form.Group>
          </Form>
          <div>
            Don't have an account? <Link to="/register">Register</Link>
          </div>
          <Button className="logbtn" onClick={() => submitLogin()}>
            LOGIN
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
