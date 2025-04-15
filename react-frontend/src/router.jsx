import React from "react";
import { createBrowserRouter } from "react-router";
import LoginPage from "./pages/loginPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/profile",
        element: <UserDetailsPage />,
    },
]);

export default router;
