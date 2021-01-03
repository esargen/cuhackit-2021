import './contact.scss';
import React from 'react';

function Contact() {

  return (    
    <div id="contact" className="text">
        <h3>Stay in touch!</h3>
        <div className="linkWrapper">
            <div id="socials">
              <a className="social" href="https://twitter.com/cuhackit?lang=en"><i id="socialIcon" className="fa fa-twitter" aria-hidden="true"></i></a>
              <a className="social" href="https://www.instagram.com/cuhackit/?hl=en"><i id="socialIcon" className="fa fa-instagram" aria-hidden="true"></i></a>
              <a className="social" href="https://www.facebook.com/CUhackers/"><i id="socialIcon" className="fa fa-facebook" aria-hidden="true"></i></a>
            </div>
            <a style={{textTransform: "none"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeOQGq58yr8AliFswQaZ8zizYfVj8gdv6L8B-r6ZRjftwgGAg/viewform?usp=sf_link" className="newsletter">Email Us!</a>
        </div>
    </div>
  );
}


export default Contact;
