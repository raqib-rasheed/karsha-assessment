import React, { useEffect, useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

export default function Chart() {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    //value for the chart assigned.
    return setChartData({
      a: 51,
      b: 6,
      d: 24,
      c: 15,
    });
  }, []);
  const chartDataSet = useMemo(() => {
    return Object.values(chartData);
  }, [chartData]);
  const state = {
    labels: Object.keys(chartData),
    datasets: [
      {
        label: "bytes of Code",
        backgroundColor: ["#506f9c", "#fc8811", "#adaaaa", "#f0bc2d"],
        hoverBackgroundColor: ["#5e6ff9", "#ffee11", "#6d6773", "#c9ac11"],
        fill: false,
        borderColor: "rgba(0,0,0,.45)",
        borderWidth: 2,
        data: chartDataSet,
      },
    ],
  };

  return (
    <Card className="chart-container">
      <Card.Body>
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: "Project Name",
              fontSize: 20,
            },
            fill: false,
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </Card.Body>
    </Card>
  );
}
