import React from 'react';
import '../App.css';
import SpatialTitle from '../Components/SpatialTitle';
import SpatialMenu from '../Components/SpatialExploration';
import GPT3Interface from '../Components/GPTinterface';

function SpatialPage() {
  const mystyle = {

  };
  return (
    <div>
        <SpatialTitle/>
        <div className='rectangle'></div>
        <div style={{position: 'fixed', top:100, left: 100}}>
        <SpatialMenu/>
        </div>
        <div className='nlp'>
        <GPT3Interface/>
        </div>
    </div>
  );
}

export default SpatialPage;
