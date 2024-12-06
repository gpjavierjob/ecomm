import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CartItem from "./CartItem";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";

function Cart() {
  const { isEmpty, getItems, clear, getTotal, getQuantity } = useCart();
  const { addSuccess } = useToast();

  const removeAllCartItems = () => {
    clear();
    const quantity = getQuantity();
    addSuccess(
      quantity == 1
        ? "Eliminado el producto del carrito."
        : `Eliminados ${quantity} productos del carrito`
    );
  };

  return (
    <Container className="m-0 p-0">
      {!isEmpty() && (
        <>
          {getItems().map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
          <Row className="m-1 px-3 mt-3">
            <Col xs={6} md={9} className="text-end">
              <b>Total</b>
            </Col>
            <Col xs={6} md={2} className="text-xs-start text-md-end">
              ${getTotal().toFixed(2)}
            </Col>
            <Col xs={0} md={1}></Col>
          </Row>
          <Row className="m-1 px-3 pt-3 pb-3">
            <Col className="text-center">
              <Button onClick={removeAllCartItems}>Vaciar carrito</Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Cart;
