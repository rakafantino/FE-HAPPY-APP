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
  const [search, setSearch] = useState("");

  const getCommunities = () => {
    axios
      .get(`https://tugas.website/community?title=${search}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        setCommunities(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCommunities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleDetailCommunity = (id) => {
    Cookies.set("id", id);
    navigate("/community/feed");
  };
  return (
    <>
      <TopNav setSearch={setSearch} />
      <NavBar />
      <Container className="min-vh-100">
        <main>
          <h3 className="text-center mt-3">Community List</h3>
          {communities ? (
            <>
              {communities.map((community) => {
                return (
                  <Card className="text-center mt-3 shadow hover" onClick={() => handleDetailCommunity(community.id)} key={community.id}>
                    <Card.Header className="fw-bold fs-5 bg-primary text-white text-uppercase">{community.title}</Card.Header>
                    <Card.Body className="d-flex">
                      <Card.Img variant="left" src={community.logo} className="img-fluid rounded ms-3" style={{ width: "15.5rem", height: "auto" }} />
                      <Stack className="gap-2">
                        <Card.Text className="fw-semibold fs-6 pe-4 me-4">{community.descriptions}</Card.Text>
                      </Stack>
                    </Card.Body>
                    <Card.Footer className="text-center text-md-end">Jumlah Anggota:{community.members}</Card.Footer>
                  </Card>
                );
              })}
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center vh-100">
              <h5>No Community With That Name</h5>
            </div>
          )}
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
