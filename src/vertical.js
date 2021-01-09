import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';


function Vertical() {
  const sand = React.createRef();
  const mountains = React.createRef();
  const kite = React.createRef();

  useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(sand.current, {
           yPercent: -25,
           ease: "none",
           scrollTrigger: {
             trigger: ".pSection",
             // start: "top bottom", // the default values
             // end: "bottom top",
             scrub: true,
             pinSpacing: false
           },
          });
          gsap.to(kite.current, {
             yPercent: -25,
             ease: "none",
             scrollTrigger: {
               trigger: ".pSection",
               // start: "top bottom", // the default values
               // end: "bottom top",
               scrub: true,
               pinSpacing: false
             },
            });
          gsap.to(mountains.current, {
             yPercent: 25,
             ease: "none",
             scrollTrigger: {
               trigger: ".pSection",
               // start: "top bottom", // the default values
               // end: "bottom top",
               scrub: true,
               pinSpacing: false
             },
            });

    }, []);

  return (
    <div id="vertical" ref={mountains}>
      <div className="title">
        <h1>CUhackit</h1>
        <h2>January 30-31, 2021</h2>
      </div>
      <div ref={sand} id="sand">
      </div>
      <div ref={kite} id="kitegals">
      </div>
    </div>
  );
}

export default Vertical;
