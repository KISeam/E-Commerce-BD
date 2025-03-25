import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-600 text-sm">
      <div className="border-y border-gray-200">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-12">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="flex flex-col gap-6 w-full md:w-100">
              <div>
                <img src="/logo.png" alt="Grabit Logo" className="h-10" />
              </div>
              <p className="text-gray-500">
                Grabit is the biggest market of grocery products. Get your daily
                needs from our store with fast delivery and great prices.
              </p>
              <div className="flex gap-4">
                <Link to="#">
                  <img
                    className="h-12 rounded-md"
                    src="/android.png"
                    alt="Google Play"
                  />
                </Link>
                <Link to="#">
                  <img
                    className="h-12 rounded-md"
                    src="/apple.png"
                    alt="App Store"
                  />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-50">
              <h3 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="hover:text-green-500 transition">
                  About us
                </Link>
                <Link
                  to="/products"
                  className="hover:text-green-500 transition"
                >
                  Products
                </Link>
                <Link to="/offers" className="hover:text-green-500 transition">
                  Offers
                </Link>
                <Link to="/careers" className="hover:text-green-500 transition">
                  Careers
                </Link>
                <Link to="/blog" className="hover:text-green-500 transition">
                  Blog
                </Link>
              </div>
            </div>

            <div className="w-full md:w-50">
              <h3 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Customer Service
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="hover:text-green-500 transition">
                  Contact us
                </Link>
                <Link to="/faq" className="hover:text-green-500 transition">
                  FAQs
                </Link>
                <Link
                  to="/shipping"
                  className="hover:text-green-500 transition"
                >
                  Shipping Policy
                </Link>
                <Link to="/returns" className="hover:text-green-500 transition">
                  Return Policy
                </Link>
                <Link to="/privacy" className="hover:text-green-500 transition">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Contact Us
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <CiLocationOn className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                  <p>123 Grocery Street, Jatrabari, Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-green-500 text-lg" />
                  <Link
                    to="tel:+8801512345678"
                    className="hover:text-green-500 transition"
                  >
                    +880 1512 345 678
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <MdMailOutline className="text-green-500 text-lg" />
                  <Link
                    to="mailto:info@grabit.com"
                    className="hover:text-green-500 transition"
                  >
                    info@grabit.com
                  </Link>
                </div>

                <div className="mt-2">
                  <h4 className="font-medium text-gray-700 mb-2">Follow Us</h4>
                  <div className="flex gap-4">
                    <Link
                      to="#"
                      className="text-gray-500 hover:text-green-500 transition"
                    >
                      <FaFacebook className="text-xl" />
                    </Link>
                    <Link
                      to="#"
                      className="text-gray-500 hover:text-green-500 transition"
                    >
                      <FaTwitter className="text-xl" />
                    </Link>
                    <Link
                      to="#"
                      className="text-gray-500 hover:text-green-500 transition"
                    >
                      <FaInstagram className="text-xl" />
                    </Link>
                    <Link
                      to="#"
                      className="text-gray-500 hover:text-green-500 transition"
                    >
                      <FaLinkedin className="text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-4">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
              <p className="text-xs lg:text-sm text-gray-400">
                Copyright &copy; all rights reserved. Powered by Grabit.
              </p>
              <div>
                <img src="/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
