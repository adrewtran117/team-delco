import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState,useEffect } from 'react';
import { csv } from 'd3';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";



const AirQuality = () => {

    const[data,setData] = useState();
    useEffect(() => {
        csv('air_quality_index_days.csv').then(data =>
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
            width: 250,
            height: 250
          }}
        >
      <div>
      <div>
      <h3>Air Quality Ratings by Year(Healthy,Moderate,Unhealthy)</h3>
      <ResponsiveContainer width="99%" aspect={3}>
        <LineChart
          width={500}
          height={300}
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
          <Line type="monotone" dataKey="good" stroke="#00FF00" />
          <Line type="monotone" dataKey="unhealthy" stroke="#FF0000" />
          <Line type="monotone" dataKey="moderate" stroke="#F6C604" />
        </LineChart>
        </ResponsiveContainer>
        </div>
        </div>
        </Resizable>
        </Draggable>
        
    );
  }

  export default AirQuality;