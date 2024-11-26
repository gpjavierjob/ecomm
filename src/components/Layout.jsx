import { Outlet } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import FlashMessage from "./FlashMessage";

function Layout() {
  return (
    <>
      <NavigationBar />
      <FlashMessage />
      <Outlet />
    </>
  );
}

export default Layout;
