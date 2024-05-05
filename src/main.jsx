
import Form from './Components/UploadForm.jsx'
import Signup from './Components/signup.jsx'
import Login from './Components/login.jsx'
import Dashboard from './Components/Dashboard.jsx'
import './index.css'
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([

  {
    path: "print_react/student/upload/",
    element:<Form/>
  },
  {
    path: "print_react/student/signup",
    element: <Signup/>,
  },
  {
    path: "print_react/student/login",
    element: <Login />
  },
  {
    path: "print_react/student/dashboard",
    element: <Dashboard />
  }


]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

