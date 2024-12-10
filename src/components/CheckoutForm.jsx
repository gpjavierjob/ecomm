import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import Fieldset from "./Fieldset";

function CheckoutForm({ buyer, setBuyer, disabled }) {
  const [formBuyer, setFormBuyer] = useState(buyer);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormBuyer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setBuyer(formBuyer);
  };

  return (
    <Container className="m-0 p-0 mt-3 mt-lg-1 mb-3">
      <Row className="justify-content-center">
        <Col md="8" lg="12">
          <Card>
            <Form noValidate validated={validated}>
              <Card.Header>Datos del Comprador</Card.Header>
              <Card.Body>
                <Fieldset disabled={disabled}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre"
                      name="name"
                      value={formBuyer.name}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, ingrese su nombre.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su email"
                      name="email"
                      value={formBuyer.email}
                      onChange={handleChange}
                      pattern="^\S+@\S+\.\S+$"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, ingrese un email válido.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Ingrese su teléfono"
                      name="phone"
                      value={formBuyer.phone}
                      onChange={handleChange}
                      pattern="^\d{10}$"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, ingrese un número de teléfono válido.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Fieldset>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="primary" onClick={handleSubmit}>
                  Comprar
                </Button>
              </Card.Footer>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutForm;
