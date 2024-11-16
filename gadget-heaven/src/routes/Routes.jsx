import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Home from "../pages/Home";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import Features from "../pages/Features";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout>Hello world!</MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: async ({ params }) => {
          const response = await fetch("../products.json");
          if (!response.ok) throw new Error("Failed to load product details");
          const products = await response.json();
          const product = products.find(
            (product) => product.product_id === parseInt(params.id)
          );
          if (!product) {
            throw new Response("Product not found", { status: 404 });
          }
          return product;
        },
      },
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      { path: "/faq", element: <Features></Features> },
      { path: "/statistics", element: <Statistics></Statistics> },
    ],
  },
]);

export default routes;
