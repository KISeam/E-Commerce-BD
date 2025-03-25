import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact Us/Contact.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import AddToCarts from "./Pages/Add To Cart/AddToCarts.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import Login from "./Components/Login/Login.jsx";
import Products from "./Pages/Products/Products.jsx";
import Wishlist from "./Pages/Wishlist/Wishlist.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import SingleProduct from "./Components/SingleProduct.jsx";
import SingleBlog from "./Components/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />, // Done
      },
      {
        path: "/about",
        element: <About />, // Done
      },
      {
        path: "/contact",
        element: <Contact />, // Done
      },
      {
        path: "/blog",
        element: <Blog />, // Done
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />, // Done
      },
      {
        path: "/faq",
        element: <FAQ />, // Done
      },
      {
        path: "/products",
        element: <Products />, // Done
      },
      {
        path: "/products/:id",
        element: <SingleProduct />, // Done
      },
      {
        path: "/addtocart",
        element: <AddToCarts />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />, // Done
      },
    ],
  },
  {
    path: "/login",
    element: <Login />, // Done
  },
  {
    path: "/signup",
    element: <Signup />, // Done
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
