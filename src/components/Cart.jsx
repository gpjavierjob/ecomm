import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AppContext } from "./AppContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart, flash } = useContext(AppContext);

  const removeAllCartItems = () => {
    cart.clear();
    flash.setMessage("El carrito está vacío.", "info");
  };
  const buyCartItems = () => cart.clear();

  useEffect(() => {
    if (cart.getItems().length == 0)
      flash.setMessage("El carrito está vacío.", "info");
  }, []);

  return (
    <Container className="mt-3">
      {cart.getItems().length > 0 && (
        <>
          {cart.getItems().map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
          <Row className="mt-3">
            <Col span={4} className="text-center text-md-end">
              <b>Total</b>
            </Col>
            <Col md={2} className="text-center">
              {cart.getTotal().toFixed(2)}
            </Col>
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
