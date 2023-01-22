import React from "react";
import dashboard from "../../../assest/img.svg";
const DashboardView = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
      <div className="flex justify-center items-center">
        <img className="w-3/4" src={dashboard} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold text-center">
          Welcome to the admin dashboard
        </h1>
      </div>
    </div>
  );
};

export default DashboardView;
