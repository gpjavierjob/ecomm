import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'
import { CartContextProvider } from "./contexts/CartContext";
import { ToastContextProvider } from "./contexts/ToastContext";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </CartContextProvider>
  </StrictMode>
);
