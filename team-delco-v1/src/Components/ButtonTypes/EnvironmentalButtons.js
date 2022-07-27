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
        <div className='environment1'>
                <div className='environmenttitle' style={{fontSize:25,color:'black',fontFamily:'Impact'}}>
                Environment
                </div>
            <div  className='environment1'>
            <button onClick={(event) => {
                    AIRclick(event)
            }}> <p style={{fontSize:10}}>Air Quality</p><img src={logo}></img> </button>

                
            </div>
            
            <div className='generationspot'>
            {AIRvisible && (
            <AirQuality />)}
            </div>

        </div>
        )
    }


export default EnvironmentalButtons;