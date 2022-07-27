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
            <div style={{fontSize:25,color:'black',fontFamily:'Arial'}}>
              Health
            </div>
            <button onClick={(event) => {
                    BLLclick(event)
            }}> <p style={{fontSize:10}}>Blood Lead Levels</p><img src={logo}></img> </button>


            <div className='generationspot'>
            {BLLvisible && (
            <ChildBLL />)}
            </div>

        </div>
        )
    }


export default HealthButtons;