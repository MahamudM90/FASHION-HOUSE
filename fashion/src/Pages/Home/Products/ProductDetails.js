import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`products.json`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="lg:px-36 pb-16 bg-base-200">
        <div className="py-10 flex justify-center items-center">
          <h1 className="text-2xl font-semibold bg-white w-fit p-5 shadow-lg">
            Particular Product
          </h1>
        </div>
        <div className="flex justify-center items-center">
          {product.length > 0 &&
            product.map((item) => {
              if (item.id == id) {
                return (
                  <div
                    className="card w-82 bg-base-100 shadow-xl"
                    key={item.id}
                  >
                    <figure>
                      <img
                        className="h-72 w-fit"
                        src={item.image}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body flex justify-center items-center">
                      <h2 className="text-3xl font-semibold flex justify-center items-center">
                        {item.name}
                        <div className="badge badge-secondary bg-blue-600 hover:bg-blue-700 border-0 ml-2">
                          ${item.price}
                        </div>
                      </h2>
                      <p>{item.description}</p>
                      <div className="card-actions justify-center mt-2">
                        <div className="btn bg-blue-600 border-0 text-white hover:bg-blue-700">
                          Add To Cart
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
