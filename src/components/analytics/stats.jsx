import React from "react";
import { StatsColumnOne, StatsColumnTwo } from "./col-1-stats";

const NetData = () => {
  return (
    <div className="stats d-flex justify-content-center ">
      <div className="stats-column-1">
        {StatsColumnOne.map((columnOne) => {
          const { mainHead, text, subHead, subheadDetail } = columnOne;
          return (
            <div className="stats-column-1__row">
              {mainHead && <h6>{mainHead}</h6>}
              {text && <p className="text-primary">{text}</p>}
              <h3>{subHead}</h3>
              <h6>{subheadDetail}</h6>
            </div>
          );
        })}
      </div>
      <div className="stats-column-2">
        {StatsColumnTwo.map((columnTwo, index) => {
          const { mainHead, subHead, subheadDetail, text } = columnTwo;
          return (
            <div className={`stats-column-2__row row-${index + 1}`}>
              {mainHead && <h6>{mainHead}</h6>}
              {text && <p className="text-primary">{text}</p>}
              <h3>{subHead}</h3>
              <h6>{subheadDetail}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NetData;
