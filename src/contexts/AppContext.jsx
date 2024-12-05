import { createContext, useContext } from "react";

import { useCart, CartContextProvider } from "./CartContext";
// import { useToast, ToastContextProvider } from "./ToastContext";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const {
    isEmpty,
    getItems,
    addItem,
    removeItem,
    clear,
    getTotal,
    getQuantity,
  } = useCart();
  // const { addInfo, addSuccess, addWarning, addError } = useToast();

  return (
    <AppContext.Provider
      value={{
        cart: {
          isEmpty,
          getItems,
          addItem,
          removeItem,
          clear,
          getTotal,
          getQuantity,
        },
        // toasts: {
        //   addInfo, addSuccess, addWarning, addError
        // }
      }}
    >
      <CartContextProvider>
        {/* <ToastContextProvider> */}
        {children}
        {/* </ToastContextProvider> */}
      </CartContextProvider>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
