import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { Button, Card } from "react-bootstrap";

function HeaderCommunity({ handleShow, communityDetails }) {
  const { descriptions, title, members, role } = communityDetails;

  const joinCommunity = () => {
    axios
      .post(
        `https://tugas.website/join/community/${Cookies.get("id")}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const leaveCommunity = () => {
    axios
      .delete(`https://tugas.website/community/${Cookies.get("id")}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card className="text-center h-75 shadow-sm">
        <Card.Header className="fw-semibold fs-4 bg-primary text-white">{title}</Card.Header>
        <Card.Body>
          <Card.Text className="container">{descriptions}</Card.Text>
          {role === "member" || role === "admin" ? (
            <>
              <Button className="float-md-end d-inline-block" onClick={leaveCommunity}>
                Leave
              </Button>
            </>
          ) : (
            <Button className="float-md-end d-inline-block" onClick={joinCommunity}>
              Join
            </Button>
          )}
        </Card.Body>
        <Card.Footer className="text-end fw-semibold fs-6">
          <div onClick={handleShow} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faPeopleGroup} size="2x" className="me-2" />
            Jumlah Anggota: {members}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default HeaderCommunity;
