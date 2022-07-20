import React from 'react'
import './styles.css';
import { csv } from 'd3';
import {useEffect, useState} from 'react';

function MapChart() {
    const[data,setData] = useState();
    useEffect(() => {
        csv('testdates.csv').then(data =>
             setData(data))
    });
    return (
        <div>
            Hello
        </div>
    )
}


export default MapChart;