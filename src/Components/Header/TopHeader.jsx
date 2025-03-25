import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const TopHeader = () => {
  return (
    <div>
      <div className="bg-[#f8f8fb] hidden lg:block text-gray-500 text-sm">
        <div className="flex items-center justify-between py-4 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk />
              <p>+91 987 654 3210</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp />
              <p>+91 987 654 3210</p>
            </div>
          </div>

          <div className="hidden lg:block">
            <p>Worls's Fastesr Online Shopping Destination</p>
          </div>

          <div className="flex items-center gap-4">
            <p>Help?</p>
            <p>Track Order?</p>
            <div className="flex items-center gap-1">
              <p>English </p>
              <MdOutlineKeyboardArrowDown />
            </div>
            <div className="flex items-center gap-1">
              <p>Dollar </p>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8fb]  text-gray-500 text-sm  hidden md:block lg:hidden ">
        <div className="flex items-center justify-between py-4 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk />
              <p>+91 987 654 3210</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp />
              <p>+91 987 654 3210</p>
            </div>
          </div>

          <div className="flex items-center md:gap-4">
            <div className="flex items-center gap-4 ">
              <LuUserRound className="text-2xl text-gray-600 cursor-pointer" />
              <FaRegHeart className="text-2xl text-gray-600 cursor-pointer" />
              <IoBagOutline className="text-2xl text-gray-600 cursor-pointer" />
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button">
                <RxHamburgerMenu className="text-2xl text-gray-600 cursor-pointer" />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white z-1 mt-4 h-screen w-60 p-2 shadow -ml-44 py-6"
              >
                <div className="flex items-center text-lg py-4 text-gray-600 font-medium justify-between px-4">
                  <h1 className=""> My Menu</h1>
                  <RxCross1
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.activeElement?.blur();
                    }}
                  />
                </div>
                <Link
                  to="/"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
                >
                  <p>Home </p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <Link
                  to="/about"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
                >
                  <p>About</p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <Link
                  to="/categories"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
                >
                  <p>Categories</p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <Link
                  to="/products"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
                >
                  <p>Products</p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <Link
                  to="/contact"
                  className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
                >
                  <p>Contact</p>
                  <CiCirclePlus className="text-xl" />
                </Link>
                <div className="flex justify-center items-center py-10 gap-6 text-2xl text-gray-700">
                  <FaFacebookSquare className="cursor-pointer" />
                  <FaTwitterSquare className="cursor-pointer" />
                  <FaSquareInstagram className="cursor-pointer" />
                  <FaLinkedin className="cursor-pointer" />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8fb] text-gray-500 text-sm md:hidden">
        <div className="flex items-center justify-between py-4 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button">
              <RxHamburgerMenu className="text-2xl text-gray-600 cursor-pointer" />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white z-1 mt-4 h-screen w-60 p-2 shadow -ml-5 py-6"
            >
              <div className="flex items-center text-lg py-4 text-gray-600 font-medium justify-between px-4">
                <h1 className=""> My Menu</h1>
                <RxCross1
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.activeElement?.blur();
                  }}
                />
              </div>
              <Link
                to="/"
                className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
              >
                <p>Home </p>
                <CiCirclePlus className="text-xl" />
              </Link>
              <Link
                to="/about"
                className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
              >
                <p>About</p>
                <CiCirclePlus className="text-xl" />
              </Link>
              <Link
                to="/categories"
                className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
              >
                <p>Categories</p>
                <CiCirclePlus className="text-xl" />
              </Link>
              <Link
                to="/products"
                className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
              >
                <p>Products</p>
                <CiCirclePlus className="text-xl" />
              </Link>
              <Link
                to="/contact"
                className="flex justify-between items-center border border-gray-400 m-2 p-2 hover:border-[#5caf90] rounded-md"
              >
                <p>Contact</p>
                <CiCirclePlus className="text-xl" />
              </Link>
              <div className="flex justify-center items-center py-10 gap-6 text-2xl text-gray-700">
                <FaFacebookSquare className="cursor-pointer" />
                <FaTwitterSquare className="cursor-pointer" />
                <FaSquareInstagram className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
              </div>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <LuUserRound className="text-2xl text-gray-600 cursor-pointer" />
            <Link to="/wishlist"><FaRegHeart className="text-2xl text-gray-600 cursor-pointer" /></Link>
            <Link to="/addtocart"><IoBagOutline className="text-2xl text-gray-600 cursor-pointer" /></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
