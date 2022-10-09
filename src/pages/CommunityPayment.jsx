import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal, Stack } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import CommunityNavbar from "../components/CommunityNavbar";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import "../styles/CommunityPayment.css";

const CommunityPayment = () => {
  const [cartDetail, setCartDetail] = useState({});
  const [cartId, setCartId] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccessVA, setShowSuccessVA] = useState(false);
  const [linkPayments, setLinkPayments] = useState("");
  const [cancelJoin, setCancelJoin] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [billerCode, setBillerCode] = useState("");
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
        if (res.data.actions) {
          setLinkPayments(res.data.actions[1].url);
          setCancelJoin(res.data.actions[3].url);
          setShowSuccess(true);
        } else if (res.data.va_numbers) {
          setBillNumber(res.data.va_numbers.va_number);
          setShowSuccessVA(true);
        } else {
          setBillNumber(res.data.bill_key);
          setBillerCode(res.data.biller_code);
          setShowSuccessVA(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartDetail();
  }, []);

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
              <div className="fw-semibold">
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
              </div>
            </Stack>
          </Card.Body>
        </Card>
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">Payment Method</Card.Header>
          <Card.Body className="d-flex">
            <Stack className="gap-2 ms-4 text-start w-50">
              <div className="fw-semibold">
                <Form.Group onChange={(e) => setPaymentData({ ...paymentData, type_payment: e.target.value })}>
                  <Form.Check label="GOPAY" type="radio" name="group1" value="GOPAY" />
                  <Form.Check label="BCA Virtual Account" type="radio" name="group1" value="BCA Virtual Account" />
                  <Form.Check label="Mandiri Virtual Account" type="radio" name="group1" value="Mandiri Virtual Account" />
                </Form.Group>
              </div>
            </Stack>
          </Card.Body>
        </Card>
        <Card className="text-center mt-3 shadow ">
          <Card.Header className="fw-bold fs-5 bg-primary text-white">Review Order</Card.Header>
          <Card.Body className="d-flex">
            <Stack className="gap-2 ms-4 text-start w-50">
              <Card.Text className="fw-semibold">
                <span className="fw-semibold fs-5">
                  Total Item : <span> {cartDetail.jumlah} </span>
                </span>
                <br />
                <span className="fw-semibold fs-5">
                  Shipping : <span> Free </span>
                </span>
                <br />
                <span className="fw-semibold fs-5">
                  Total Price :
                  <span>
                    <NumericFormat value={cartDetail.total} displayType={"text"} thousandSeparator={true} prefix={" Rp."} />
                  </span>
                </span>
              </Card.Text>
            </Stack>
          </Card.Body>
        </Card>
        <Button className="btnconfirmpayment" onClick={handleCheckout}>
          Confirm
        </Button>
        <Button variant="danger" className="btncancelpayment" onClick={() => navigate("/community/cart")}>
          Cancel
        </Button>
      </Container>
      <Footer />

      {/* Modal Success Join Gopay */}
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success Join The Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>Silahkan Lanjutkan Pembayaran dengan cara klik tombol Bayar</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowSuccess(false);
              window.location = cancelJoin;
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowSuccess(false);
              window.open(`${linkPayments}`, "_blank");
            }}
          >
            Bayar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Success Join End */}

      {/* Modal Success Join VA */}
      <Modal show={showSuccessVA} onHide={() => setShowSuccessVA(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success Join The Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Silahkan Lanjutkan Pembayaran dengan cara transfer ke nomor Virtual Account berikut: <br /> <span className="fw-bold fs-5">{billNumber}</span>
          {billerCode ? (
            <>
              <br /> <p className="fw-bold fs-5">Biller Code: {billerCode}</p>
            </>
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowSuccessVA(false);
            }}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Success Join VA end */}
    </>
  );
};

export default CommunityPayment;
