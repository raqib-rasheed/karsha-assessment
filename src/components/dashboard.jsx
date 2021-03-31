import React from "react";
import Details from "./analytics/details";
import NetData from "./analytics/stats";
import Chart from "./chart/chart";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard__project p-3">
          <div className="dashboard__head">
            <h6>Dashboard</h6>
            <select className="mx-1 dashboard__head-select">
              <option>All projects</option>
            </select>
          </div>
          <Chart />
          <Details />
        </div>
        <NetData />
      </div>
    </>
  );
};

export default Dashboard;
