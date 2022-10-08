import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import cookie from "js-cookie";
import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitLogin = async () => {
    await axios
      .post("https://tugas.website/login", {
        email,
        password,
      })
      .then(function (response) {
        cookie.set("token", response.data.access_token);
        navigate("/community");
      })
      .catch(function (error) {
        setError(error.response.data.message);
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
          {error ? (
            <Alert variant={"danger"}>
              <FontAwesomeIcon icon={faBell} size="1x" flip className="me-2" />
              {error}
            </Alert>
          ) : (
            <></>
          )}
          <Form className="mx-auto">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>

          <div>
            Don't have an account? <Link to="/register">Register</Link>
          </div>
          <Button className="logbtn" button="submit" onClick={() => submitLogin()}>
            LOGIN
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
