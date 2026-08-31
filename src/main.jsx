import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthContext/AuthProvider';
import Order from './Components/Orders/Order';
import Profile from './Components/Profile/Profile';
import PrivateRoutes from './Components/Routes/PrivateRoutes';
import Dashboard from './Components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/register",
        Component:Register,
      },
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/order",
        element:<PrivateRoutes><Order></Order></PrivateRoutes>
      },
      {
        path:"/profile",
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path:"/dashboard",
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)