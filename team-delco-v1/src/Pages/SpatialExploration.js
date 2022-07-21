import React from 'react';
import '../App.css';
import EnvironmentalButtons from '../Components/EnvironmentalButtons';
import HealthButtons from '../Components/HealthButtons';
import EducationButtons from '../Components/EducationButtons';
import './menu.css';

function SpatialMenu() {
  return (
    <div>
        <div>
                      <div>
                        <EducationButtons/>
                      </div>
                      <div>
                        <EnvironmentalButtons/>
                      </div>
                      <div>
                        <HealthButtons/>
                      </div>
        </div>
    </div>
  );
}

export default SpatialMenu;
