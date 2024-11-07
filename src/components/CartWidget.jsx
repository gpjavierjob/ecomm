import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import cartImage from "/carrito.svg";

function CartWidget() {
  const badgeClassName =
    "position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle";
  return (
    <div className="d-flex justify-content-start justify-content-lg-end me-1">
    <Button className="position-relative" variant="primary">
      <img src={cartImage} alt="carrito de compras" />
      <Badge className={badgeClassName} bg="danger">0</Badge>
      <span className="visually-hidden">cantidad de productos en el carrito</span>
    </Button>
    </div>
  );
}

export default CartWidget;