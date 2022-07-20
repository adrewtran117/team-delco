import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState,useEffect } from 'react';
import { csv } from 'd3';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";



const AttendCollege = () => {

    const[data,setData] = useState();
    useEffect(() => {
        csv('attendcollege.csv').then(data =>
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
      <h3>Rate of Students who Matriculate to College First Fall</h3>
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
          <Line type="monotone" dataKey="rate" stroke="#00FF00" />
        </LineChart>
        </ResponsiveContainer>
        </div>
        </div>
        </Resizable>
        </Draggable>
        
    );
  }

  export default AttendCollege;