import React from "react";
import { Card } from "react-bootstrap";
import "./productcard.css";

const ProductCard = ({ item, onClickToCart }) => {
  const { image, title, price } = item;

  return (
    <div className="col-lg-2 col-sm col-md-3 m-2 ">
      <Card className="cardShadow">
        <div className="embed-responsive embed-responsive-1by1">
          <img
            className="card-img p-2 grow embed-responsive-item "
            alt="items"
            src={image}
            width="200px"
          />
        </div>

        <Card.Body>
          <Card.Title>&#8358;{price}</Card.Title>
          <Card.Text className="text-truncate">{title}</Card.Text>
        </Card.Body>

        <div className=" p-0 mb-0">
          <button
            className="col p-2 cart-btn"
            onClick={() => onClickToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
