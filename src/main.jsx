import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./routes";

import { CartProvider } from "./context/CartProvider";
import { WishlistProvider } from "./context/WishlistProvider";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  </CartProvider>,
);
