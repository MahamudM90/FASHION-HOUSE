import React from "react";

const ProductItem = ({ d }) => {
  const { name, image, id, price } = d;
  return (
    <div className="card w-82 bg-base-100 shadow-xl">
      <figure>
        <img className="h-72 w-fit" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary bg-blue-600 hover:bg-blue-700 border-0">${price}</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="btn bg-blue-600 border-0 text-white hover:bg-blue-700">Add To Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
