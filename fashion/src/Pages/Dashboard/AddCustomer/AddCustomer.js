import React from "react";

const AddCustomer = () => {
  return (
    <>
      <h1>Dashboard / Add Customer</h1>
      <div className="bg-base-200">
        <div>
          <h1 className="text-3xl font-bold text-center mb-3">Add Customer</h1>
        </div>
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customer Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customer Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customer Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-600 border-0 text-white hover:bg-blue-700">
                  Add Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
