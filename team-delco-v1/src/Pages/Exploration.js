import React from 'react';
import '../App.css';
import SpatialTitle from '../Components/SpatialTitle';
import SpatialMenu from '../Components/SpatialExploration';

function SpatialPage() {
  const mystyle = {

  };
  return (
    <div style={mystyle} className="App">
        <SpatialTitle/>
        <SpatialMenu/>
    </div>
  );
}

export default SpatialPage;
