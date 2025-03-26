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
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/addtocart",
        element: <AddToCarts />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
