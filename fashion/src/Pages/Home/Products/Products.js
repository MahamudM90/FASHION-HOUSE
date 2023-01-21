import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const data = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image:
        "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2013/9/Seller/1347469/Images/1347469_0_201309221024030000000.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image:
        "https://static-01.daraz.com.bd/p/3ba7db2f9e33b650d3ffb8634317c031.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://cf.shopee.sg/file/b991db4ce49fe12a4424d67e8669af9b",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image:
        "https://i0.wp.com/homnabazaronline.com/wp-content/uploads/2021/04/men-casual-pant-500x500-1.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      image:
        "https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=",
    },
  ];
  return (
    <div className="lg:px-36 pb-16">
      <h1 className="text-3xl py-12">Popular Products</h1>
      <div className="grid grid-cols-3 gap-7 justify-center items-center">
        {data.map((d) => (
          <ProductItem key={d.id} d={d}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default Products;
