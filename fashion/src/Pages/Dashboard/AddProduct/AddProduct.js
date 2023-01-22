import React from 'react';

const AddProduct = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
      <div className="py-10 flex justify-center items-center">
          <h1 className="text-2xl font-semibold bg-white w-fit p-5 shadow-lg">
          Add  Products
        </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input type="text" placeholder="product name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" placeholder="$price" className="input input-bordered" required/>
                <label className="label">
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                <label className="label">
                </label>
              </div>
              <span className="label-text">Description</span>
              <textarea className="textarea textarea-primary " placeholder="message"></textarea>
              
              <div className="form-control mt-6">
                <button className="btn bg-blue-600 border-0 text-white hover:bg-blue-700">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;