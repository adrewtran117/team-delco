import React from 'react';
import './App.css';
import ProjectTitle from './Components/ProjectTitle';
import ChildBLL from './Components/Graphs.js/childBLL';
import AirQuality from './Components/Graphs.js/airquality';
import ButtonInterface from './Components/ButtonInterface';

function App() {
  const mystyle = {

  };
  return (
    <div style={mystyle} className="App">
      <div>
        <ProjectTitle/>
                      {/* <div>
                        <h3>Percentage of Children with 5+ Blood Lead levels by Zip Code</h3>
                        <ChildBLL/>
                      </div>
                      <div>
                      <h3>Number of days Air Quality was Healthy, Moderate, and Unhealthy</h3>
                      <AirQuality/>
                      </div> */}
                      <div>
                        <ButtonInterface/>
                      </div>
      </div>
    </div>
  );
}

export default App;
