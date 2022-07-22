import React from 'react'
import '../styles.css';
import ChildBLL from '../Graphs.js/childBLL';

function HealthButtons() {

    const [BLLvisible, BLLsetVisible] = React.useState(false);
    function BLLclick(e) {
        e.preventDefault();
        BLLsetVisible(!BLLvisible);
      }

    return (
        <div>

            <button className="buttonStyleHealth1" onClick={(event) => {
                    BLLclick(event)
            }}> Child BLL </button>

            {BLLvisible && (
            <ChildBLL />)}

        </div>
        )
    }


export default HealthButtons;