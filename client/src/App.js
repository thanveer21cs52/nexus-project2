
import React from 'react';
import './App.css';
import Nav from '../src/componets/Nav' // Correct the import path
import Content from '../src/pages/Content';
import Signup from '../src/pages/Signup';
import Login from '../src/pages/Login';
import User from '../src/pages/User'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:"/home",
    element:<User />
  }
]);

function App() {
  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

