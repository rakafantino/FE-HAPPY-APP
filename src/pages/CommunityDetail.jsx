import React, { useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeaderCommunity from "../components/HeaderCommunity";
import "../styles/HomePage.css";

function CommunityDetail() {
  const [showMember, setShowMember] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);

  const navigate = useNavigate();

  const handleDetailPost = () => {
    navigate("/community/postdetail");
  };
  return (
    <>
      <HeaderCommunity handleShow={handleShow} />
      <CommunityNavbar />
      <Container className="min-vh-100">
        {/* this can be map able */}
        <Card className="w-75 mx-auto my-3">
          <Card.Header as="h5">Post Something</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tulis Sesuatu"></textarea>
            </div>
            <Button variant="primary" className="float-end">
              Post
            </Button>
          </Card.Body>
        </Card>
        <Card className="px-3 my-3 hover" onClick={() => handleDetailPost()}>
          <Card.Header as="h5">
            Raka <span className="float-end fw-regular fs-5">Jum'at, 99 Desember 2022</span>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repudiandae nemo omnis rerum dolores maiores voluptas accusamus pariatur! Harum vero, fuga a enim numquam quam exercitationem rem id! In cupiditate tempora
              autem molestias omnis nesciunt qui quis excepturi, repellendus, culpa iusto minima est quaerat repellat modi itaque sequi perspiciatis laborum consectetur tenetur quasi! Eveniet ratione molestiae cum vero explicabo facere qui
              ipsa minima. Eveniet voluptatem officia perspiciatis ratione eius aliquid repudiandae nam reiciendis. Quae nobis, commodi optio corporis neque numquam?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="px-3 my-3 hover" onClick={() => handleDetailPost()}>
          <Card.Header as="h5">
            Doffa <span className="float-end fw-regular fs-5">Sabtu, 30 Februari 2023</span>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repudiandae nemo omnis rerum dolores maiores voluptas accusamus pariatur! Harum vero, fuga a enim numquam quam exercitationem rem id! In cupiditate tempora
              autem molestias omnis nesciunt qui quis excepturi, repellendus, culpa iusto minima est quaerat repellat modi itaque sequi perspiciatis laborum consectetur tenetur quasi! Eveniet ratione molestiae cum vero explicabo facere qui
              ipsa minima. Eveniet voluptatem officia perspiciatis ratione eius aliquid repudiandae nam reiciendis. Quae nobis, commodi optio corporis neque numquam?
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
      <Modal show={showMember} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>List Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Raka</h5>
          <h5>Doffa</h5>
          <h5>Amin</h5>
          <h5>Nawi</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommunityDetail;
