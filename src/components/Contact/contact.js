import './contact.scss';
import React from 'react';

function Contact() {

  return (    
    <div id="contact" class="text">
        <h3>Stay in touch!</h3>
        <div className="linkWrapper">
            <div id="socials">
            <a class="social" href="https://twitter.com/cuhackit?lang=en"><i id="socialIcon" class="fa fa-twitter" aria-hidden="true"></i></a>
            <a class="social" href="https://www.instagram.com/cuhackit/?hl=en"><i id="socialIcon" class="fa fa-instagram" aria-hidden="true"></i></a>
            <a class="social" href="https://www.facebook.com/CUhackers/"><i id="socialIcon" class="fa fa-facebook" aria-hidden="true"></i></a>
            </div>
            <a style={{textTransform: "none"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeOQGq58yr8AliFswQaZ8zizYfVj8gdv6L8B-r6ZRjftwgGAg/viewform?usp=sf_link" class="newsletter">Email Us!</a>
        </div>
    </div>
  );
}


export default Contact;
