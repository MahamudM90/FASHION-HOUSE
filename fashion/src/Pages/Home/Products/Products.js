import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const data = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image:
        "https://static.vecteezy.com/system/resources/previews/008/847/318/original/isolated-black-t-shirt-front-free-png.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image:
        "https://www.mensjournal.com/wp-content/uploads/mj-618_348_best-winter-hats-watch-hat-by-carhartt.jpg?quality=86&strip=all",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://www.freepnglogos.com/uploads/jacket-png/jacket-denim-solutions-website-launching-program-denim-solutions-ltd-24.png",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image:
        "https://pngimg.com/d/running_shoes_PNG5782.png",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      image:
        "https://www.pngitem.com/pimgs/m/244-2441637_campus-shoes-png-transparent-png.png",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      image:
        "https://freepngimg.com/thumb/jacket/37126-9-jacket-transparent-image.png",
    },
  ];
  return (
    <div className="lg:px-36 pb-16">
      <div className="py-10 flex justify-center items-center">
        <h1 className="text-2xl font-semibold bg-white w-fit p-5 shadow-lg">Popular Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-7 justify-center items-center">
        {data.map((d) => (
          <ProductItem key={d.id} d={d}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default Products;
