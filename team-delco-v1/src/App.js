import React from 'react';
import './App.css';
import PageName from './Components/PageName';
import ChildBLL from './Components/Graphs.js/childBLL';
import AirQuality from './Components/Graphs.js/airquality';

function App() {
  const mystyle = {

  };
  return (
    <div style={mystyle} className="App">
      <div>
        <PageName/>
          <div style={{alignContent:'center'}}>
            <ChildBLL/>
            <AirQuality/>
          </div>
      </div>
    </div>
  );
}

export default App;
