import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function InventoryCHart(props) {
  const data = props.data;
  const numberone = props.items[0];
  const numbertwo = props.items[1];
  const numberthree = props.items[2];

  // console.log(props.items);
  // console.log("numberone",numberone);
  // console.log("numbertwo",numbertwo);
  // console.log("numberthree",numberthree);
  // console.log("data",data);

  if (data.length <= 0 || typeof data === undefined) {
    console.log(data);
    return;
  } else {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={numberone} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={numbertwo}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey={numberthree}
          stroke="#82ca9d" />
      </LineChart>
    );
  }
}
