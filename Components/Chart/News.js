import React, { useContext } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Chart(props) {

  // console.log(props.data2);
  // console.log(coinCTX.Chartdata);
  // console.log(coinCTX.Chartdata2);

  // const data = [
  //   { name: "Page A", uv: 62389.05373707468 },
  //   { name: "Page B", uv: 62193.68335748939 },
  //   { name: "Page B", uv: 32036.303972440524 },
  //   { name: "Page B", uv: 50962.814229250136 },
  //   { name: "Page B", uv: 61999.57837579247 },
  // ];

  const mydata = props.data;
  const mydata2 = props.data2


  console.log({mydata});
  console.log({mydata2});

  const newD =mydata &&  mydata.map((mdata) => ({
    date: new Date(mdata[0]).toLocaleDateString("en-US"),
    price: mdata[1],
  }));

  const newD2 =mydata2 && mydata2.map((mdata) => ({
    price2: mdata[1],
  }));

  for (const key in newD) {
    try {
      newD[key].price2 = newD2[key].price2;
    } catch (error) {}
  }

  // console.log(newD);

  const getInnerWidth = () => {
    var WindowWidth = 1200;
    switch (true) {
      case WindowWidth < 400:
        WindowWidth = window.innerWidth;
        break;
      case WindowWidth < 800:
        WindowWidth = 500;
        break;
      case WindowWidth < 1200:
        WindowWidth = 600;
        break;
      default:
        WindowWidth = 700;
        break;
    }
    return WindowWidth;
  };

  const InnerWidth = getInnerWidth();
  const InnerHeight = getInnerWidth() / 2;

  // console.log(window.innerWidth);
  // console.log(InnerWidth);
  // console.log(InnerHeight);
  // console.log(newD2)
  // console.log(newD);

  const renderLineChart = (
    <LineChart
      width={InnerWidth}
      height={InnerHeight}
      data={newD}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="white" dot={false} />
      <Line type="monotone" dataKey="price2" stroke="red" dot={false} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );
  return (
    <div>
      <div>{renderLineChart}</div>
    </div>
  );
}

export default Chart;

//width={10} height={10}
