import Box from "@mui/material/Box";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Oct",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name:"Nov",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Dec",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Jan",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Feb",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Mar",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  
];

export function Graph() {
  return (
    <div>
      <div>
      <h4 style={{ marginTop: "3%", marginLeft: "2%" }}>ATTENDANCE</h4>
          <Box
            sx={{
              width: "30%",
              height: "100%",
              backgroundColor: "white",
              marginTop: "1%",
              marginLeft: "2%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
              position: "relative",
              padding: "3%",
              className: "table-responsive",
            }}
          >
            <h1 style={{ textAlign: "center", color: "green" }}>80%</h1>
            <h5 style={{ justifyContent: "center", textAlign: "center" }}>
              Go To Classes
            </h5>
          </Box>
      </div>
    <div >
      <Box
            sx={{
              width: "50%",
              height: "100%",
              backgroundColor: "white",
              marginTop: "1%",
              marginLeft: "2%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
              position: "static",
              padding: "2%",
            }}
          >
      <h5>TASK</h5>
     <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </Box>
    </div>
    </div>
  );
}
