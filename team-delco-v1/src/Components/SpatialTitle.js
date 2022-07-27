import React from 'react'
import './styles.css';

function ProjectTitle() {

    return (
        <div>
            <div style={{fontSize:45,color:'white',fontFamily:'Impact',  textShadow:'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}} className = "vertical">
            Spatial Exploration of Data
            </div>
            <div style={{fontSize:15,color:'white',fontFamily:'Impact', textShadow:'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}} className = "vertical">
            To find instructions on how to use our Spatial Exploration feature, click on the chatbot at the bottom right of the screen!
            </div>
        </div>
    )
}


export default ProjectTitle;