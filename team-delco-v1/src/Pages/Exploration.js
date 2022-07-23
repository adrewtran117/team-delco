import React from 'react';
import '../App.css';
import SpatialTitle from '../Components/SpatialTitle';
import SpatialMenu from '../Components/SpatialExploration';
import GPT3Interface from '../Components/GPTinterface';

function SpatialPage() {
  const mystyle = {

  };
  return (
    <div style={mystyle} className="App">
        <SpatialTitle/>
        <SpatialMenu/>
        <GPT3Interface/>
    </div>
  );
}

export default SpatialPage;
