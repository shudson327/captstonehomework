import React from 'react'
import FooterHome from '../components/FooterHome'
// import holder2 from '../img/holder2.jpg'   
import '../styles/About.css'
import '../styles/index.css'
import CHeadshot from '../assets/CHeadshot.jpg'
import Jheadshot from '../assets/Jheadshot.jpg'
import Sheadshot from '../assets/Sheadshot.jpg'
import Rheadshot from '../assets/Rheadshot.JPG'
import group from '../assets/group.png'
import About2 from '../assets/About2.jpg'
import asstan from '../assets/asstan.png'

const About = () => {

    return (
      <div>
      <div className="moveDown"></div>
      <div className="aboutcontainer">
        <div class="row">
          <div class="col-lg-4">
            <img src={Jheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Jacob Huff</h2>
            <p>Leader and brains of the group</p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/jacobhuff1/" role="button">View my Profile</a></p>
          </div>
          <div class="col-lg-4">
            <img src={Sheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Sierra Hudson</h2>
            <p> The real leader of the group/Big boss </p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/sierra-hudson-75b8231b8/" role="button">View my profile</a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <img src={Rheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Ryan Twele</h2>
            <p>Surrogate father figure of the group.</p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/ryan-twele-a168181b8/" role="button">View my profile</a></p>
          </div>
          <div class="col-lg-4">
            <img src={CHeadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Cameron Parker</h2>
            <p> </p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/cameron-parker-47617b101/" role="button">View my profile</a></p>
          </div>
        </div>
      </div>

      

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Hard working team <span class='sub'>It'll blow your mind.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette- img-fluid mx-auto" className='grip' src={group} alt="Generic placeholder " width='400' height='200'></img>
          <img class="featurette- img-fluid mx-auto" className='grip2' src={About2} alt="Generic placeholder " width='400' height='200'></img>
        </div>
      </div>

      

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="featurette- img-fluid mx-auto" className='ass' src={asstan} alt="Generic placeholder " width='400' height='200'></img>
        </div>
      </div>

      

     

      
     <FooterHome/>

    </div>

           
    )
}

export default About