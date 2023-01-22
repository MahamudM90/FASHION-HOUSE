import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:px-36 pb-16 bg-base-200 ">
      <div className="drawer drawer-mobile blue-200">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-6">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-white">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {
              <>
                <li>
                  <Link to="/dashboard/customer-list" className="font-bold">
                    Customer List
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/add-customer" className="font-bold">
                    Add Customer
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/product-list" className="font-bold">
                    All ProductList
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/add-product" className="font-bold">
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/order-list" className="font-bold">
                    Order List
                  </Link>
                </li>
              </>
            }
            
                  
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
