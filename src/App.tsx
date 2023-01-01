import React from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Main from "./Components/Layout/Main";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";
import About from "./Components/Pages/About/About";

import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "./Components/Pages/Dashboard/Dashboard/AddProduct";
import AllSeller from "./Components/Pages/Dashboard/Dashboard/AllSeller";
import AllBuyers from "./Components/Pages/Dashboard/Dashboard/AllBuyers";
import AllUser from "./Components/Pages/Dashboard/Dashboard/AllUser";
import "aos/dist/aos.css"; // You can also use <link> for styles

import MyOrder from "./Components/Pages/Dashboard/Dashboard/MyOrder";
import MyProduct from "./Components/Pages/Dashboard/Dashboard/MyProduct";
import UserProvider from "./context/UserProvider";
import ProductsDetails from "./Components/Pages/ProductsDetails/ProductsDetails";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from "./Routes/PrivateRoutes";
import SingleCategories from "./Components/Pages/Home/Categories/SingleCategories";
import Contact from "./Components/Pages/Contact/Contact";
import Payment from "./Components/Payment/Payment";
import PaymentFail from "./Components/Payment/PaymentFail";
import UserDashboard from "./Components/Pages/Dashboard/Dashboard/UserDashboard";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/singup", element: <Signup></Signup> },
        { path: "/about", element: <About></About> },
        { path: "/contact", element: <Contact></Contact> },
        {
          path: "/productsdetails/:id",
          loader: ({ params }) =>
            fetch(
              `https://dorkar-shop-server-siamcse.vercel.app/productdetails/${params.id}`
            ),
          element: <ProductsDetails></ProductsDetails> ,
        },
        {
          path: "/sinlgecategories/:id",
          loader: ({ params }) =>
            fetch(
              `https://dorkar-shop-server-siamcse.vercel.app/products/${params.id}`
            ),
          element: <SingleCategories></SingleCategories>,
        },
        {
          path: "/payment/success", element: <Payment></Payment>
        },
        {
          path: "/payment/fail", element: <PaymentFail></PaymentFail>
        }
      ]
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
         
          <Dashboard></Dashboard>
        </PrivateRoutes>
      ),

      children: [ 
        { path: "/dashboard/", element: <UserDashboard></UserDashboard> },
        { path: "/dashboard/addProduct", element: <AddProduct></AddProduct> },
        { path: "/dashboard/allSeller", element: <AllSeller></AllSeller> },
        { path: "/dashboard/allBuyers", element: <AllBuyers></AllBuyers> },
        { path: "/dashboard/allusers", element: <AllUser></AllUser> },
        { path: "/dashboard/myorder", element: <MyOrder></MyOrder> },
        { path: "/dashboard/myProduct", element: <MyProduct></MyProduct> },
      ],
    },
  ]);
  return (
    <div className="App bg-white  ">
      <UserProvider>
        <RouterProvider router={route}></RouterProvider>
      </UserProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;