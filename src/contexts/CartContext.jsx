import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const getItems = () => cartItems;

  const isEmpty = () => cartItems.length == 0;

  const addItem = (item, quantity) => {
    setCartItems((prevItems) => {
      // Comprobar si este ítem ya fue adicionado al carrito previamente
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        // Ya existe este ítem en el carrito por lo que se aumenta su cantidad
        // pero sólo si no sobrepasa el stock
        if (existingItem.quantity + quantity > item.stock) return prevItems;
        existingItem.quantity += quantity;
        // Para que el estado note que ocurrió un cambio
        return prevItems.flat();
      } else {
        // Adicionar el ítem porque no existe en el carrito
        return [...prevItems, { ...item, quantity: quantity }];
      }
    });
  };

  const removeItem = (id, removeAll = false) => {
    setCartItems((prevItems) => {
      // Comprobar si este ítem ya existe en el carrito
      const cartItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      // Si no exite, no cambia el contenido del carrito
      if (cartItemIndex == -1) return prevItems;
      const cartItem = prevItems[cartItemIndex];
      // Si la cantidad del ítem es 1 o se quieren eliminar todos los items con este id,
      // se elimina del carrito
      if (cartItem.quantity == 1 || removeAll)
        return prevItems.toSpliced(cartItemIndex, 1);
      // En caso contrario, se disminuye en 1 la cantidad del ítem
      cartItem.quantity -= 1;
      // Para que el estado note que ocurrió un cambio
      return prevItems.flat();
    });
  };

  const clear = () => {
    setCartItems([]);
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getQuantity = () =>
    cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        isEmpty,
        getItems,
        addItem,
        removeItem,
        clear,
        getTotal,
        getQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
