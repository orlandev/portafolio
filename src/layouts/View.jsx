import React from "react";
import { Outlet } from "react-router-dom";

// components
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const View = ({ noFooter, noNavbar }) => {
  return (
    <div className="flex flex-col min-h-full w-full">
      {!noNavbar ? <Navbar /> : null}
      <Outlet />
      {!noFooter ? <Footer /> : null}
    </div>
  );
};

export default View;
