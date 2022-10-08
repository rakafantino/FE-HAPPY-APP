import React, { useEffect, useState } from "react";
import "../styles/CommunityPayment.css";
import { Alert, Button, Card, Container, Form, Stack } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import CommunityNavbar from "../components/CommunityNavbar";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const CommunityPayment = () => {
  const [cartDetail, setCartDetail] = useState({});
  const [cartId, setCartId] = useState([]);
  const [linkPayments, setLinkPayments] = useState("");
  const [cancelJoin, setCancelJoin] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [paymentData, setPaymentData] = useState({
    street: "",
    city: "",
    province: "",
    type_payment: "",
  });

  const navigate = useNavigate();

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

  const handleCheckout = () => {
    const { street, city, province, type_payment } = paymentData;
    axios
      .post(
        "https://tugas.website/checkout",
        {
          cartid: cartId,
          street,
          city,
          province,
          type_payment,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.actions) {
          setLinkPayments(res.data.actions[1].url);
          setCancelJoin(res.data.actions[3].url);
        } else {
          setBillNumber(res.data.bill_number);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartDetail();
  }, []);

  console.log(cartId, paymentData);

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
                    <Form.Control as="textarea" rows={2} onChange={(e) => setPaymentData({ ...paymentData, street: e.target.value })} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Jakarta Selatan" onChange={(e) => setPaymentData({ ...paymentData, city: e.target.value })} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Province</Form.Label>
                    <Form.Control type="text" placeholder="DKI Jakarta" onChange={(e) => setPaymentData({ ...paymentData, province: e.target.value })} />
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
                <Form.Group onChange={(e) => setPaymentData({ ...paymentData, type_payment: e.target.value })}>
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
                  Total Price :
                  <span>
                    <NumericFormat value={cartDetail.total} displayType={"text"} thousandSeparator={true} prefix={" Rp."} />
                  </span>
                </h5>
              </Card.Text>
            </Stack>
          </Card.Body>
        </Card>
        {linkPayments ? (
          <>
            <div>
              <Alert variant="success" className="d-flex gap-3 justify-content-center">
                Silahkan lanjutkan Pembayaran dengan cara klik tombol ini
                <br />
                <div className="bg-primary py-1 px-2 rounded">
                  <a href={linkPayments} target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "none" }}>
                    Bayar
                  </a>
                </div>
                <div className="bg-warning py-1 px-2 rounded">
                  <a href={cancelJoin} target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "none" }}>
                    Cancel Pembayaran
                  </a>
                </div>
              </Alert>
            </div>
          </>
        ) : (
          <></>
        )}
        {billNumber ? (
          <>
            <div>
              <Alert variant="success" className="d-flex gap-3 justify-content-center">
                Silahkan lanjutkan Pembayaran dengan cara transfer ke VA ini
                <br />
                <span className="text-primary">{billNumber}</span>
              </Alert>
            </div>
          </>
        ) : (
          <></>
        )}
        <Button className="btnconfirmpayment" onClick={handleCheckout}>
          Confirm
        </Button>
        <Button variant="danger" className="btncancelpayment" onClick={() => navigate("/community/cart")}>
          Cancel
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default CommunityPayment;
