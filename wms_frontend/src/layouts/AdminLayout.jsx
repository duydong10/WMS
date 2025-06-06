// src/layouts/AdminLayout.jsx
// --------------------------------------------------------
import { Outlet } from "react-router-dom";
import HeaderFormat from "../components/Header.jsx";
import MenuFormat from "../components/Menu/Menu.jsx";

function AdminLayout() {
  return (
    <div className="flex flex-col max-w-screen h-screen">
      <header>
        <HeaderFormat />
      </header>
      <main className="flex m-5">
        <div className="w-1/5 lg:block hidden">
          <MenuFormat />
        </div>
        <div className="w-full lg:w-4/5 mx-2 lg:ml-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
