import React from 'react';
import './App.css';
import PageName from './Components/PageName';
import ChildBLL from './Components/Graphs.js/childBLL';

function App() {
  const mystyle = {

  };
  return (
    <div style={mystyle} className="App">
      <div>
        <PageName/>
          <div style={{alignContent:'center'}}>
            <ChildBLL/>
          </div>
      </div>
    </div>
  );
}

export default App;
