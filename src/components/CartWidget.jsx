import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  const badgeClassName =
    "position-absolute top-0 start-100 translate-middle border border-light";
  return (
    <div className="position-relative m-2 p-0">
      <FaShoppingCart size="30px" alt="carrito de compras"/>
      <Badge className={badgeClassName} bg="danger" pill>0</Badge>
      <span className="visually-hidden">cantidad de productos en el carrito</span>
    </div>
  );
}

export default CartWidget;