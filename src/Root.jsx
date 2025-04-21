import React from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/Header/NavBar";
import TopHeader from "./Components/Header/TopHeader";
import { Outlet } from "react-router-dom";
import MidHeader from "./Components/Header/MidHeader";
import ScrollButton from "./Components/ScrollButton";

const Root = () => {
  return (
    <div className="bg-white">
      <TopHeader />
      <MidHeader />
      <NavBar />
      <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Root;
