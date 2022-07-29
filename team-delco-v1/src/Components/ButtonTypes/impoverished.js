import React from 'react'
import '../styles.css';
import ImpoverishedPeople from '../Graphs.js/impoverishedpeople';
import './buttonPosition.css';
import logo from './images/people.png';

function ImpoverishedButton() {

    const [BLLvisible, BLLsetVisible] = React.useState(false);
    function BLLclick(e) {
        e.preventDefault();
        BLLsetVisible(!BLLvisible);
      }

    return (
        <div>
        <div className ="economic1">
            <button style={{background: '#4B59F7', opacity: 0.7, border: 'none', borderRadius: 20}} onClick={(event) => {
                    BLLclick(event)
            }}> <p style={{fontSize:20, color: 'white'}}><b>POVERTY DEMOGRAPHICS</b></p></button>


            <div className='generationspot'>
            {BLLvisible && (
            <ImpoverishedPeople />)}
            </div>

        </div>
        </div>
        )
    }


export default ImpoverishedButton;