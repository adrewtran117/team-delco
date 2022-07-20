import React from 'react'
import './styles.css';
import ChildBLL from './Graphs.js/childBLL';
import AirQuality from './Graphs.js/airquality';
import AttendCollege from './Graphs.js/attendcollege';

function ButtonInterface() {

    const [BLLvisible, BLLsetVisible] = React.useState(false);
    function BLLclick(e) {
        e.preventDefault();
        BLLsetVisible(!BLLvisible);
      }

    const [AIRvisible, AIRsetVisible] = React.useState(false);
    function AIRclick(e) {
        e.preventDefault();
        AIRsetVisible(!AIRvisible);
      }
    
      const [AttendCollegevisible, AttendCollegesetVisible] = React.useState(false);
      function Collegeclick(e) {
          e.preventDefault();
          AttendCollegesetVisible(!AttendCollegevisible);
        }

    return (
        <div>

            <button className="buttonStyle" onClick={(event) => {
                    BLLclick(event)
            }}> Child BLL </button>

            <button className="buttonStyle" onClick={(event) => {
                    AIRclick(event)
            }}> Air Quality </button>

            <button className="buttonStyle" onClick={(event) => {
                    Collegeclick(event)
            }}> AttendCollege </button>

            {BLLvisible && (
            <ChildBLL />)}

            {AIRvisible && (
            <AirQuality />)}

            {AttendCollegevisible && (
            <AttendCollege />)}


        </div>
        )
    }


export default ButtonInterface;