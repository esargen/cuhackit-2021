import './horizontal.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect, createRef } from 'react';
import Postcard from '../Postcard/postcard';
import Schedule from '../Schedule/schedule';
import Partnercloud from '../PartnerCloud/partnercloud';

function Horizontal() {

  return (    
    <div id="horizontalInset">
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
        <div id="van"></div>
        <div id="container">
          <Partnercloud />
        </div>
        <div id="roadimg">
      </div>
    </div>

  );
}
{/* <div id="mainHorizContent"> */}


{/* 
<div id="contact" class="text">
  <h3>Stay in touch!</h3>
  <a style={{textTransform: "none"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeOQGq58yr8AliFswQaZ8zizYfVj8gdv6L8B-r6ZRjftwgGAg/viewform?usp=sf_link" class="newsletter">Sign up for our newsletter!</a>
  <div id="socials">
    <a class="social" href="https://twitter.com/cuhackit?lang=en"><i class="fa fa-twitter" aria-hidden="true"></i></a>
    <a class="social" href="https://www.instagram.com/cuhackit/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a>
    <a class="social" href="https://www.facebook.com/CUhackers/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
  </div>
</div> */}


{/* <div className="container">

  <div id="horizontal">

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
