import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  let title = "Gadget Heaven"; // Default site name

  if (location.pathname === "/") {
    title = "Home | Site Name";
  } else if (location.pathname === "/dashboard") {
    title = "Dashboard | Site Name";
  } else if (location.pathname === "/product-details") {
    title = "Product Details | Site Name";
  } // Add more routes as needed
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
