import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";

function CartItem({ id, name, price, stock, image, quantity }) {
  const { addItem, removeItem } = useCart();
  const { addSuccess } = useToast();

  const decreaseQuantity = () => {
    removeItem(id);
    addSuccess("Eliminado el producto del carrito.");
  };

  const increaseQuantity = () => {
    addItem({ id, stock }, 1);
    addSuccess("Adicionado el producto al carrito.");
  };

  const remove = () => {
    removeItem(id, true);
    addSuccess(
      quantity == 1
        ? "Eliminado el producto del carrito."
        : `Eliminados ${quantity} productos del carrito`
    );
  };

  return (
    <Row className="align-items-center rounded border border-success-subtle m-1 px-3">
      <Col xs={6} md={2} className="text-center mx-0 px-0 my-2">
        <Image src={image} style={{ height: 100 }} className="img-fluid" />
      </Col>
      <Col xs={6} md={3} className="text-start mx-0 px-0 my-2">
        <strong>{name}</strong>
      </Col>
      <Col xs={4} md={2} className="text-center mx-0 px-0 my-2">
        ${price.toFixed(2)}
      </Col>
      <Col xs={4} md={2} className="mx-0 px-0 py-0 my-2">
        <span className="d-flex flex-row justify-content-center">
          <Button size="sm" onClick={decreaseQuantity} disabled={quantity <= 0}>
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
      </Col>
      <Col
        xs={4}
        md={2}
        className="text-end mx-0 px-0 pe-md-3 my-2"
      >
        ${(price * quantity).toFixed(2)}
      </Col>
      <Col xs={12} md={1} className="text-center mx-0 px-0 my-2">
        <Button size="sm" onClick={remove} className="btn-danger">
          <small>Extraer</small>
        </Button>
      </Col>
    </Row>
  );
}

export default CartItem;
