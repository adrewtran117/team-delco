import React from 'react'
import '../styles.css';
import './buttonPosition.css';
import Phlpoverty from '../Graphs.js/phlpoverty';
import logo from './images/coins.png';

function PovertyRateButton() {

    const [BLLvisible, BLLsetVisible] = React.useState(false);
    function BLLclick(e) {
        e.preventDefault();
        BLLsetVisible(!BLLvisible);
      }

    return (
        <div>
        <div className ="economic2">
            <button style={{background: '580EF8', opacity: 0.7, border: 'none', borderRadius: 20}} onClick={(event) => {
                    BLLclick(event)
            }}> <p style={{fontSize:20, color: 'white'}}><b>POVERTY RATE</b></p></button>

            <div className='generationspot'>
            {BLLvisible && (
            <Phlpoverty/>)}
            </div>

        </div>
        </div>
        )
    }


export default PovertyRateButton;