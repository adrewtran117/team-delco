import React from 'react'
import '../styles.css';
import ChildBLL from '../Graphs.js/childBLL';
import './buttonPosition.css';
import logo from './images/needle.png';

function HealthButtons() {

    const [BLLvisible, BLLsetVisible] = React.useState(false);
    function BLLclick(e) {
        e.preventDefault();
        BLLsetVisible(!BLLvisible);
      }

    return (
        <div className ="health1">
            <button style={{background: '#C70039', opacity: 0.9, border: 'none', borderRadius: 20}} onClick={(event) => {
                    BLLclick(event)
            }}> <p style={{fontSize:20, color: 'white'}}><b>BLOOD LEAD LEVELS</b></p></button>


            <div className='generationspot'>
            {BLLvisible && (
            <ChildBLL />)}
            </div>

        </div>
        )
    }


export default HealthButtons;