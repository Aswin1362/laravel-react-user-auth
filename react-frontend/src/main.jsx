import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import ContextProvider from "./context/contextProvider.jsx";
import "./index.css";
import router from "./router";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </StrictMode>
);
