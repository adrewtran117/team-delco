import React from 'react'
import '../styles.css';
import AttendCollege from '../Graphs.js/attendcollege';
import './buttonPosition.css';
import ImpoverishedPeople from '../Graphs.js/impoverishedpeople';

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
            }}> College Matriculation </button>

            <div className='generationspot'>
            {AttendCollegevisible && (
            <AttendCollege />)}
            </div>
            


        </div>
        )
    }


export default EducationButtons;