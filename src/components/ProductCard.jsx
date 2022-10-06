import React from 'react';
import '../styles/ProductCard.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleDetailProduct = (id) => {
    navigate(`/detailproduct/${id}`, {
      state: {
        id: id
      }
    });
  };

  return (
    <div className="divpc d-flex">
      <Card className="cardpc1 hover" onClick={() => handleDetailProduct (item.id)}>
        <Card.Img variant="top" src={item.photo} className="cardimgpc1" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Price <span>Rp. {item.price}</span>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <Card className="cardpc1 hover">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" className="cardimgpc1" />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Price <span>Rp 123</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardpc1 hover">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" className="cardimgpc1" />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Price <span>Rp 123</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardpc1 hover">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" className="cardimgpc1" />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Price <span>Rp 123</span>
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default ProductCard;
