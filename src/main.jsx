import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Router from "./layout/Router";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { StrictMode } from "react";
import AuthProvider from "./Context/AuthProvider";
import ViewProfile from "./Component/ViewProfile";
import Order from "./Component/Order";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Router,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/viewProfile",
        element: (
          <PrivateRoutes>
            <ViewProfile></ViewProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <Order></Order>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
