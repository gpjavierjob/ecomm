import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";

import { AppContext } from "./AppContext";

function ItemDetail({
  id,
  name,
  description,
  price,
  uom,
  category,
  stock,
  image,
}) {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(AppContext);

  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const comprar = () => {
    addItemToCart({ id, name, price, uom, category, stock, image }, quantity);
  };

  return (
    <Card
      border="success-subtle"
      key={id}
      className="flex-row flex-wrap justify-content-center align-items-center m-3"
    >
      <Card.Img variant="top" src={image} style={{ width: "15rem" }} />
      <Card.Body
        className="text-center text-md-start"
        style={{ width: "15rem" }}
      >
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{category.name}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <span>${price.toFixed(2)}</span>
          <span className="p-2">-</span>
          <span>{uom}</span>
        </Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Card.Text className="d-flex flex-row align-items-center">
          <Button
            className="me-auto"
            size="sm"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            -
          </Button>
          <span className="me-auto px-3 m-1 border border-primary">
            {quantity}
          </span>
          <Button
            className="me-auto"
            size="sm"
            onClick={increaseQuantity}
            disabled={quantity >= stock}
          >
            +
          </Button>
          <Button className="ms-auto" onClick={comprar}>
            Comprar
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
