import React from "react";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MidHeader = () => {
  return (
    <div className="bg-white md:border-b md:border-gray-200 lg:border-none">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between w-full md:w-11/12 lg:w-9/12 mx-auto py-6 gap-10">
        <Link to="/" className="flex-shrink-0">
          <img
            className="h-10 w-auto min-w-[50px]"
            src="/logo.png"
            alt="Logo"
          />
        </Link>

        <div className="flex items-center lg:ml-10 xl:ml-20">
          {" "}
          <div className="relative w-full md:w-[400px]">
            <input
              className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63B295] focus:border-transparent transition-all duration-200"
              type="text"
              placeholder="Search Our Blog"
            />
            <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer hover:text-[#63B295] transition-colors duration-200" />
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          <div className="flex justify-center gap-6">
            <div
              className="flex items-center gap-2 dropdown dropdown-end cursor-pointer"
              tabIndex={0}
              role=""
            >
              <LuUserRound className="text-2xl text-gray-500" />
              <div>
                <p className="text-gray-500 text-xs">
                  Account <br />{" "}
                  <span className="font-extralight text-black">LOGIN</span>{" "}
                </p>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content rounded-box z-10 mt-4 w-52 p-2 shadow-sm text-gray-600 bg-white"
                >
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/wishlist" className="flex items-center gap-2">
              <FaRegHeart className="text-2xl text-gray-500" />
              <p className="text-gray-500 text-xs" tabIndex={0} role="">
                Wishlist <br />{" "}
                <span className="font-extralight text-black">0-ITEMS</span>{" "}
              </p>
            </Link>

            <Link to="/addtocart" className="flex items-center gap-2">
              <IoBagOutline className="text-2xl text-gray-500" />
              <p className="text-gray-500 text-xs" tabIndex={0} role="">
                Cart <br />{" "}
                <span className="font-extralight text-black">0-ITEMS</span>{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center gap-3 py-6 border-b border-gray-300 w-11/12 mx-auto">
        <Link to="/">
          <img className="h-8 w-auto min-w-[50px]" src="/logo.png" alt="Logo" />
        </Link>

        <div className="w-full mx-auto flex items-center pt-4">
          <div className="relative w-full">
            <input
              className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none"
              type="text"
              placeholder="Search Our Blog"
            />
            <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer hover:text-blue-500 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
