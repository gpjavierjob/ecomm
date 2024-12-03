import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'
import { CartContextProvider } from "./contexts/CartContext";
import { ToastContextProvider } from "./contexts/ToastContext";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB51HzqkJxOK1bUQUg9N4vdo5uAxR4OEs0",
  authDomain: "ecom-ce536.firebaseapp.com",
  projectId: "ecom-ce536",
  storageBucket: "ecom-ce536.firebasestorage.app",
  messagingSenderId: "303794712647",
  appId: "1:303794712647:web:bd189a0fd907c019728162",
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
