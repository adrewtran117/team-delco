import React from 'react'
import '../styles.css';
import AttendCollege from '../Graphs.js/attendcollege';
import './buttonPosition.css';
import logo from './images/CollegeEducation.png';

function EducationButtons() {

      const [AttendCollegevisible, AttendCollegesetVisible] = React.useState(false);
      function Collegeclick(e) {
          e.preventDefault();
          AttendCollegesetVisible(!AttendCollegevisible);
        }

    return (
        <div>
        <div className="education1">
            <button style={{background: 'blue', opacity: 0.7, border: 'none', borderRadius: 20}} onClick={(event) => {
                    Collegeclick(event)
            }}> <p style={{fontSize:20, font: 'Tahoma', color: 'white'}}><b>COLLEGE ATTENDANCE</b></p></button>

            <div className='generationspot'>
            {AttendCollegevisible && (
            <AttendCollege />)}
            </div>
            

        </div>
        </div>
        )
    }


export default EducationButtons;