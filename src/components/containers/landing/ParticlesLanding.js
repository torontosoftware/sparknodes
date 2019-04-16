import React from 'react';
import Particles from 'react-particles-js';

class ParticlesLanding extends React.Component {
  render() {
    return (
      <Particles
        className="particles"
        params={{
    	    "particles": {
    	        "number": {
    	            "value": 100,
    	            "density": {
    	                "enable": false
    	            }
    	        },
              "color": {
                "value" : "#82c5da"
              },
    	        "size": {
    	            "value": 4,
    	            "random": true,
    	            "anim": {
    	                "speed": 4,
    	                "size_min": 1
    	            }
    	        },
    	        "line_linked": {
    	            "enable": true,
                  "distance": 90,
                  "color": "#82c5da",
                  "opacity": 0.1
    	        },
    	        "move": {
                  "bounce": true,
    	            "random": true,
    	            "speed": 1,
    	            "direction": "top",
    	            "out_mode": "out",
                  "attract": {
                    "enable": true,
                    "rotateX": 100,
                    "rotateY": 100
                  }
    	        }
    	    },
    	    "interactivity": {
    	        "events": {
    	            "onhover": {
    	                "enable": true,
    	                "mode": "bubble"
    	            },
    	            "onclick": {
    	                "enable": false,
    	                "mode": "repulse"
    	            }
    	        },
    	        "modes": {
    	            "bubble": {
    	                "distance": 100,
    	                "duration": 2,
    	                "size": 0,
    	                "opacity": 0
    	            },
    	            "repulse": {
    	                "distance": 100,
    	                "duration": 4
    	            }
    	        }
    	    }
    	}} />
    );
  }
}

export default ParticlesLanding;
