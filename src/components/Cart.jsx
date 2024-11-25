import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AppContext } from "./AppContext";
import CartItem from "./CartItem";
import { Info } from "./Alerts";

function Cart() {
  const { cartItems, clearCart, getTotal } = useContext(AppContext);

  const removeAllCartItems = () => clearCart();

  return (
    <Container className="mt-3">
      {cartItems.length == 0 ? (
        <Row className="justify-content-center">
          <Info msg="El carrito está vacío." />
        </Row>
      ) : (
        <>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
          <Row className="mt-3">
            <Col span={4} className="text-center text-md-end">
              <b>Total</b>
            </Col>
            <Col md={2} className="text-center">
              {getTotal().toFixed(2)}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <Button onClick={removeAllCartItems}>Vaciar</Button>
            </Col>
            <Col className="text-center">
              <Button onClick={removeAllCartItems}>Comprar</Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Cart;
