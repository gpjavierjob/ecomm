import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AppContext } from "../contexts/AppContext";
import CartItem from "./CartItem";
import { useToast } from "../contexts/ToastsContext";

function Cart() {
  const { cart } = useContext(AppContext);
  const { addToast } = useToast();

  const removeAllCartItems = () => cart.clear();

  const buyCartItems = () => cart.clear();

  useEffect(() => {
    if (cart.isEmpty())
      addToast(null, "El carrito está vacío.", "info");
  }, [cart.getItems()]);

  return (
    <Container className="mt-3">
      {!cart.isEmpty() && (
        <>
          {cart.getItems().map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
          <Row className="mt-3">
            <Col md={9} className="text-center text-md-end">
              <b>Total</b>
            </Col>
            <Col md={2} className="text-center">
              {cart.getTotal().toFixed(2)}
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
