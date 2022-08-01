import React from 'react';
import '../App.css';
import SpatialTitle from '../Components/SpatialTitle';
import SpatialMenu from '../Components/SpatialExploration';
import GPT3Interface from '../Components/GPTinterface';

function SpatialPage() {
  return (
    <div>
        <SpatialTitle/>
        
        <div style={{position: 'fixed', top:90, left: 100}}>
        <SpatialMenu/>
        </div>
        <div className='nlp'>
        <GPT3Interface/>
        </div>
    </div>
  );
}

export default SpatialPage;
