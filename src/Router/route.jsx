import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("../../public/phones.json"),
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/phonedetails/:id",
        element: <PhoneDetails />,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);

export default router;
