import React from 'react';
import './App.css';
import ProjectTitle from './Components/ProjectTitle';
import SpatialMenu from './Pages/SpatialExploration';

function App() {
  const mystyle = {

  };
  return (
    <div style={mystyle} className="App">
      <div>
        <ProjectTitle/>
        <SpatialMenu/>
      </div>
    </div>
  );
}

export default App;
