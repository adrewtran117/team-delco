import React from 'react';
import '../App.css';
import EnvironmentalButtons from './ButtonTypes/EnvironmentalButtons';
import HealthButtons from './ButtonTypes/HealthButtons';
import EducationButtons from './ButtonTypes/EducationButtons';

function ButtonInterface() {
  return (
    <div style={{}}>
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

export default ButtonInterface;