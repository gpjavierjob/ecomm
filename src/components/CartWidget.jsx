import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "./AppContext";

function CartWidget() {
  const { getQuantity } = useContext(AppContext);

  const badgeClassName =
    "position-absolute top-0 start-100 translate-middle border border-light";
  return (
    <Link to={"/carrito"}>
      <div className="position-relative m-2 p-0">
        <FaShoppingCart size="30px" alt="carrito de compras" />
        <Badge className={badgeClassName} bg="danger" pill>
          {getQuantity()}
        </Badge>
        <span className="visually-hidden">
          cantidad de productos en el carrito
        </span>
      </div>
    </Link>
  );
}

export default CartWidget;