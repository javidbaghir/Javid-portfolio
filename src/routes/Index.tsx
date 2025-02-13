import { RouteObject } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFoundPage";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
    ],
  },
];

export default routes;