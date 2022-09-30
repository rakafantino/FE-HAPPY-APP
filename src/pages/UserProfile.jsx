import React, { useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Image, Modal, Row, Stack, Table } from "react-bootstrap";

function UserProfile() {
  const [editProfile, setEditProfile] = useState(false);
  const [showCreateCommunity, setShowCreateCommunity] = useState(false);
  const [showEditCommunity, setShowEditCommunity] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const handleCloseEdit = () => setEditProfile(false);
  const handleShowEdit = () => setEditProfile(true);
  const handleCloseCreate = () => setShowCreateCommunity(false);
  const handleShowCreate = () => setShowCreateCommunity(true);
  const handleCloseEditCommunity = () => setShowEditCommunity(false);
  const handleShowEditCommunity = () => setShowEditCommunity(true);
  const handleCloseDeleteAccount = () => setShowDeleteAccount(false);
  const handleShowDeleteAccount = () => setShowDeleteAccount(true);
  return (
    <>
      <Card className="text-center h-75 shadow-sm">
        <Card.Header className="fw-semibold fs-4 bg-primary text-white">User Profile</Card.Header>
        <Card.Body>
          <Row>
            <Col md={4} xs="auto">
              <Image src="https://picsum.photos/200/200" className="img-fluid rounded-circle" />
            </Col>
            <Col md={4} xs="auto" className="d-flex justify-content-center">
              <Table className="text-start  w-50">
                <tr>
                  <td className="py-3 fw-semibold">Name:</td>
                  <td className="ps-3">Jhon Doe</td>
                </tr>
                <tr>
                  <td className="py-3 fw-semibold">Username:</td>
                  <td className="ps-3">jhondoe</td>
                </tr>
                <tr>
                  <td className="py-3 fw-semibold">Email:</td>
                  <td className="ps-3">jhondoe@gmail.com</td>
                </tr>
              </Table>
            </Col>
            <Col md={4} xs="auto">
              <Stack className="gap-4 mt-5 align-items-center">
                <Button size="sm" className="w-50" onClick={handleShowEdit}>
                  Edit Profile
                </Button>
                <Button size="sm" variant="danger" className="w-50" onClick={handleShowDeleteAccount}>
                  Delete Account
                </Button>
              </Stack>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Container>
        <Row className="mt-3">
          <Col>
            <h4>My Community</h4>
          </Col>
          <Col>
            <Button size="sm float-end" onClick={() => handleShowCreate()}>
              Create Community
            </Button>
          </Col>
        </Row>
        <Row className="d-flex flex-column">
          <Col>
            <Card className="text-center mt-3 shadow hover">
              <Card.Header className="fw-bold fs-5 bg-primary text-white">Community</Card.Header>
              <Card.Body className="d-flex">
                <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
                <Stack className="gap-2">
                  <Card.Text className="fw-semibold fs-6 ms-3 my-auto text-start">Community Name</Card.Text>
                </Stack>
                <Button size="sm" className="float-end w-25 h-25 my-auto" onClick={() => handleShowEditCommunity()}>
                  Edit Community
                </Button>
              </Card.Body>
              <Card.Footer className="text-center text-md-end">Jumlah Anggota: 28</Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="text-center mt-3 shadow hover">
              <Card.Header className="fw-bold fs-5 bg-primary text-white">Community</Card.Header>
              <Card.Body className="d-flex">
                <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
                <Stack className="gap-2">
                  <Card.Text className="fw-semibold fs-6 ms-3 my-auto text-start">Community Name</Card.Text>
                </Stack>
                <Button size="sm" className="float-end w-25 h-25 my-auto">
                  Edit Community
                </Button>
              </Card.Body>
              <Card.Footer className="text-center text-md-end">Jumlah Anggota: 28</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Start Modal Edit Profile */}
      <Modal show={editProfile} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput2">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput4">
              <Form.Label>Upload Profile Picture</Form.Label>
              <Form.Control type="file" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal Edit Profile */}

      {/* Start Modal Create Community */}
      <Modal show={showCreateCommunity} onHide={handleCloseCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Create Community</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput1">
              <Form.Label>Title Community</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlTextArea1">
              <Form.Label>Community Description</Form.Label>
              <Form.Control as="textarea" rows={4} autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput4">
              <Form.Label>Upload Community Logo</Form.Label>
              <Form.Control type="file" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreate}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseCreate}>
            Create Community
          </Button>
        </Modal.Footer>
      </Modal>

      {/* End Modal Create Community */}

      {/* Start Modal Edit Community */}
      <Modal show={showEditCommunity} onHide={handleCloseEditCommunity}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Community</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput1">
              <Form.Label>Title Community</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlTextArea1">
              <Form.Label>Community Description</Form.Label>
              <Form.Control as="textarea" rows={4} autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput4">
              <Form.Label>Upload Community Logo</Form.Label>
              <Form.Control type="file" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditCommunity}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseEditCommunity}>
            Edit Community
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal Edit Community */}

      {/* Start Modal Delete Account */}
      <Modal show={showDeleteAccount} onHide={handleCloseDeleteAccount}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure Want To Delete this Account ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant={"danger"}>This Account Will Deleted Permanently !</Alert>
          If You Sure Click Yes.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteAccount}>
            Never Mind
          </Button>
          <Button variant="primary" onClick={handleCloseDeleteAccount}>
            YES !
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal Delete Account */}
    </>
  );
}

export default UserProfile;
