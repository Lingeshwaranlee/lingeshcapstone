import Box from "@mui/material/Box";
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
    name: "Sun",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Mon",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Tue",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Wed",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Thu",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Fri",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Sat",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export function Graph1() {
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"3%"}}>
    <div>
    <Box
    sx={{
      width: "100%",
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
     <h5>CODEKATA</h5>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
    </Box>
    </div>
    <div>
    <Box
    sx={{
      width: "100%",
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
     <h5>WEBKATA</h5>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
    </Box>
    </div>
    </div>
  );
}
