import React from "react";

const orderListData = [
    {
        _id: "1",
        user: "Mr. Smith",
        email: "example@example.com",
        productName: "T-Shirt",
        quantity: "1",
        address: "Dhaka, Bangladesh",
        status: "Paid",
    },
    {
        _id: "2",
        user: "Mr. Jones",
        email: "example@example.com",
        productName: "Shirt",
        quantity: "2",
        address: "Dhanmondi, Dhaka, BD",
        status: "Not Paid",
    },
]

const OrderList = () => {
  return (
    <div>
      <h1>Dashboard / Order List</h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full border-2 text-center">
          <thead>
            <tr>
              <th>Serial</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {orderListData.length > 0 ? (
              orderListData.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>{item.user}</td>
                  <td>{item.email}</td>
                  <td>{item.productName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.address}</td>
                  <td>{item.status}</td>
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
                <td colSpan="8">No Product Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
