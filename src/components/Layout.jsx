import { Outlet, useLocation } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import FlashMessage from "./FlashMessage";

function Layout() {
  // Se utiliza para obligar la renderización del Outlet cuando cambia la ruta pero
  // el componente al que apunta no cambia (ruta: /category/:tag).
  const location = useLocation();

  return (
    <>
      <NavigationBar />
      <FlashMessage />
      <Outlet key={location.pathname} />
    </>
  );
}

export default Layout;
