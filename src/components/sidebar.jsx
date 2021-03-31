import React from "react";
import { CgInsights } from "react-icons/cg";
import { FaBuilding, FaNetworkWired } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiBook2Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <AiFillDashboard />
          Dashboards
        </li>
        <li className="sidebar__link">
          <FaNetworkWired />
          Departments
        </li>
        <li className="sidebar__link">
          <FaBuilding />
          Clients
        </li>
        <li className="sidebar__link">
          <RiBook2Line />
          Products
        </li>
        <li className="sidebar__link">
          <BsFillPeopleFill />
          Consumers
        </li>
        <li className="sidebar__link">
          <CgInsights />
          Insights
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
