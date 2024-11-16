import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Categories = ({ categories }) => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("");

  // Update active category based on URL path
  useEffect(() => {
    const currentCategory = location.pathname.split("/").pop();
    setActiveCategory(currentCategory);
  }, [location]);

  return (
    <div>
      <div className="tabs tabs-lifted flex flex-col w-full   gap-3 px-5 ">
        {categories.map((category) => (
          <Link
            key={category.category}
            to={`/category/${category.category}`}
            role="tab"
            className={`tab px-3 btn text-center mx-auto ${
              activeCategory === category.category
                ? "bg-purple-500 text-white w-full"
                : "bg-gray-200 w-full "
            }`}
            onClick={() => setActiveCategory(category.category)}
          >
            {category.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
