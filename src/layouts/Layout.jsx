import React from "react";
import NavbarSite from "../components/NavbarSite";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavbarSite />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
