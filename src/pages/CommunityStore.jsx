import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import HeaderCommunity from "../components/HeaderCommunity";
import ProductCard from "../components/ProductCard";
import "../styles/CommunityStore.css";

const CommunityStore = () => {
  const [showMember, setShowMember] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const handleClose = () => setShowMember(false);
  const handleShow = () => setShowMember(true);
  const [communityStore, setCommunityStore] = useState([]);
  const [communityMembers, setCommunityMembers] = useState([]);
  const [communityDetails, setCommunityDetails] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getCommunityStore();
    getCommunityMembers();
  }, []);

  const handlehHistoryPage = () => {
    navigate(`/community/historyorder`);
  };

  const getCommunityStore = () => {
    axios
      .get(`https://tugas.website/community/${Cookies.get("id")}/store`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setCommunityStore(res.data.product);
        setCommunityDetails(res.data);
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

  return (
    <>
      <HeaderCommunity handleShow={handleShow} communityDetails={communityDetails} />
      <CommunityNavbar />
      {communityDetails.role === "admin" ? (
        <div className="d-flex flex-column justify-content-center align-items-center my-3">
          <Button className="w-25 mb-2" onClick={() => setShowAddProduct(true)}>
            Add Product
          </Button>
          <Button className="w-25" onClick={handlehHistoryPage}>
            Transaction History
          </Button>
        </div>
      ) : (
        <></>
      )}
      <Container className="contcs min-vh-100">
        {communityStore ? (
          <>
            {communityStore.map((item) => {
              return (
                <div>
                  <ProductCard item={item} />;
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <h5>There's No Item</h5>
            </div>
          </>
        )}
      </Container>

      <Footer />
      {/* Modal Show Member Start */}
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
      {/* Modal Show Member End */}

      {/* Modal Add Product Start */}
      <Modal show={showAddProduct} onHide={() => setShowAddProduct(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlTextarea1">
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput4">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Input Price" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddProduct(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowAddProduct(false)}>
            Create Product
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Add Product End */}
    </>
  );
};

export default CommunityStore;
