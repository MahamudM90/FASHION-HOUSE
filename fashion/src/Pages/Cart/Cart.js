import React from "react";

const Cart = () => {
  return (
    <div className="lg:px-36 pb-16 bg-base-300">
      <div className="py-10 flex justify-center items-center">
        <h1 className="text-2xl font-semibold bg-white w-fit p-5 shadow-lg">
          Product Cart Page
        </h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full shadow-lg">
          <thead>
            <tr className="text-center">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => {
              return (
                <tr className="text-center">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn bg-blue-600 hover:bg-blue-700 border-0 btn-xs mr-2">Edit</button>
                    <button className="btn btn-warning btn-xs">Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
