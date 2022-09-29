import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function HeaderCommunity({ handleShow }) {
  return (
    <>
      <Card className="text-center h-75 shadow-sm">
        <Card.Header className="fw-semibold fs-4 bg-primary text-white">Community Title</Card.Header>
        <Card.Body>
          <Card.Text className="container">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit molestiae tenetur, error qui voluptatum rerum fugiat! Temporibus unde recusandae nobis odit eum. Debitis maxime aperiam harum tenetur reiciendis dignissimos
            perferendis minus, accusantium illo cupiditate eum quisquam iste quos alias, natus delectus repellendus amet perspiciatis blanditiis consequatur a ipsa facere eos expedita. Sequi nisi iusto consequuntur dignissimos voluptatem ex
            minima inventore rem laborum. Consequatur unde culpa nisi numquam cupiditate odit quasi ad sunt! Minima magni labore exercitationem. Et sed maiores beatae!
          </Card.Text>
          <Button className="float-md-end d-inline-block">Join</Button>
        </Card.Body>
        <Card.Footer className="text-end fw-semibold fs-6">
          <div onClick={handleShow} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faPeopleGroup} size="2x" className="me-2" />
            Jumlah Anggota: 36
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default HeaderCommunity;
