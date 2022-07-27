import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState,useEffect } from 'react';
import { csv } from 'd3';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";



const Phlpoverty = () => {
  
  const data = [
    {year: '2005', phl: 24.5, us:12.6},
    {year: '2006', phl: 25.1, us:12.3},
    {year: '2007', phl:23.8, us:12.5},
    {year: '2008', phl:24.1, us:13.2},
    {year: '2009', phl:25.0, us:14.3},
    {year: '2010',phl:26.7, us:15.1},
    {year: '2011',phl:28.4, us:15.0},
    {year: '2012',phl:26.9, us:15.0},
    {year: '2013',phl:26.3, us:14.8},
    {year: '2014',phl:26.0, us:14.8},
    {year: '2015',phl:25.8, us:13.5},
    {year: '2016',phl:25.7, us:12.7},
    {year: '2017',phl:25.7, us:12.3},
    {year: '2018',phl:24.5, us:11.8},
    {year: '2019',phl:23.3, us:11.5}
  ];
    // const[data,setData] = useState();
    // useEffect(() => {
    //     csv('phlpoverty.csv').then(data =>
    //          setData(data))
    // });

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
            width: 400,
            height: 300
          }}
        >
      <div>
      <div>
      <h3>Philadelphia vs. US Poverty Rate (2005-2019)</h3>
      <ResponsiveContainer width="99%" aspect={2}>
        <LineChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="phl" stroke="#FF0000" />
          <Line type="monotone" dataKey="us" stroke="#0096FF" />
        </LineChart>
        </ResponsiveContainer>
        </div>
        </div>
        </Resizable>
        </Draggable>
        
    );
  }

  export default Phlpoverty;