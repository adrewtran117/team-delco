import React from 'react';
import '../App.css';
import EnvironmentalButtons from './ButtonTypes/EnvironmentalButtons';
import HealthButtons from './ButtonTypes/HealthButtons';
import EducationButtons from './ButtonTypes/EducationButtons';
import ImpoverishedButton from './ButtonTypes/impoverished';
import PovertyRateButton from './ButtonTypes/povertyRateButton';


function SpatialMenu() {
  return (
    <div>
        <div>
            <div>
              <ImpoverishedButton/>
            </div>
            <div>
              <PovertyRateButton/>
            </div>
            <div>
              <EnvironmentalButtons/>
            </div>

            <div>
              <HealthButtons/>
            </div>

            <div>
              <EducationButtons/>
            </div>

        </div>
    </div>
  );
}

export default SpatialMenu;
