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

  const delay = import.meta.env.VITE_TOASTS_DELAY;

  const addToast = (title, message, image, variant = "primary", autoHide=false) => {
    variant = variant.toLowerCase();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id: Date.now(), title, message, image, variant, autoHide },
    ]);
  };

  const addSuccess = (message, autoHide=true) =>
    addToast("Éxito", message, <BsCheckCircle />, "success", autoHide);

  const addInfo = (message, autoHide=true) =>
    addToast("Información", message, <BsInfoCircle />, "info", autoHide);

  const addWarning = (message, autoHide=true) =>
    addToast("Aviso", message, <BsExclamationCircle />, "warning", autoHide);

  const addError = (message, autoHide=true) =>
    addToast("Error", message, <BsXCircle />, "danger", autoHide);

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{ addInfo, addSuccess, addWarning, addError }}
    >
      {children}
      <ToastContainer position="top-end" className="p-3">
        {toasts.map(({ id, title, message, image, variant, autoHide }) => (
          <Toast
            key={id}
            onClose={() => removeToast(id)}
            delay={delay}
            autohide={autoHide}
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
                ["primary", "success", "dark", "danger"].includes(variant) &&
                "text-white"
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
