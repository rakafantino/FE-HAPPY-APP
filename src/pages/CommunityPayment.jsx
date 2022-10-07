import React from 'react';
import '../styles/CommunityPayment.css'
import { Button, Card, Container, Form, Stack } from 'react-bootstrap';
import { Footer } from '../components/Footer';
import { TopNav } from '../components/TopNav';

const CommunityPayment = () => {
  return (
    <>
      <TopNav />
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
                <Form>
                  {["radio"].map((type) => (
                    <div key={`payments-${type}`} className="mb-3">
                      <Form.Check label="GOPAY" name="group1" type={type} id={`payments-${type}-1`} />
                      <Form.Check label="BCA Virtual Account" name="group1" type={type} id={`payments-${type}-2`} />
                      <Form.Check label="Mandiri Virtual Account" name="group1" type={type} id={`payments-${type}-2`} />
                    </div>
                  ))}
                </Form>
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
                  Total Item : <span> 5 </span>
                </h5>
                <h5>
                  Shipping : <span> Free </span>
                </h5>
                <h5>
                  Total Price : <span> Rp 123 </span>
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
