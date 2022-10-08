import React from "react";
import "../styles/ProductCard.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleDetailProduct = (id) => {
    navigate(`/detailproduct/${id}`, {
      state: {
        id: id,
      },
    });
  };

  return (
    <div className="divpc d-flex">
      <Card className="cardpc1 hover" onClick={() => handleDetailProduct(item.id)}>
        <Card.Img variant="top" src={item.photo} className="cardimgpc1" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Price:
            <span>
              <NumericFormat value={item.price} displayType={"text"} thousandSeparator={true} prefix={" Rp."} />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
