import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authenction/Login/Login";
import Register from "../Pages/Authenction/Register/Register";
import Components from "../Pages/Components/Components";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/components",
        element: <Components />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path:'/register',
      element:<Register />
      }
    ],
  },
]);

export default router;
