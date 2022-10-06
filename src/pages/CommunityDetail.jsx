import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeaderCommunity from "../components/HeaderCommunity";
import "../styles/HomePage.css";

function CommunityDetail() {
  const [showMember, setShowMember] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);
  const [communityDetails, setCommunityDetails] = useState({});
  const [communityMembers, setCommunityMembers] = useState([]);
  const [communityFeeds, setCommunityFeeds] = useState({});

  const navigate = useNavigate();

  const getCommunityFeed = () => {
    axios
      .get(`https://tugas.website/community/${Cookies.get("id")}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setCommunityDetails(res.data.data);
        setCommunityFeeds(res.data.data.Feeds);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCommunityMembers = () => {
    axios
      .get(`https://tugas.website/community/members/${Cookies.get("id")}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setCommunityMembers(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCommunityFeed();
    getCommunityMembers();
  }, []);

  const handleDetailPost = () => {
    navigate("/community/postdetail");
  };
  console.log(communityFeeds);
  return (
    <>
      <HeaderCommunity handleShow={handleShow} communityDetails={communityDetails} />
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
        {communityFeeds === {} ? (
          <>
            <div className="d-flex justify-content-center">
              <h5>No Post</h5>
            </div>
          </>
        ) : (
          <>
            {/* {communityFeeds.map((feed) => {
              return (
                <Card className="px-3 my-3 hover" onClick={() => handleDetailPost()}>
                  <Card.Header as="h5">
                    {feed.name}{" "}
                    <span className="float-end fw-regular fs-5">
                      <Moment format="DD-MM-YYYY">{feed.date}</Moment>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{feed.text}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })} */}
          </>
        )}
      </Container>
      <Footer />
      <Modal show={showMember} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>List Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {communityMembers.map((member) => {
            return <h5 className="text-capitalize">{member}</h5>;
          })}
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
