import React from "react";

const customerList = [
    {
        _id: "1",
        name: "John",
        email: "example@example.com",
        address: "Dhaka, Bangladesh",
        phone: "123456789",
        status: "Active",
    },
    {
        _id: "2",
        name: "Smith",
        email: "smith@example.com",
        address: "Dhanmondi, Dhaka, BD",
        phone: "987654321",
        status: "Inactive",
    }
]

const AllCustomer = () => {
  return (
    <div>
      <h1>Dashboard / All Customer List</h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full border-2 text-center">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {customerList.length > 0 ? (
              customerList.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
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

export default AllCustomer;
