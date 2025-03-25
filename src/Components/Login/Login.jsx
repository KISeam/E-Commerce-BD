import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="w-full max-w-md p-8 space-y-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-center text-gray-500">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs sm:text-sm md:text-base text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-100 focus:bg-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs sm:text-sm md:text-base text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-100 focus:bg-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-block border-none bg-gradient-to-r from-indigo-500 to-purple-500 text-xs sm:text-sm md:text-base text-white hover:from-indigo-600 hover:to-purple-600"
          >
            Sign In
          </button>
        </form>

        <div className="text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
