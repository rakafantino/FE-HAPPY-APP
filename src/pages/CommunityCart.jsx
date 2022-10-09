import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Modal, Stack } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeaderCommunity from "../components/HeaderCommunity";
import { TopNav } from "../components/TopNav";
import "../styles/Cart.css";

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
      .get(`https://tugas.website/cart?communityid=${Cookies.get("id")}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setCommunityCart(res.data.listcarts);
        setCommunityDetails(res.data.community);
        console.log(res.data);
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

  const handleDeleteCart = (id) => {
    axios
      .delete(`https://tugas.website/cart/${id}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((response) => {
        getCommunityCart();
      })
      .catch((err) => {
        console.log(err.message);
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
      <Container className="h-screen">
        <h3 className="text-center mt-3">Cart</h3>
        {/* this can be map able */}
        {communityCart ? (
          <>
            {communityCart.map((product) => {
              return (
                <Card className="text-center mt-3 shadow " key={product.name}>
                  <Card.Header className="fw-bold fs-5 bg-primary text-white">BUY</Card.Header>
                  <Card.Body className="d-flex">
                    <Card.Img variant="left" src={product.photo} className="img-fluid rounded ms-3" style={{ width: "15.5rem", heigh: "auto" }} />
                    <Stack className="gap-2 ms-4 text-start w-50">
                      <Card.Title className="fw-semibold fs-4 ">{product.name}</Card.Title>
                      <Card.Text className="fw-semibold">
                        <span className="fw-semibold fs-5">Description</span>
                        <br />
                        {product.descriptions}
                      </Card.Text>
                    </Stack>
                    <Stack className="justify-content-between ms-4 text-end">
                      <Card.Text className="fw-semibold fs-6 ">
                        Price : <NumericFormat value={product.price} displayType={"text"} thousandSeparator={true} prefix={" Rp."} />
                      </Card.Text>
                      <Button variant="danger" className="btncart" onClick={() => handleDeleteCart(product.cartid)}>
                        Cancel
                      </Button>
                    </Stack>
                  </Card.Body>
                </Card>
              );
            })}
          </>
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "75vh" }} key={1}>
            <h5>No Items In Your Cart</h5>
          </div>
        )}
        <div className="d-flex">
          <Button className="ms-auto my-5" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
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
