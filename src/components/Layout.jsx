import { Outlet, useLocation } from "react-router-dom";

import NavigationBar from "./NavigationBar";

function Layout() {
  // Se utiliza para obligar la renderización del Outlet cuando cambia la ruta pero
  // el componente al que apunta no cambia (ruta: /category/:tag).
  const location = useLocation();

  return (
    <>
      <NavigationBar />
      <Outlet key={location.pathname} />
    </>
  );
}

export default Layout;
