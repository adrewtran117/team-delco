import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Text } from "react";
import PageName from './Components/PageName';
import MapChart from './Components/MapChart';

function App() {
  const mystyle = {

  };
  return (
    <div style={mystyle} className="App">
      <PageName/>
      <MapChart/>
    </div>
  );
}

export default App;
