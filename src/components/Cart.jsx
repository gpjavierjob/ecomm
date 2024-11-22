import { useContext } from "react";

import { AppContext } from "./AppContext";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems, clearCart, getTotal } = useContext(AppContext);

  return (
    <>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
    </>
  );
}

export default Cart;
