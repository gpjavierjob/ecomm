import { Toast, ToastContainer, Image } from "react-bootstrap";
import { createContext, useContext, useState } from "react";

import {
  BsCheckCircle,
  BsInfoCircle,
  BsExclamationCircle,
  BsXCircle,
} from "react-icons/bs";

const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (title, message, image, variant = "primary") => {
    variant = variant.toLowerCase();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id: Date.now(), title, message, image, variant },
    ]);
  };

  const addSuccess = (message) =>
    addToast("Éxito", message, <BsCheckCircle />, "success");

  const addInfo = (message) =>
    addToast("Información", message, <BsInfoCircle />, "info");

  const addWarning = (message) =>
    addToast("Aviso", message, <BsExclamationCircle />, "warning");

  const addError = (message) =>
    addToast("Error", message, <BsXCircle />, "danger");

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{ addInfo, addSuccess, addWarning, addError }}
    >
      {children}
      <ToastContainer position="top-end" className="p-3">
        {toasts.map(({ id, title, message, image, variant }) => (
          <Toast
            key={id}
            onClose={() => removeToast(id)}
            delay={3000}
            autohide
            bg={variant}
          >
            <Toast.Header>
              {typeof image == "string" ? (
                <Image src={image} width={20} rounded />
              ) : (
                image
              )}
              <strong className="me-auto ps-2">{title}</strong>
            </Toast.Header>
            <Toast.Body
              className={
                ["primary", "dark", "danger"].includes(variant) && "text-white"
              }
            >
              {message}
            </Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
