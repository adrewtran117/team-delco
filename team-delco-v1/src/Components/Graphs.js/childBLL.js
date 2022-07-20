//https://www.geeksforgeeks.org/create-a-bar-chart-using-recharts-in-reactjs/

import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useState,useEffect } from 'react';
import { csv } from 'd3';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";


const ChildBLL = () => {

// Sample data
// const data = [
//   {name: 'Geeksforgeeks', students: 400},
//   {name: 'Technical scripter', students: 700},
//   {name: 'Geek-i-knack', students: 200},
//   {name: 'Geek-o-mania', students: 1000}
// ];
const[data,setData] = useState();
    useEffect(() => {
        csv('child_blood_lead_levels_by_zip.csv').then(data =>
             setData(data))
    });

const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "solid 1px #ddd",
      background: "#f0f0f0"
};


return (
<Draggable>
<Resizable
    style={style}
    defaultSize={{
      width: 350,
      height: 350
    }}
  >
<div style={{}}>
    <div style={{}}>
    <h3>Percentage of Children with Blood Lead Level over 5 by Zip Code</h3>
    <ResponsiveContainer width="99%" aspect={3}>
      <BarChart width={1125} height={450} data={data}>
        <Bar dataKey="perc_5plus" fill="black" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="zip_code" />
        <YAxis />
      </BarChart>
      </ResponsiveContainer>

    </div>
</div>
</Resizable>
</Draggable>

);
}
  
export default ChildBLL;