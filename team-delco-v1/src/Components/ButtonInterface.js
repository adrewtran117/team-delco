import React from 'react'
import './styles.css';
import ChildBLL from './Graphs.js/childBLL';
import AirQuality from './Graphs.js/airquality';

function ButtonInterface() {

    const [BLLvisible, BLLsetVisible] = React.useState(false);
    function BLLclick(e) {
        e.preventDefault();
        BLLsetVisible(true);
      }

    const [AIRvisible, AIRsetVisible] = React.useState(false);
    function AIRclick(e) {
        e.preventDefault();
        AIRsetVisible(true);
      }

    return (
        <div>
            <button className="buttonStyle" onClick={(event) => {
                    BLLclick(event)
            }}> Child BLL </button>
            <button className="buttonStyle" onClick={(event) => {
                    AIRclick(event)
            }}> Air Quality </button>


            {BLLvisible && (
            <ChildBLL />)}

            {AIRvisible && (
            <AirQuality />)}


        </div>
        )
    }


export default ButtonInterface;