import React, { useState } from "react";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  var data = JSON.stringify({
    name: name,
    username: username,
    gender: gender,
    email: email,
    password: password,
  });

  var config = {
    method: "post",
    url: "https://tugas.website/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const klikDaftar = async () => {
    await axios(config)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Success Create An Account Please Check Your Email To Verified Account",
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <Container className="contlog">
      <Row className="rowreg">
        <Col lg={{ span: 7, offset: 0 }}>
          <div href="#">
            <img src="https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="imgreg img-fluid" alt="logo" />
          </div>
        </Col>
        <Col lg={{ span: 5, offset: 0 }} className="colreg2">
          <h1>Register to Happy App!</h1>
          {error ? (
            <Alert variant={"danger"}>
              <FontAwesomeIcon icon={faBell} size="1x" flip className="me-2" />
              {error}
            </Alert>
          ) : (
            <></>
          )}
          <Form>
            <Form.Group className="mb-2" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select className="mb-2" aria-label="Default select example" onChange={(e) => setGender(e.target.value)} value={gender}>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </Form.Group>
          </Form>
          <div>
            Already have an account? <Link to="/">Login</Link>
          </div>
          <Button className="logbtn" onClick={() => klikDaftar()}>
            SIGN UP
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
