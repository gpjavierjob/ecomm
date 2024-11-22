import { useContext } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { AppContext } from "./AppContext";

function CartItem({ id, name, price, uom, category, stock, image, quantity }) {
  const { addItemToCart, removeItemFromCart } = useContext(AppContext);

  const decreaseQuantity = () => {
    removeItemFromCart(id);
  };

  const increaseQuantity = () => {
    addItemToCart({ id }, 1);
  };

  return (
    <div className="d-flex flex-row flex-wrap">
      <div>
        <Image src={image} />
      </div>
      <div>{name}</div>
      <div>{price.toFixed(2)}</div>
      <div>
        <Button size="sm" onClick={decreaseQuantity} disabled={quantity <= 0}>
          -
        </Button>
        <span className="px-3 m-1 border border-primary">{quantity}</span>
        <Button
          size="sm"
          onClick={increaseQuantity}
          disabled={quantity >= stock}
        >
          +
        </Button>
      </div>
      <div>{(price * quantity).toFixed(2)}</div>
    </div>
  );
}

export default CartItem;
