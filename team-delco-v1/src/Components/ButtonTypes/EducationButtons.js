import React from 'react'
import '../styles.css';
import AttendCollege from '../Graphs.js/attendcollege';

function EducationButtons() {

      const [AttendCollegevisible, AttendCollegesetVisible] = React.useState(false);
      function Collegeclick(e) {
          e.preventDefault();
          AttendCollegesetVisible(!AttendCollegevisible);
        }

    return (
        <div style={{}}>

            <button className="buttonStyleEducation1" onClick={(event) => {
                    Collegeclick(event)
            }}> AttendCollege </button>

            {AttendCollegevisible && (
            <AttendCollege />)}


        </div>
        )
    }


export default EducationButtons;