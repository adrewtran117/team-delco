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
        <div className ="economic1">
            <div style={{fontSize:25,color:'black',fontFamily:'Impact',left:10}}>
              Economic
            </div>
            <button onClick={(event) => {
                    BLLclick(event)
            }}> <p style={{fontSize:10}}>Poverty Demographics</p><img src={logo}></img>  </button>


            <div className='generationspot'>
            {BLLvisible && (
            <ImpoverishedPeople />)}
            </div>

        </div>
        )
    }


export default ImpoverishedButton;