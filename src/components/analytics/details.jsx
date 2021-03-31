import React from "react";
import { Card } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

const Details = () => {
  return (
    <Card className="chart-details p-4" style={{ height: "40%", width: "70%" }}>
      <h4>Marketing</h4>
      <div className="chart-details__body py-2">
        <div>
          <span>Country/Location : UK/Liverpool</span>
        </div>
        <div>
          <span>Department Owner : jessica</span>
        </div>
        <span>Email : jessica@gmail.com</span>
        <div>
          <span>Country/Location : UK/Liverpool</span>
        </div>
        <div>
          <span>Country/Location : UK/Liverpool</span>
        </div>
      </div>
      <div className="chart-details__footer-infos d-flex justify-content-between pt-2">
        <div className="chart-details__footer-info-1 d-flex align-items-center">
          <h4>8</h4>
          <h6 className="px-3 br-right">clients</h6>
        </div>
        <div className="chart-details__footer-info-2 d-flex align-items-center">
          <h4>12</h4>
          <h6 className="px-3 br-right">Projects</h6>
        </div>
        <div className="chart-details__footer-info-3 d-flex align-items-center">
          <h4>29</h4>
          <h6 className="px-3">Surveys</h6>
        </div>
        <BsTrash className="chart-details__footer--trash-icon grey-icon" />
      </div>
    </Card>
  );
};

export default Details;
