import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import CartProvider from "./utility/CartProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </StrictMode>
  </HelmetProvider>
);
