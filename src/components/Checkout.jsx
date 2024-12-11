import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";
import { useAddOrder } from "../firebase/orders";

function Checkout() {
  const [buyer, setBuyer] = useState({
    phone: "",
    email: "",
    name: "",
    confirmEmail: "",
  });
  const [order, working, error, addOrder] = useAddOrder();
  const { isEmpty, getItems, clear, getTotal } = useCart();
  const { addSuccess, addError, addInfo } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (order != null) {
      // Ordenada la compra
      clear();
      addSuccess(`La compra ha sido ordenada. El ID de la orden es: ${order.id}.`, false);
      navigate("/");
    } else if (error) {
      // Falló la compra
      addError("Error inesperado. Intente la compra nuevamente.");
    } else if (buyer.name !== "" && working === false) {
      // Solicitada la compra
      buyCartItems();
    } else if (isEmpty()) {
      addInfo("El carrito quedó vacío. Se regresó a Inicio.");
      navigate("/");
    }
  }, [isEmpty(), buyer, working]);

  const buyCartItems = () => {
    const { confirmEmail, ...buyerWithoutConfirmEmail } = buyer;
    const order = {
      date: new Date(),
      buyer: buyerWithoutConfirmEmail,
      items: getItems(),
      total: getTotal(),
    };

    addOrder(order);
  };

  return (
    <Container className="px-0 mt-3 mb-3">
      {!isEmpty() && (
        <Row className="m-1 px-1 mt-3">
          <Col xs={12} lg={8}>
            <Cart />
          </Col>
          <Col xs={12} lg={4}>
            <CheckoutForm
              buyer={buyer}
              setBuyer={setBuyer}
              disabled={working}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Checkout;
