import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Vehicles from './Vehicles';
import News from './News';
import Contact from './Contact';
import Bookings from './Bookings';
import LogIn from './LogIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "vehicles",
    element: <Vehicles />
  },
  {
    path: "news",
    element: <News />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "bookings",
    element: <Bookings />
  },
  {
    path: "login",
    element: <LogIn />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//Software Project

