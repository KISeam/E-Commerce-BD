import React from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/Header/NavBar";
import TopHeader from "./Components/Header/TopHeader";
import { Outlet } from "react-router-dom";
import MidHeader from "./Components/Header/MidHeader";

const Root = () => {
  return (
    <div className="bg-white">
      <TopHeader />
      <MidHeader />
      <NavBar />
      <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
