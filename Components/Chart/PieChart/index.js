import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { PieChart, Pie, Sector } from "recharts";
import style from "./Chart.module.css";

function MyPieChart(props) {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    // percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${payload.name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#ccc"
      >
        {/* {`(percent ${(percent * 100).toFixed(2)}%)`} */}
        {`MCap ${value.toFixed(2)}%`}
      </text>
    </g>
  );
}

export default function App() {
  const [Globaldata, setGlobaldata] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  useEffect(() => {
    const search = async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/global");
      const result = res.data.data.market_cap_percentage;
      setGlobaldata(result);
    };
    search();
  }, []);

  ///////change object to array to make an array then we can map on jsx
  const data = Object.keys(Globaldata).map((coin) => {
    return { name: coin, marketCap: Globaldata[coin] };
  });

  return (
    <div className={style.toptable}>
      <div className={style.toptable_childL}>
        <PieChart width={550} height={350}>
          <Pie
            activeIndex={activeIndex}
            activeShape={MyPieChart}
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="gray"
            dataKey="marketCap"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </div>
      <div className={style.toptable_childR}>
        <table className={style.userTable}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>MarketCap</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.name}>
                <td className={style.infotable}>{coin.name}</td>
                <td className={style.infotable}>
                  {coin.marketCap.toFixed(2)} %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
