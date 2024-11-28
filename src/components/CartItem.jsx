import { useContext } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AppContext } from "../contexts/AppContext";

function CartItem({ id, name, price, uom, category, stock, image, quantity }) {
  const { cart } = useContext(AppContext);
  
  const decreaseQuantity = () => {
    cart.removeItem(id);
  };

  const increaseQuantity = () => {
    cart.addItem({ id, stock }, 1);
  };

  const remove = () => {
    cart.removeItem(id, true);
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
