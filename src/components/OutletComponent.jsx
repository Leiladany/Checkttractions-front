import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { NavBar } from "@mantine/core";

function OutletComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default OutletComponent;
