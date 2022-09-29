import React from 'react';
import '../styles/DetailProduct.css';
import { TopNav } from '../components/TopNav';
import { Footer } from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';

const DetailProduct = () => {
  return (
    <>
      <TopNav />
      <Container>
        <Row className="rowdp">
          <Col className="coldp1" lg={{ span: 6, offset: 0 }}>
            <div href="#">
              <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" className="imgdp" alt="logo" />
            </div>
          </Col>
          <Col className="coldp2" lg={{ span: 4, offset: 0 }}>
            <h5>Product Name</h5>
            <h6>Price : <span>Rp 123</span></h6>
            <h6>Quantity : <span>1</span></h6>
            <h6>Descripton</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam ullam adipisci vitae ipsum atque quo accusantium tempora aut dolores!</p>
          </Col>
          <Col className="coldp3" lg={{ span: 2, offset: 0 }}>
            <Button className="mb-3">Edit Product</Button>
            <br />
            <Button>Delete</Button>
          </Col>
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
