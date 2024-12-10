import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";

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
  const { addItem } = useCart();
  const { addSuccess } = useToast();

  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const comprar = () => {
    addItem({ id, name, price, uom, category, stock, image }, quantity);
    addSuccess(
      quantity == 1
        ? "Adicionado el producto al carrito."
        : `Adicionados ${quantity} productos al carrito`
    );
    setQuantity(1);
  };

  return (
    <>
      {id && (
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
            <Card.Subtitle className="my-2">{category.name}</Card.Subtitle>
            <Card.Text className="my-2">{description}</Card.Text>
            <Card.Text className="my-2">
              <span>${price.toFixed(2)}</span>
              <span className="p-2">-</span>
              <span>{uom}</span>
            </Card.Text>
            <Card.Text className="my-2">Stock: {stock}</Card.Text>
            <Card.Text className="d-flex flex-row align-items-center">
              <span className="d-flex flex-row justify-content-center">
                <Button
                  size="sm"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="rounded border border-primary px-2 mx-1 my-0">
                  {quantity}
                </span>
                <Button
                  size="sm"
                  onClick={increaseQuantity}
                  disabled={quantity >= stock}
                >
                  +
                </Button>
              </span>
              <Button size="sm" className="ms-auto" onClick={comprar}>
                Comprar
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default ItemDetail;
