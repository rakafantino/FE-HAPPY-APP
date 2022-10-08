import React, { useEffect, useState } from "react";
import "../styles/DetailProduct.css";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
import HeaderCommunity from "../components/HeaderCommunity";
import CommunityNavbar from "../components/CommunityNavbar";

const DetailProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [detailProduct, setDetailProduct] = useState({});
  const [role, setRole] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    descriptions: '',
    photo: '',
    stock: '',
    price: '',
  });

  const getDetailProduct = () => {
    axios
      .get(`https://tugas.website/store/${location.state.id}`, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .then((res) => {
        setDetailProduct(res.data.product);
        setRole(res.data.role);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editProduct = () => {
    const { name, descriptions, photo, stock, price } = productData;
    axios
      .put(
        `https://tugas.website/store/${location.state.id}`,
        {
          name,
          descriptions,
          photo,
          stock: parseInt(stock),
          price: parseInt(price),
        },
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('token'),
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((res) => {
        setShowEditProduct(false);
        getDetailProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteProduct = (item) => {
    axios
      .delete(`https://tugas.website/store/${location.state.id}`, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .then((response) => {
        navigate('/community/store');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleAddToCart = (item) => {
    axios
      .post('https://tugas.website/cart', {
        productid: parseInt(`${location.state.id}`)
      },{
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .then((res) => {
        alert(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailProduct();
  }, []);

  const { descriptions, name, photo, price, stock } = detailProduct;

  return (
    <>
      <TopNav />
      <CommunityNavbar />
      <Container>
        <Row className="rowdp">
          <Col className="coldp1" lg={{ span: 6, offset: 0 }}>
            <div href="#">
              <img src={photo} className="imgdp" alt="logo" />
            </div>
          </Col>
          <Col className="coldp2" lg={{ span: 4, offset: 0 }}>
            <h5 className="mb-4">{name}</h5>
            <h6>
              Price : <span>Rp {price}</span>
            </h6>
            <h6 className="mb-4">
              Quantity : <span>{stock}</span>
            </h6>
            <h6>Description</h6>
            <p>{descriptions}</p>
          </Col>
          {role === 'admin' ? (
            <Col className="coldp3" lg={{ span: 2, offset: 0 }}>
              <Button className="mb-3" onClick={() => setShowEditProduct(true)}>
                Edit Product
              </Button>
              <br />
              <Button variant='danger' onClick={handleDeleteProduct}>Delete</Button>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </Container>
      <Container>
        <Row className="rowdp2">
          <Col>
            <Button className="btndp3" onClick={handleAddToCart}>Add to Cart</Button>
          </Col>
        </Row>
      </Container>
      <Footer />

      {/* Modal Edit Product Start */}
      <Modal show={showEditProduct} onHide={() => setShowEditProduct(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" autoFocus onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlTextarea1">
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setProductData({ ...productData, descriptions: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" autoFocus onChange={(e) => setProductData({ ...productData, stock: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput4">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" autoFocus onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addEventForm.ControlInput4">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" autoFocus onChange={(e) => setProductData({ ...productData, photo: e.target.files[0] })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditProduct(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={editProduct}>
            Edit Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailProduct;
