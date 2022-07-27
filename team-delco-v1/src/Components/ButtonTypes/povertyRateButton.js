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
        <div className ="economic2">
            <button onClick={(event) => {
                    BLLclick(event)
            }}> <p style={{fontSize:10}}>Poverty Rate</p><img src={logo}></img> </button>


            <div className='generationspot'>
            {BLLvisible && (
            <Phlpoverty/>)}
            </div>

        </div>
        )
    }


export default PovertyRateButton;