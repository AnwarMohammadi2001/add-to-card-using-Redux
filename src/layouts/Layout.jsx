import React from "react";
import NavbarSite from "../components/NavbarSite";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <NavbarSite />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
