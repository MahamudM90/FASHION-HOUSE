import React from "react";


const product = [
  {
    _id: "1",
    productName: "Product Name 1",
    available: "Available",
    price: "100",
    numberOfStock: "10",
    image: "https://pngimg.com/d/running_shoes_PNG5782.png",
  },
  {
    _id: "2",
    productName: "Product Name 2",
    available: "Available",
    price: "300",
    numberOfStock: "20",
    image: "https://www.mensjournal.com/wp-content/uploads/mj-618_348_best-winter-hats-watch-hat-by-carhartt.jpg?quality=86&strip=all",
  },
  {
    _id: "3",
    productName: "Product Name 3",
    available: "Available",
    price: "500",
    numberOfStock: "30",
    image: "https://freepngimg.com/thumb/jacket/37126-9-jacket-transparent-image.png",
  },
];

const ProductList = () => {
  return (
    <div>
      <h1>Dashboard / Product List</h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full border-2 text-center">
          <thead>
            <tr>
              <th>Serial</th>
              <th>ProductName</th>
              <th>Availability</th>
              <th>Price</th>
              <th>Image</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {product.length > 0 ? (
              product.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>{product.productName}</td>
                  <td>{product.available}</td>
                  <td>{product.price}</td>
                  <td>
                    <img className="w-12 h-10" src={product.image} alt="" />
                  </td>
                  <td>{product.numberOfStock}</td>
                  <td>
                    <button className="btn btn-xs bg-blue-600 hover:bg-blue-700 border-0 mr-2">
                      Edit
                    </button>
                    <button className="btn btn-xs btn-warning">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Product Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
