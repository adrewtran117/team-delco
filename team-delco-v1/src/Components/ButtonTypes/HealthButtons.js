import React from 'react'
import '../styles.css';
import ChildBLL from '../Graphs.js/childBLL';
import './buttonPosition.css';

function HealthButtons() {

    const [BLLvisible, BLLsetVisible] = React.useState(false);
    function BLLclick(e) {
        e.preventDefault();
        BLLsetVisible(!BLLvisible);
      }

    return (
        <div className ="health1">
            <div style={{fontSize:25,color:'black',fontFamily:'Impact'}}>
              Health
            </div>
            <button onClick={(event) => {
                    BLLclick(event)
            }}> Blood Lead Level </button>


            <div className='generationspot'>
            {BLLvisible && (
            <ChildBLL />)}
            </div>

        </div>
        )
    }


export default HealthButtons;