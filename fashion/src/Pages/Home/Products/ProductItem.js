import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { name, image, id, price, description } = product;
  return (
    <Link to={`/product/${id}`}>
      <div className="card w-82 bg-base-100 shadow-xl">
        <figure>
          <img className="h-72 w-fit" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary bg-blue-600 hover:bg-blue-700 border-0">
              ${price}
            </div>
          </h2>
          <p>
            {
              // slice the description to 100 characters
              description.slice(0, 50) + "..."
            }
          </p>
          {/* <div className="card-actions justify-end">
            <div className="btn bg-blue-600 border-0 text-white hover:bg-blue-700">
              Add To Cart
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
