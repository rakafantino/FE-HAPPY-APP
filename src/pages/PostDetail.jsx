import React, { useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeaderCommunity from "../components/HeaderCommunity";

function PostDetail() {
  const [showMember, setShowMember] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);
  return (
    <>
      <HeaderCommunity handleShow={handleShow} />
      <CommunityNavbar />
      <Container className="min-vh-100">
        {/* this can be map able */}

        <Card className="px-3 my-3">
          <Card.Header as="h5">
            Raka <span className="float-end fw-regular fs-5">Jum'at, 99 Desember 2022</span>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repudiandae nemo omnis rerum dolores maiores voluptas accusamus pariatur! Harum vero, fuga a enim numquam quam exercitationem rem id! In cupiditate tempora
              autem molestias omnis nesciunt qui quis excepturi, repellendus, culpa iusto minima est quaerat repellat modi itaque sequi perspiciatis laborum consectetur tenetur quasi! Eveniet ratione molestiae cum vero explicabo facere qui
              ipsa minima. Eveniet voluptatem officia perspiciatis ratione eius aliquid repudiandae nam reiciendis. Quae nobis, commodi optio corporis neque numquam?
            </Card.Text>
            <Card className="my-3">
              <Card.Text className="px-auto d-block">
                <span className="float-start fw-regular fs-5 ms-3 mt-2">Raka</span> <span className="float-end fw-regular fs-5 me-3 mt-2">Jum'at, 99 Desember 2022</span>
              </Card.Text>
              <Card.Body>
                <Card.Text className="mb-3">This is some text within a post body.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-3">
              <Card.Text className="px-auto d-block">
                <span className="float-start fw-regular fs-5 ms-3 mt-2">Nawi</span> <span className="float-end fw-regular fs-5 me-3 mt-2">Jum'at, 99 Desember 2022</span>
              </Card.Text>
              <Card.Body>
                <Card.Text className="mb-3">This is some text within a post body.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-3">
              <Card.Text className="px-auto d-block">
                <span className="float-start fw-regular fs-5 ms-3 mt-2">Doffa</span> <span className="float-end fw-regular fs-5 me-3 mt-2">Jum'at, 99 Desember 2022</span>
              </Card.Text>
              <Card.Body>
                <Card.Text className="mb-3">This is some text within a post body.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-3">
              <Card.Text className="px-auto d-block">
                <span className="float-start fw-regular fs-5 ms-3 mt-2">Raka</span> <span className="float-end fw-regular fs-5 me-3 mt-2">Jum'at, 99 Desember 2022</span>
              </Card.Text>
              <Card.Body>
                <Card.Text className="mb-3">This is some text within a post body.</Card.Text>
              </Card.Body>
            </Card>
            <Form className="d-flex">
              <Form.Control type="text" placeholder="Add a Comment" className="me-2" aria-label="comment" />
              <Button variant="primary">Search</Button>
            </Form>
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

export default PostDetail;
