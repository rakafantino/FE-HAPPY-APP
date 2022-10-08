import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Image, Modal, Row, Stack, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TopNav } from "../components/TopNav";

function UserProfile() {
  const [editProfile, setEditProfile] = useState(false);
  const [showCreateCommunity, setShowCreateCommunity] = useState(false);
  const [showEditCommunity, setShowEditCommunity] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [userData, setUserData] = useState({});
  const [userCommunities, setUserCommunities] = useState([]);
  const [getCommunityId, setGetCommunityId] = useState("");
  // buka tutup Modal
  const handleCloseEdit = () => setEditProfile(false);
  const handleShowEdit = () => setEditProfile(true);
  const handleCloseCreate = () => setShowCreateCommunity(false);
  const handleShowCreate = () => setShowCreateCommunity(true);
  const handleCloseEditCommunity = () => setShowEditCommunity(false);
  const handleShowEditCommunity = () => setShowEditCommunity(true);
  const handleCloseDeleteAccount = () => setShowDeleteAccount(false);
  const handleShowDeleteAccount = () => setShowDeleteAccount(true);
  // Akhir Buka Tutup Modal
  const navigate = useNavigate();

  const [editUserInfo, setEditUserInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    photo: "",
  });

  const [communityData, setCommunityData] = useState({
    title: "",
    descriptions: "",
    logo: "",
  });

  const handleRedirect = () => {
    navigate("/");
  };

  const isLogedIn = Cookies.get("token");

  useEffect(() => {
    getUserProfle();
  }, []);

  const getUserProfle = () => {
    axios
      .get("https://tugas.website/user/profile", {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((response) => {
        setUserData(response.data.data);
        setUserCommunities(response.data.data.community);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteUser = () => {
    axios
      .delete(`https://tugas.website/user/profile`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((response) => {
        handleCloseDeleteAccount();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmitEdit = () => {
    setEditUserInfo({
      name: "",
      username: "",
      email: "",
      password: "",
      photo: "",
    });
    const { name, username, email, password, photo } = editUserInfo;
    axios
      .put(
        "https://tugas.website/user/profile",
        {
          name,
          username,
          email,
          password,
          photo,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setEditProfile(false);
        getUserProfle();
        console.log(photo);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("id");
    navigate("/");
  };

  const handleCreateCommunity = () => {
    const { title, descriptions, logo } = communityData;
    axios
      .post(
        "https://tugas.website/community",
        {
          title,
          descriptions,
          logo,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setShowCreateCommunity(false);
        getUserProfle();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditCommunity = () => {
    const { title, descriptions, logo } = communityData;
    axios
      .put(
        `https://tugas.website/community/${getCommunityId}`,
        {
          title,
          descriptions,
          logo,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setShowEditCommunity(false);
        getUserProfle();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {isLogedIn ? (
        <>
          <Card className="text-center h-75 shadow-sm">
            <TopNav />
            <Card.Header className="fw-semibold fs-4 bg-primary text-white">User Profile</Card.Header>
            <Card.Body>
              <Row>
                <Col md={4} xs="auto">
                  <Image src={userData.photo} className="img-fluid rounded-circle overflow-hidden" style={{ width: "12.5rem", height: "auto" }} />
                </Col>
                <Col md={4} xs="auto" className="d-flex justify-content-center">
                  <Table className="text-start ">
                    <tbody style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td className="fw-semibold">Name:</td>
                        <td className="ps-3">{userData.name}</td>
                      </tr>
                      <tr>
                        <td className=" fw-semibold">Username:</td>
                        <td className="ps-3">{userData.username}</td>
                      </tr>
                      <tr>
                        <td className=" fw-semibold">Email:</td>
                        <td className="ps-3">{userData.email}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md={4} xs="auto">
                  <Stack className="gap-4 mt-5 align-items-center">
                    <Button size="sm" className="w-50" onClick={handleShowEdit}>
                      Edit Profile
                    </Button>
                    <Button size="sm" className="w-50" onClick={handleLogout}>
                      Logout
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
              {userCommunities.map((community) => {
                return (
                  <Col key={community.id}>
                    <Card className="text-center mt-3 shadow hover">
                      <Card.Header className="fw-bold fs-5 bg-primary text-white">Community</Card.Header>
                      <Card.Body className="d-flex">
                        <Card.Img variant="left" src={community.logo} className="img-fluid rounded ms-3" style={{ width: "15.5rem", height: "auto" }} />
                        <Stack className="gap-2">
                          <Card.Text className="fw-semibold fs-6 ms-3 my-auto text-start">{community.title}</Card.Text>
                        </Stack>
                        {community.role === "admin" ? (
                          <Button
                            size="sm"
                            className="float-end w-25 h-25 my-auto"
                            onClick={() => {
                              handleShowEditCommunity();
                              setGetCommunityId(community.id);
                            }}
                          >
                            Edit Community
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            className="float-end w-25 h-25 my-auto"
                            onClick={() => {
                              handleShowEditCommunity();
                              setGetCommunityId(community.id);
                            }}
                            disabled
                          >
                            Edit Community
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Button onClick={() => handleRedirect()} className="text-center">
            login dulu bos
          </Button>
        </div>
      )}

      {/* Start Modal Edit Profile */}
      <Modal show={editProfile} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" autoFocus onChange={(e) => setEditUserInfo({ ...editUserInfo, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput2">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" autoFocus onChange={(e) => setEditUserInfo({ ...editUserInfo, username: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" autoFocus onChange={(e) => setEditUserInfo({ ...editUserInfo, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" autoFocus onChange={(e) => setEditUserInfo({ ...editUserInfo, password: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput4">
              <Form.Label>Upload Profile Picture</Form.Label>
              <Form.Control type="file" autoFocus onChange={(e) => setEditUserInfo({ ...editUserInfo, photo: e.target.files[0] })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitEdit}>
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
              <Form.Control type="text" autoFocus onChange={(e) => setCommunityData({ ...communityData, title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlTextArea1">
              <Form.Label>Community Description</Form.Label>
              <Form.Control as="textarea" rows={4} autoFocus onChange={(e) => setCommunityData({ ...communityData, descriptions: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput4">
              <Form.Label>Upload Community Logo</Form.Label>
              <Form.Control type="file" autoFocus onChange={(e) => setCommunityData({ ...communityData, logo: e.target.files[0] })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreate}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateCommunity}>
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
              <Form.Control type="text" autoFocus onChange={(e) => setCommunityData({ ...communityData, title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlTextArea1">
              <Form.Label>Community Description</Form.Label>
              <Form.Control as="textarea" rows={4} autoFocus onChange={(e) => setCommunityData({ ...communityData, descriptions: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfileForm.ControlInput4">
              <Form.Label>Upload Community Logo</Form.Label>
              <Form.Control type="file" autoFocus onChange={(e) => setCommunityData({ ...communityData, logo: e.target.files[0] })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditCommunity}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditCommunity}>
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
          <Button variant="danger" onClick={handleDeleteUser}>
            YES !
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal Delete Account */}
    </>
  );
}

export default UserProfile;
