import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { AppContext } from "../contexts/AppContext";

function Item({ id, name, price, uom, category, stock, image }) {
  const [quantity, setQuantity] = useState(1);
  const { cart } = useContext(AppContext);
  
  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const comprar = () => {
    cart.addItem({ id, name, price, uom, category, stock, image }, quantity);
    setQuantity(1);
  };

  return (
    <Card border="success-subtle" key={id} style={{ width: "18rem" }}>
      <Link to={`/item/${id}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{category.name}</Card.Subtitle>
          <Card.Text>
            <span>${price.toFixed(2)}</span>
            <span className="p-2">-</span>
            <span>{uom}</span>
          </Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
        </Card.Body>
      </Link>
      <Card.Footer className="d-flex flex-row align-items-center">
        <Button size="sm" onClick={decreaseQuantity} disabled={quantity <= 1}>
          -
        </Button>
        <span className="px-3 m-1 border border-primary">{quantity}</span>
        <Button
          size="sm"
          onClick={increaseQuantity}
          disabled={quantity >= stock}
        >
          +
        </Button>
        <Button className="ms-auto" onClick={comprar}>
          Comprar
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Item;
