import React from "react";

const AddProduct = () => {
  return (
    <>
      <h1>Dashboard / Add Product</h1>
      <div className="bg-base-200">
        <div>
          <h1 className="text-3xl font-bold text-center mb-3">Add Product</h1>
        </div>
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-xs w-full max-w-xs"
                />
                <label className="label"></label>
              </div>
              <span className="label-text">Description</span>
              <textarea
                className="textarea textarea-primary "
                placeholder="Message"
              ></textarea>

              <div className="form-control mt-6">
                <button className="btn bg-blue-600 border-0 text-white hover:bg-blue-700">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
