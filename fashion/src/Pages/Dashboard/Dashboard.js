import React from "react";
import dashboard from "../../../src////assest///img.svg";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="lg:px-36 pb-16 bg-base-200 ">
      <div className="drawer drawer-mobile lg:px-56 blue-200">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-6">
          <Outlet></Outlet>
          <div className="flex justify-center items-center">
            <img className="w-full" src={dashboard} alt="" />
          </div>
        </div>
        <div className="drawer-side bg-white">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {
              <li>
                <Link to="/dashboard/allcustomer" className="font-bold">
                  All Customers
                </Link>
              </li>
            }
            {
              <>
                <li>
                  <Link to="/dashboard/addcustomer" className="font-bold">
                    Add Customer
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/orderlist" className="font-bold">
                    All Order List
                  </Link>
                </li>
                <li>
                  <Link to="/product" className="font-bold">
                    All ProductList
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct" className="font-bold">
                    Add Product
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
