import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import { Button, Card, Container, Modal, Stack } from "react-bootstrap";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import HeaderCommunity from "../components/HeaderCommunity";
import axios from "axios";
import Cookies from "js-cookie";
import { TopNav } from "../components/TopNav";

const CommunityCart = () => {
  const [showMember, setShowMember] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);

  const [communityCart, setCommunityCart] = useState([]);
  const [communityMembers, setCommunityMembers] = useState([]);
  const [communityDetails, setCommunityDetails] = useState({});

  const navigate = useNavigate();

  const getCommunityCart = () => {
    axios
      .get("https://tugas.website/cart?communityid=1", {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setCommunityCart(res.data.cart);
        setCommunityDetails(res.data.community);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
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
    getCommunityMembers();
    getCommunityCart();
  }, []);

  const handleCheckout = () => {
    navigate("/community/payment");
  };

  return (
    <>
      <TopNav />
      <HeaderCommunity handleShow={handleShow} communityDetails={communityDetails} />
      <CommunityNavbar />
      <Container className="min-vh-100">
        <h3 className="text-center mt-3">Cart</h3>
        {/* this can be map able */}
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">BUY</Card.Header>
          <Card.Body className="d-flex">
            <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
            <Stack className="gap-2 ms-4 text-start w-50">
              <Card.Title className="fw-semibold fs-4 ">Item Name</Card.Title>
              <Card.Text className="fw-semibold">
                <h5>Description</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit iure fugit veritatis asperiores quas magni, laborum repudiandae neque quis repellat atque distinctio et. Est, quia illum quis porro recusandae doloremque.</p>
              </Card.Text>
            </Stack>
            <Stack className="justify-content-between ms-4 text-end">
              <Card.Text className="fw-semibold fs-6 ">Price : Rp.150.000</Card.Text>
              <Button variant="danger" className="btncart">
                Cancel
              </Button>
            </Stack>
          </Card.Body>
        </Card>
        <p className="pcart">Total Price : Rp 123</p>
        <Button className="float-end mt-1" onClick={handleCheckout}>
          Checkout
        </Button>
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
};

export default CommunityCart;
