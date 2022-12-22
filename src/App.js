import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';

function App() {

  const route = createBrowserRouter([ 
    {
      path: '/', element:<Main></Main>,children: [
        { path: '/home', element: <Home></Home> },
        { path: '/', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/login', element: <Login></Login>},
        { path: '/singup', element: <Signup> </Signup>},
      ]
    }
  ])
  return (
    <div className="">
        <RouterProvider router={route}>

        </RouterProvider>
    </div>
  );
}

export default App;
