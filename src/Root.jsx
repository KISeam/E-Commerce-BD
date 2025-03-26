import React from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/Header/NavBar";
import TopHeader from "./Components/Header/TopHeader";
import { Outlet } from "react-router-dom";
import MidHeader from "./Components/Header/MidHeader";
import MouseAnimation from "./Components/MouseAnimation";
import ScrollButton from "./Components/ScrollButton";

const Root = () => {
  return (
    <div className="bg-white">
      <MouseAnimation />
      <TopHeader />
      <MidHeader />
      <NavBar />
      <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Root;
