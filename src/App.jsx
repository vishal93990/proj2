import React from "react";
import "./App.css";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import Contact, { contactData } from "./Pages/Contact";
import Applayout from "./Components/Applayout";
import Error from'./Pages/Error'
import CountryDetails from "./Components/UI/CountryDetails";

const router = createBrowserRouter([
  {
    path:"/",
    element :<Applayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/proj2",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
        action:contactData
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
