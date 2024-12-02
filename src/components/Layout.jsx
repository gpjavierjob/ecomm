import { Outlet, useLocation } from "react-router-dom";

import NavigationBar from "./NavigationBar";
// import FlashMessage from "./FlashMessage";
import { ToastProvider } from '../contexts/ToastsContext'

function Layout() {
  // Se utiliza para obligar la renderización del Outlet cuando cambia la ruta pero
  // el componente al que apunta no cambia (ruta: /category/:tag).
  const location = useLocation();

  return (
    <>
      <NavigationBar />
      {/* <FlashMessage /> */}
      <ToastProvider>
        <Outlet key={location.pathname} />
      </ToastProvider>
    </>
  );
}

export default Layout;
