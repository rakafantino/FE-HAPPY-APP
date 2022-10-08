import React, { useEffect, useState } from "react";
import "../styles/DetailProduct.css";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import HeaderCommunity from "../components/HeaderCommunity";
import CommunityNavbar from "../components/CommunityNavbar";

const DetailProduct = () => {
  const location = useLocation();
  const [detailProduct, setDetailProduct] = useState({});
  const [role, setRole] = useState("");

  const getDetailProduct = () => {
    axios
      .get(`https://tugas.website/store/${location.state.id}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
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
          {role === "admin" ? (
            <Col className="coldp3" lg={{ span: 2, offset: 0 }}>
              <Button className="mb-3">Edit Product</Button>
              <br />
              <Button>Delete</Button>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </Container>
      <Container>
        <Row className="rowdp2">
          <Col>
            <Button className="btndp3">Add to Cart</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DetailProduct;
