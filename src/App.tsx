import React from 'react';

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Main from './Components/Layout/Main';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import About from './Components/Pages/About/About';

import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import AddProduct from './Components/Pages/Dashboard/Dashboard/AddProduct';
import AllSeller from './Components/Pages/Dashboard/Dashboard/AllSeller';
import AllBuyers from './Components/Pages/Dashboard/Dashboard/AllBuyers';
import AllUser from './Components/Pages/Dashboard/Dashboard/AllUser';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import MyOrder from './Components/Pages/Dashboard/Dashboard/MyOrder';
import MyProduct from './Components/Pages/Dashboard/Dashboard/MyProduct';


function App() {
  const route = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/home', element: <Home></Home> },
        { path: '/', element: <Home></Home> },
        { path: '/login', element: <Login></Login> },
        { path: '/singup', element: <Signup></Signup> },
        { path: '/about', element: <About></About> },
        { path: '/dashboard', element: <Dashboard></Dashboard> },
        { path: 'dashboard/addProduct', element: <AddProduct></AddProduct> },
        { path: '/dashboard/allSeller', element: <AllSeller></AllSeller> },
        { path: '/dashboard/allBuyers', element: <AllBuyers></AllBuyers> },
        { path: '/dashboard/allusers', element: <AllUser></AllUser> },
        { path: '/dashboard/myorder', element: <MyOrder></MyOrder> },
        { path: '/dashboard/myProduct', element: <MyProduct></MyProduct> },


      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
