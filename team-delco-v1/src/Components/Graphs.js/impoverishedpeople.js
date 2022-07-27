import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useState,useEffect } from 'react';
import { csv } from 'd3';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";

const data = [
    { name: "People", value: 41.5 },
    { name: "White", value: 21.5 },
    { name: "Hispanic", value: 18.6 },
    { name: "Other", value: 17.59 },

];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function ImpoverishedPeople() {
  return (
    <Draggable>
        <Resizable
            style={{display: "flex",
            border: "solid 1px #ddd",
            background: "#f0f0f0"}}
            defaultSize={{
              width: 350,
              height: 300
            }}
          >
        <div>
        <div>
        <h3>Percentage Demographics under Poverty Line</h3>
        <ResponsiveContainer width="99%" aspect={3}>
    <div style={{}}>
    <PieChart width={400} height={400}>
    <Legend/>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
    
    </ResponsiveContainer>
    </div>
    </div>
    </Resizable>
    </Draggable>
  );
}