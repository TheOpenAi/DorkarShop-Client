import React from 'react';

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Main from './Components/Layout/Main';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import About from './Components/Pages/About/About';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  const route = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/home', element: <Home></Home> },
        { path: '/', element: <Home></Home> },
        { path: '/login', element: <Login></Login> },
        { path: '/singup', element: <Signup></Signup>},
        { path: '/about', element: <About></About>},
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
