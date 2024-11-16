import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { name, product_id, category, product_title, product_image, price } =
    product || {};
  return (
    <Link to={`/product/${product_id}`}>
      <div className="card bg-base-100 w-auto shadow-xl">
        <figure>
          <img className="h-[200px] w-full" src={product_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <Link to={`/product/${product_id}`} className="btn">
            View Details
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
