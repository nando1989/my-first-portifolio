import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact from "./routes/Contact";
import Home from "./routes/Home";

const router = createBrowserRouter([
  
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
])

ReactDOM.createRoote(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);