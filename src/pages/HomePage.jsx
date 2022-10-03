import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Card, Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { TopNav } from "../components/TopNav";
import "../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getCommunities();
  }, []);

  const getCommunities = () => {
    axios
      .get("https://tugas.website/community", {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setCommunities(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetailCommunity = () => {
    navigate("/community/feed");
  };
  return (
    <>
      <TopNav />
      <NavBar />
      <Container className="min-vh-100">
        <main>
          <h3 className="text-center mt-3">Community List</h3>
          {communities.map((community) => {
            return (
              <>
                <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailCommunity()}>
                  <Card.Header className="fw-bold fs-5 bg-primary text-white text-uppercase">{community.title}</Card.Header>
                  <Card.Body className="d-flex">
                    <Card.Img variant="left" src={community.logo} className="img-fluid rounded ms-3" style={{ width: "15.5rem", height: "auto" }} />
                    <Stack className="gap-2">
                      <Card.Text className="fw-semibold fs-6 pe-4 me-4">{community.descriptions}</Card.Text>
                    </Stack>
                  </Card.Body>
                  <Card.Footer className="text-center text-md-end">Jumlah Anggota:{community.members}</Card.Footer>
                </Card>
              </>
            );
          })}

          {/* <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailCommunity()}>
            <Card.Header className="fw-bold fs-5 bg-primary text-white">Community Title</Card.Header>
            <Card.Body className="d-flex">
              <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
              <Stack className="gap-2">
                <Card.Text className="fw-semibold fs-6 pe-4 me-4">With supporting text below as a natural lead-in to additional content.</Card.Text>
              </Stack>
            </Card.Body>
            <Card.Footer className="text-center text-md-end">Jumlah Anggota: 28</Card.Footer>
          </Card>
          <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailCommunity()}>
            <Card.Header className="fw-bold fs-5 bg-primary text-white">Community Title</Card.Header>
            <Card.Body className="d-flex">
              <Card.Img variant="left" src="https://picsum.photos/100/100" className="img-fluid rounded ms-3" />
              <Stack className="gap-2">
                <Card.Text className="fw-semibold fs-6 pe-4 me-4 d-block">With supporting text below as a natural lead-in to additional content.</Card.Text>
              </Stack>
            </Card.Body>
            <Card.Footer className="text-center text-md-end">Jumlah Anggota: 28</Card.Footer>
          </Card> */}
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
