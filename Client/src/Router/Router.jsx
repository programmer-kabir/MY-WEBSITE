import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authenction/Login/Login";
import Register from "../Pages/Authenction/Register/Register";
import Components from "../Pages/Components/Components";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Products from "../Pages/Products/Products";
import TermsAndCondition from "../Pages/Terms/TermsAndCondition";
import License from "../Pages/License/License";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./privetRoute";

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
        element: <Components />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      // Todo
      {
        path: "/web-site-admin-login",
        element: <Login />,
      },
      // {
      //   path: "/register",
      //   element: <Register />,
      // },
      {
        path: "/terms_Condition",
        element: <TermsAndCondition />,
      },
      {
        path: "/license",
        element: <License />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin-panel-dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>
  },
]);

export default router;
