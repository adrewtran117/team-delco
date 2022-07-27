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
        <div className="education1">
            <div style={{fontSize:25,color:'black',fontFamily:'Impact'}}>
            Education
            </div>
            <button onClick={(event) => {
                    Collegeclick(event)
            }}> <p style={{fontSize:10}}>College Attendence</p><img src={logo}></img> </button>

            <div className='generationspot'>
            {AttendCollegevisible && (
            <AttendCollege />)}
            </div>
            


        </div>
        )
    }


export default EducationButtons;