import { Toast, ToastContainer } from "react-bootstrap";
import { createContext, useContext, useState } from "react";

import {
  BsCheckCircle,
  BsInfoCircle,
  BsExclamationCircle,
  BsXCircle,
} from "react-icons/bs";

// Crear el contexto
const ToastContext = createContext();

// Proveedor del contexto
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Agregar un nuevo toast
  const addToast = (title, message, variant = "primary") => {
    variant = variant.toLowerCase();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id: Date.now(), title, message, variant },
    ]);
  };

  // Eliminar un toast
  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const config = {
    primary: { title: "", image: <></> },
    secondary: { title: "", image: <></> },
    success: { title: "Éxito", image: <BsCheckCircle /> },
    danger: { title: "Error", image: <BsXCircle /> },
    warning: { title: "Aviso", image: <BsExclamationCircle /> },
    info: { title: "Información", image: <BsInfoCircle /> },
    light: { title: "", image: <></> },
    dark: { title: "", image: <></> },
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Contenedor de Toasts */}
      <ToastContainer position="top-end" className="p-3">
        {toasts.map(({ id, title, message, variant }) => (
          <Toast
            key={id}
            onClose={() => removeToast(id)}
            delay={3000}
            autohide
            bg={variant}
          >
            <Toast.Header>
              {config[variant].image}
              <strong className="me-auto ps-2">
                <h5>{title || config[variant].title}</h5>
              </strong>
              <small>Ahora</small>
            </Toast.Header>
            <Toast.Body><h6>{message}</h6></Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

// Hook para usar el contexto
export const useToast = () => useContext(ToastContext);
