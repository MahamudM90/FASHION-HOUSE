import React,{useState} from "react";
import ProductItem from "./ProductItem";
import axios from 'axios'
const Products = () => {
  const [products, setProduct] = useState([]);
  axios.get('products.json')
  .then(response => {
    setProduct(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  
  return (
    <div className="lg:px-36 pb-16">
      <div className="py-10 flex justify-center items-center">
        <h1 className="text-2xl font-semibold bg-white w-fit p-5 shadow-lg">Popular Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-7 justify-center items-center">
        {products.map((product) => (
          <ProductItem key={product.id} product={product}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default Products;
