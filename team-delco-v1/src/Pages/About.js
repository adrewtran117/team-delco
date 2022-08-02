import './AboutPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import drewpfp from './andrew.png';
import chiku from './chiku.png';
import navi from './navi.png';
import ryan from './ryan.png';


export default function About() {
    return(
      <div className="scrollable">
          <div className="creators">
            <div className="header">
              <h2 className="missiontitle">Our<br></br>Mission </h2>
              <p className="paragraph"><b>Our goal in creating HumanityWithUS is to draw attention to the holistic nature of poverty, and to create a single destination for all data relating to people.
              We would like for experts and everyday people alike to be able to use this resource as a tool for education and promoting awareness on poverty.</b></p>
            </div>
          </div>

          <div className="team">
            <h2 className="header1">MEET TEAM DELCO</h2>
              <div className="col1">
              <h2 className="drew">Andrew Tran</h2>
              <img src={drewpfp} height="300px" width="240px"></img>

              <div className="row text-2xl">
              <a href="https://www.linkedin.com/in/andrew-tran-648b6121a/">
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="#A202FF" transform="left-5"></FontAwesomeIcon>
              </a>
              <a href="https://github.com/adrewtran117">
              <FontAwesomeIcon icon={faGithub} size="3x" color="#A202FF"></FontAwesomeIcon>
              </a>
              </div>

              </div>


              <div className="col2">
                <h2 className="chiku">Chiku Okechukwu</h2>
                <div className="row text-2xl">
                <img src={chiku} height="300px" width="240px"></img>

              <a href="https://www.linkedin.com/in/chiku-okechukwu-19942523b/">
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="#2072B2" transform="left-5"></FontAwesomeIcon>
              </a>
              <a href="https://github.com/chiikugo">
              <FontAwesomeIcon icon={faGithub} size="3x" color="#2072B2"></FontAwesomeIcon>
              </a>
              </div>

              </div>


              <div className="col3">
                <h2 className="navi">Navi Singh</h2>
                <div className="row text-2xl">
                <img src={navi} height="300px" width="240px"></img>

              <a href="https://www.linkedin.com/in/chiku-okechukwu-19942523b/">
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="#00ABFF" transform="left-5"></FontAwesomeIcon>
              </a>
              <a href="https://github.com/navisingh2">
              <FontAwesomeIcon icon={faGithub} size="3x" color="#00ABFF"></FontAwesomeIcon>
              </a>
              </div>
              </div>


              <div className="col4">
                <h2 className="ryan">Ryan O'Meara</h2>
                <div className="row text-2xl">
                <img src={ryan} height="300px" width="240px"></img>

              <a href="https://www.linkedin.com/in/andrew-tran-648b6121a/">
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="#00E8FF" transform="left-5"></FontAwesomeIcon>
              </a>
              <a href="https://github.com/adrewtran117">
              <FontAwesomeIcon icon={faGithub} size="3x" color="#00E8FF"></FontAwesomeIcon>
              </a>
              </div>
             
            </div>
          </div>
      </div>
    )
  }