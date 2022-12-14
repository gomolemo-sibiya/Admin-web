import './bar-style.css'
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    vu: 2000,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    vu: 2000,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    vu: 2000,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    vu: 2000,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    vu: 2000,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    vu: 2000,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    vu: 2000,
    amt: 2100
  }
];

export default function BarChartComponent() {
  return (
    <div className='container'>
        <BarChart
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}  
          width={500}
          height={150}
          data={data}
          margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
          }}
        >
            <CartesianGrid strokeDasharray="3 3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#56C596" />
            <Bar dataKey="uv" fill="#329D9C" />
            <Bar dataKey="vu" fill="#354868" />
        </BarChart>
    </div>    
  );
}