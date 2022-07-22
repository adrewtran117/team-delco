import React from 'react'
import '../styles.css';
import AirQuality from '../Graphs.js/airquality';

function EnvironmentalButtons() {

    const [AIRvisible, AIRsetVisible] = React.useState(false);
    function AIRclick(e) {
        e.preventDefault();
        AIRsetVisible(!AIRvisible);
      }
    
    return (
        <div>
            <button className="buttonStyleEnvironment1" onClick={(event) => {
                    AIRclick(event)
            }}> Air Quality </button>

            {AIRvisible && (
            <AirQuality />)}

        </div>
        )
    }


export default EnvironmentalButtons;