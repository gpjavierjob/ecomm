import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";

function Checkout() {
  const [buyer, setBuyer] = useState({
    phone: "",
    email: "",
    name: "",
  });
  const { isEmpty, getItems, clear, getTotal } = useCart();
  const { addSuccess, addInfo } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect");
    if (isEmpty()) {
      addInfo("El carrito quedó vacío. Volvemos al inicio.");
      navigate("/");
    } else {
      if (buyer.name === "" || !buyCartItems()) return;

      clear();
      addSuccess("La compra ha sido ordenada. Volvemos al inicio.");
      navigate("/");
    }
  }, [isEmpty(), buyer]);

  const buyCartItems = () => {
    console.log("buyCartItems");
    const order = {
      buyer: buyer,
      items: getItems(),
      total: getTotal(),
    };

    // useAddOrder(order);
    return true;
  };

  return (
    <Container className="px-0 mt-3 mb-3">
      {!isEmpty() && (
        <Row className="m-1 px-1 mt-3">
          <Col xs={12} lg={8}>
            <Cart />
          </Col>
          <Col xs={12} lg={4}>
            <CheckoutForm buyer={buyer} setBuyer={setBuyer} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Checkout;
