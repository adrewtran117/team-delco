import React from 'react'
import '../styles.css';
import AirQuality from '../Graphs.js/airquality';
import './buttonPosition.css';
import logo from './images/airquality.png';

function EnvironmentalButtons() {

    const [AIRvisible, AIRsetVisible] = React.useState(false);
    function AIRclick(e) {
        e.preventDefault();
        AIRsetVisible(!AIRvisible);
      }

    return (
        <div>
        <div className="environment1">
            <button style={{background: '#FEC9C9', opacity: 0.9, border: 'blue', borderRadius: 20}} onClick={(event) => {
                    AIRclick(event)
            }}> <p style={{fontSize:20, font: 'Tahoma', color: 'white'}}><b>AIR QUALITY</b></p></button>

            <div className='generationspot'>
            {AIRvisible && (
            <AirQuality />)}
            </div>
            

        </div>
        </div>
        )
    }


export default EnvironmentalButtons;