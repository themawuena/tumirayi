import { LineChart } from "@mantine/charts";
import React from "react";

const LineCart = () => {
  const data  = [
    { date: 'Jan', Amount: 100 },
    { date: 'Feb', Amount: 100 },
    { date: 'Mar', Amount: 500 },
    { date: 'Apr', Amount: 150 },
    { date: 'May', Amount: 30 },
    { date: 'Jun', Amount: 105 },
    { date: 'Jul', Amount: 230 },
    { date: 'Aug', Amount: 140 },
    { date: 'Sep', Amount: 150 },
    { date: 'Oct', Amount: 201 },
    { date: 'Nov', Amount: 0 },
    { date: 'Dec', Amount: 410 },
  ];
  return (
    <LineChart
      h={300}
      data={data}
      series={[{ name: "Amount", label: "Sales" }]}
      dataKey="date"
      type="gradient"
      gradientStops={[
        { offset: -10, color: "#1B59F800" },
        { offset: 100, color: "#1B59F8" },
      ]}
      mt={10}
      strokeWidth={5}
      curveType="natural"
      yAxisProps={{ domain: [0, 500] }}
      valueFormatter={(value) => `R${value}`}
    />
  );
};

export default LineCart;
