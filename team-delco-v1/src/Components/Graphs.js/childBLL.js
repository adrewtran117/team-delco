//https://www.geeksforgeeks.org/create-a-bar-chart-using-recharts-in-reactjs/

import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState,useEffect } from 'react';
import { csv } from 'd3';


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


return (
<div style={{alignItems:'center', alignContent:'center'}}>
    <div>
      <h1>Percentage of Children with 5+ Blood Lead levels by Zip Code</h1>
    </div>
    <div style={{}}>
      <BarChart width={1125} height={450} data={data}>
        <Bar dataKey="perc_5plus" fill="black" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="zip_code" />
        <YAxis />
      </BarChart>

    </div>
  
</div>

);
}
  
export default ChildBLL;