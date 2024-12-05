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
    <Row className="align-items-center border-bottom border-success-subtle">
      <Col md={2} className="text-center  mx-0 px-0">
        <Image src={image} style={{ height: 100 }} className="img-fluid" />
      </Col>
      <Col md={3} className="text-center  mx-0 px-0">
        {name}
      </Col>
      <Col md={2} className="text-center  mx-0 px-0">
        {price.toFixed(2)}
      </Col>
      <Col md={2} className="text-center  mx-0 px-0">
        <Button size="sm" onClick={decreaseQuantity} disabled={quantity <= 0}>
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
      </Col>
      <Col md={2} className="text-center  mx-0 px-0">
        {(price * quantity).toFixed(2)}
      </Col>
      <Col md={1} className="text-center  mx-0 px-0">
        <Button size="sm" onClick={remove} className="btn-danger">
          X
        </Button>
      </Col>
    </Row>
  );
}

export default CartItem;
