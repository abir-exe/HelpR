// real code
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  //   const [data, setData] = useState([]);
  const data = useLoaderData();

  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  console.log(category);

  useEffect(() => {
    if (category && category !== "All") {
      // Filter products by selected category
      const filteredByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    } else {
      // Show all products by default
      setProducts(data);
    }
    setActiveCategory(category || "All");
  }, [category, data]);

  //   useEffect(() => {
  //     const filteredByCategory = [...data].filter(
  //       (product) => product.category === category
  //     );
  //     setProducts(filteredByCategory);
  //   }, [category, data]);
  //   const handleCategoryChange = (selectedCategory) => {
  //     setActiveCategory(selectedCategory);
  //     setProducts(
  //       selectedCategory === "All"
  //         ? data
  //         : data.filter((product) => product.category === selectedCategory)
  //     );
  //   };

  return (
    <div className="flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <p className="col-span-3 text-center text-3xl items-center justify-center w-auto">
            <img
              className="h-1/2"
              src="https://i.ibb.co.com/W0F84Ym/vector-illustration-about-concept-no-items-found-no-results-found-675567-6665.jpg"
              alt=""
            />
            No products are available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
