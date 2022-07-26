import React from 'react'
import '../styles.css';
import AirQuality from '../Graphs.js/airquality';
import './buttonPosition.css';

function EnvironmentalButtons() {

    const [AIRvisible, AIRsetVisible] = React.useState(false);
    function AIRclick(e) {
        e.preventDefault();
        AIRsetVisible(!AIRvisible);
      }
    
    return (
        <div className='environment1'>
                <div className='environmenttitle' style={{fontSize:25,color:'black',fontFamily:'Impact'}}>
                Environment
                </div>
            <div  className='environment1'>
                <button onClick={(event) => {
                        AIRclick(event)
                }}> Air Quality </button>
            </div>
            
            <div className='generationspot'>
            {AIRvisible && (
            <AirQuality />)}
            </div>

        </div>
        )
    }


export default EnvironmentalButtons;