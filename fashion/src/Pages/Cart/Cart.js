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
          <thead className="text-center">
            <tr className="text-center">
              <th>
                Serial
              </th>
              <th>Product Name</th>
              <th>Customer Detail</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {[1, 2, 3].map((item) => {
              return (
                <tr className="text-center">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex justify-center items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img className="h-12 w-12 mask mask-squircle"
                            src="https://pngimg.com/d/running_shoes_PNG5782.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">ProductName 1</div>
                        <div className="text-sm opacity-50">Dhaka, BD</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Name: John Doe, Address: Dhaka, BD
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Price: 1000
                    </span>
                  </td>
                  <td>
                    <div className="flex justify-center items-center space-x-3">
                      <button className="btn btn-sm btn-square btn-ghost">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <div className="bg-base-200 px-5">1</div>
                      <button className="btn btn-sm btn-square btn-ghost">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </td>
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
