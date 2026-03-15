import React from "react";
import { Navbar } from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../shared/Footer";

export const Root = () => {
  return (
    <div>
      <div className=" flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};