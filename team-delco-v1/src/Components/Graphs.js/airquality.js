import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState,useEffect } from 'react';
import { csv } from 'd3';


const AirQuality = () => {

    const[data,setData] = useState();
    useEffect(() => {
        csv('air_quality_index_days.csv').then(data =>
             setData(data))
    });

    return (
      <div>
      <h3>Percentage of Children with Blood Lead Level over 5</h3>
      <ResponsiveContainer width="50%" aspect={3}>
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
          <Line type="monotone" dataKey="moderate" stroke="#FFFF00" />
        </LineChart>
        </ResponsiveContainer>
        </div>
    );
  }

  export default AirQuality;