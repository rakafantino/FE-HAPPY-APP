import React from "react";
import { Container } from "react-bootstrap";
import "../styles/HeadEvent.css";

const HeadEvent = ({ detailEvent }) => {
  const { title, descriptions } = detailEvent;
  return (
    <Container>
      <div className="divhe">
        <h1>{title}</h1>
        <p>{descriptions}</p>
      </div>
    </Container>
  );
};

export default HeadEvent;
