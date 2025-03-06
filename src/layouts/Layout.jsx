import React from "react";
import NavbarSite from "../components/NavbarSite";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavbarSite />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
