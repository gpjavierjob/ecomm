import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";

function Cart() {
  const { isEmpty, getItems, clear, getTotal } = useCart();
  const { addInfo } = useToast();
  const navigate = useNavigate();

  const removeAllCartItems = () => clear();

  const buyCartItems = () => clear();

  useEffect(() => {
    if (isEmpty()) {
      addInfo("El carrito está vacío.");
      navigate("/");
    }
  }, [getItems()]);

  return (
    <Container className="mt-3">
      {!isEmpty() && (
        <>
          {getItems().map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
          <Row className="mt-3">
            <Col md={9} className="text-center text-md-end">
              <b>Total</b>
            </Col>
            <Col md={2} className="text-center">
              {getTotal().toFixed(2)}
            </Col>
            <Col md={1}></Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <Button onClick={removeAllCartItems}>Vaciar</Button>
            </Col>
            <Col className="text-center">
              <Button onClick={buyCartItems}>Comprar</Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Cart;
