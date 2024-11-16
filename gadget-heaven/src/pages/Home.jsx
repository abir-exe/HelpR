import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Home</title>
      </Helmet>
      <Banner></Banner>

      <Heading
        title={"Explore Cutting-Edge Gadgets"}
        subtitle={"this is subtitle"}
      ></Heading>
      <div className="flex">
        <Categories categories={categories}></Categories>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
