import './horizontal.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect, createRef } from 'react';
import Postcard from '../Postcard/postcard';
import Schedule from '../Schedule/schedule';
import Partnercloud from '../PartnerCloud/partnercloud';

function Horizontal() {

  return (    
    <div className="horizontalInset">
      <div id="roadimg">
      </div>
      <div id="cliffface">
        <div id="clifffaceContent">
          <Postcard />
          <div id="arrowContainer">
            <div id="arrow"></div>
            <p id="arrowLabel">Scroll!</p>
          </div>
          <Schedule />
        </div>
      </div>
  </div>

  );
}


{/* <div className="container">

  <div id="horizontal">
    <div id="cliffface">
      <div>
        <div id="about">
          <div>
            <div class="text break">
              <h3>A Little About Us</h3>
              <p>Join us for a day of building, learning, and having fun at South Carolina’s premiere hackathon! Come with old friends or meet new ones at the event and get ready for an action-packed 24-hours. No matter your major or level of experience... </p>
            </div>
            <div class="text" class="line">
              <div class="stamp">
              </div>
              <div id="wewantto">
                <div class="lines">
                  <hr />
                  <br />
                  <hr />
                  <br />
                  <hr />
                  <br />
                  <hr />
                </div>
                <h3>We Want to </h3>
                <h3>"CU" hack it!</h3>
              </div>
            </div>
          </div>
        </div>
        <Schedule />
      </div>
    </div>
    <div id="van">
    </div>
    <Partnercloud />
    <div id="contact" class="text">
      <h3>Stay in touch!</h3>
      <a style={{textTransform: "none"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeOQGq58yr8AliFswQaZ8zizYfVj8gdv6L8B-r6ZRjftwgGAg/viewform?usp=sf_link" class="newsletter">Sign up for our newsletter!</a>
      <div id="socials">
        <a class="social" href="https://twitter.com/cuhackit?lang=en"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a class="social" href="https://www.instagram.com/cuhackit/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a class="social" href="https://www.facebook.com/CUhackers/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</div> */}


{/* <div id="van"></div>
<Partnercloud />
<div id="contact" class="text">
  <h3>Stay in touch!</h3>
  <a style={{textTransform: "none"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeOQGq58yr8AliFswQaZ8zizYfVj8gdv6L8B-r6ZRjftwgGAg/viewform?usp=sf_link" class="newsletter">Sign up for our newsletter!</a>
  <div id="socials">
    <a class="social" href="https://twitter.com/cuhackit?lang=en"><i class="fa fa-twitter" aria-hidden="true"></i></a>
    <a class="social" href="https://www.instagram.com/cuhackit/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a>
    <a class="social" href="https://www.facebook.com/CUhackers/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
  </div>
</div> */}

export default Horizontal;
