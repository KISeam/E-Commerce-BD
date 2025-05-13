import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/Header/NavBar";
import TopHeader from "./Components/Header/TopHeader";
import { Outlet } from "react-router-dom";
import MidHeader from "./Components/Header/MidHeader";
import ScrollButton from "./Components/ScrollButton";
import { CartProvider } from "./contexts/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CartProvider>
      <div className="bg-white">
        <TopHeader />
        <MidHeader />
        <NavBar />
        <div className="w-11/12 lg:w-9/12 mx-auto">
          <Outlet />
        </div>
        <Footer />
        <ScrollButton />
        <ToastContainer />
      </div>
    </CartProvider>
  );
};

export default Root;
