import React, { useEffect, useState } from "react";
import "../styles/CommunityPayment.css";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import CommunityNavbar from "../components/CommunityNavbar";
import Cookies from "js-cookie";
import axios from "axios";

const CommunityPayment = () => {
  const [cartDetail, setCartDetail] = useState({});
  const [cartId, setCartId] = useState([]);

  const getCartDetail = () => {
    axios
      .get(`https://tugas.website/cart?communityid=${Cookies.get("id")}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setCartDetail(res.data);
        setCartId(res.data.listcarts.map((cartid) => cartid.cartid));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCartDetail();
  }, []);

  console.log(cartId);
  return (
    <>
      <TopNav />
      <CommunityNavbar />
      <Container className="contpay">
        <h3 className="text-center mt-3">Payment</h3>
        {/* this can be map able */}
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">Shipping Address</Card.Header>
          <Card.Body className="d-flex">
            <Stack className="gap-2 ms-4 text-start w-50">
              <Card.Title className="fw-semibold fs-4 ">Item Name</Card.Title>
              <Card.Text className="fw-semibold">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Street</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Jakarta Selatan" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Province</Form.Label>
                    <Form.Control type="text" placeholder="DKI Jakarta" />
                  </Form.Group>
                </Form>
              </Card.Text>
            </Stack>
          </Card.Body>
        </Card>
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">Payment Method</Card.Header>
          <Card.Body className="d-flex">
            <Stack className="gap-2 ms-4 text-start w-50">
              <Card.Text className="fw-semibold">
                <Form.Group>
                  <Form.Check label="GOPAY" type="radio" name="group1" value="GOPAY" />
                  <Form.Check label="BCA Virtual Account" type="radio" name="group1" value="BCA Virtual Account" />
                  <Form.Check label="Mandiri Virtual Account" type="radio" name="group1" value="MANDIRI Virtual Account" />
                </Form.Group>
              </Card.Text>
            </Stack>
          </Card.Body>
        </Card>
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">Review Order</Card.Header>
          <Card.Body className="d-flex">
            <Stack className="gap-2 ms-4 text-start w-50">
              <Card.Text className="fw-semibold">
                <h5>
                  Total Item : <span> {cartDetail.jumlah} </span>
                </h5>
                <h5>
                  Shipping : <span> Free </span>
                </h5>
                <h5>
                  Total Price : <span> Rp. {cartDetail.total} </span>
                </h5>
              </Card.Text>
            </Stack>
          </Card.Body>
        </Card>
        <Button className="btnconfirmpayment">Confirm</Button>
        <Button variant="danger" className="btncancelpayment">
          Cancel
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default CommunityPayment;
