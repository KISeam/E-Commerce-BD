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
      <div className="bg-gray-100 hidden lg:block text-gray-500 text-sm">
        <div className="flex items-center justify-between py-4 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk />
              <p>+8801580768366</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp />
              <p>+8801580768366</p>
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

      <div className="bg-gray-100  text-gray-500 text-sm  hidden md:block lg:hidden ">
        <div className="flex items-center justify-between py-4 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MdOutlinePhoneInTalk />
              <p>+8801580768366</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp />
              <p>+8801580768366</p>
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
                className="menu menu-sm dropdown-content bg-white z-1 mt-4 h-screen w-70 p-2 shadow -ml-56 py-6"
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

      <div className="bg-gray-100 text-gray-500 text-sm md:hidden">
        <div className="flex items-center justify-between py-2 w-11/12 mx-auto">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost p-0 hover:bg-transparent hover:border-transparent hover:shadow-none hover:transparent-none"
            >
              <RxHamburgerMenu className="text-2xl text-gray-600" />
            </label>

            <div
              tabIndex={0}
              className="dropdown-content menu bg-white shadow-lg w-70 h-screen -ml-5 mt-4 z-50"
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                <h1 className="text-lg font-medium text-gray-600">My Menu</h1>
                <RxCross1
                  className="text-xl cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={() => document.activeElement?.blur()}
                />
              </div>

              <div className="p-2 space-y-2 mt-2">
                <Link
                  to="/"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#5caf90] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Home</span>
                  <CiCirclePlus className="text-xl text-gray-500" />
                </Link>
                
                <Link
                  to="/products"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#5caf90] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Products</span>
                  <CiCirclePlus className="text-xl text-gray-500" />
                </Link>

                <Link
                  to="/blog"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#5caf90] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Blog</span>
                  <CiCirclePlus className="text-xl text-gray-500" />
                </Link>

                <Link
                  to="/faq"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#5caf90] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">FAQ</span>
                  <CiCirclePlus className="text-xl text-gray-500" />
                </Link>


                <Link
                  to="/about"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#5caf90] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">About</span>
                  <CiCirclePlus className="text-xl text-gray-500" />
                </Link>

                <Link
                  to="/contact"
                  className="flex justify-between items-center p-2 border border-gray-300 hover:border-[#5caf90] rounded-md transition-colors"
                  onClick={() => document.activeElement?.blur()}
                >
                  <span className="text-gray-600">Contact</span>
                  <CiCirclePlus className="text-xl text-gray-500" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-6 bg-gray-50">
                <FaFacebookSquare className="text-2xl text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
                <FaTwitterSquare className="text-2xl text-gray-500 hover:text-blue-400 cursor-pointer transition-colors" />
                <FaSquareInstagram className="text-2xl text-gray-500 hover:text-pink-600 cursor-pointer transition-colors" />
                <FaLinkedin className="text-2xl text-gray-500 hover:text-blue-700 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost p-0 hover:bg-transparent"
              >
                <LuUserRound className="text-2xl text-gray-600" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2 z-50"
              >
                <li>
                  <Link
                    to="/signup"
                    className="text-gray-600 hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-600 hover:bg-gray-100">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="/wishlist"
              className="btn btn-ghost p-0 hover:bg-transparent"
            >
              <FaRegHeart className="text-2xl text-gray-600" />
            </Link>

            <Link
              to="/addtocart"
              className="btn btn-ghost p-0 hover:bg-transparent"
            >
              <IoBagOutline className="text-2xl text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
