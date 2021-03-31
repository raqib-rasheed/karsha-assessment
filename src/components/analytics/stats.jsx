import React from "react";

const NetData = () => {
  return (
    <div className="stats d-flex justify-content-center ">
      <div className="stats-column-1">
        <div className="stats-column-1__row">
          <h6>Departments</h6>
          <p className="text-primary">Add a Department</p>
          <h3>12</h3>
          <h6>In Total</h6>
        </div>
        <div className="stats-column-1__row">
          <h6>Consumers</h6>
          <p className="text-primary">Add a Consumer</p>
          <h3>24</h3>
          <h6>Active</h6>
        </div>

        <div className="stats-column-1__row">
          <h6>Surveys</h6>
          <p className="text-primary">Create a new survey</p>
          <h3>65</h3>
          <h6>In Total</h6>
        </div>
        <div className="stats-column-1__row">
          <h6>Project Summary</h6>
          <p className="text-primary">Add a new project</p>
          <h3>24</h3>
          <h6>Active</h6>
        </div>
        <div className="stats-column-1__row">
          <div className="d-flex-column">
            <h3>12</h3>
            <h6>In Total</h6>
          </div>
        </div>
      </div>
      <div className="stats-column-2">
        <div className="stats-column-2__row-2">
          <h6>Clients</h6>
          <p className="text-primary">Add a client</p>
          <h3>180</h3>
          <h6>In Total</h6>
        </div>

        <div className="stats-column-2__row-2">
          <h3>70</h3>
          <h6>In Total</h6>
        </div>

        <div className="stats-column-2__row-2 pt-4">
          <h3>8</h3>
          <h6>In Total</h6>
        </div>

        <div className="stats-column-2__row-2 pt-4">
          <h3>8</h3>
          <h6>Drafts</h6>
        </div>
        <div className="stats-column-2__row-2">
          <h3>120</h3>
          <h6>Completed</h6>
        </div>
      </div>
    </div>
  );
};

export default NetData;
