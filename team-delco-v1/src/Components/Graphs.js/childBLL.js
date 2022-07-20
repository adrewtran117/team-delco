//https://www.geeksforgeeks.org/create-a-bar-chart-using-recharts-in-reactjs/

import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
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
    <div style={{}}>
    <h3>Percentage of Children with Blood Lead Level over 5</h3>
    <ResponsiveContainer width="50%" aspect={3}>
      <BarChart width={1125} height={450} data={data}>
        <Bar dataKey="perc_5plus" fill="black" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="zip_code" />
        <YAxis />
      </BarChart>
      </ResponsiveContainer>

    </div>
</div>

);
}
  
export default ChildBLL;