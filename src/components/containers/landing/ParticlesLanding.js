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
    	            "value": 110,
    	            "density": {
    	                "enable": true,
                      "value_area": 1000
    	            }
    	        },
              "color": {
                "value" : "#82c5da"
              },
    	        "size": {
    	            "value": 5,
    	            "random": true,
    	            "anim": {
    	                "speed": 4,
    	                "size_min": 0.3
    	            }
    	        },
    	        "line_linked": {
    	            "enable": true,
                  "distance": 100,
                  "color": "#82c5da",
                  "opacity": 0.2
    	        },
    	        "move": {
    	            "random": true,
    	            "speed": 1,
    	            "direction": "top",
    	            "out_mode": "out"
    	        }
    	    },
    	    "interactivity": {
    	        "events": {
    	            "onhover": {
    	                "enable": true,
    	                "mode": "bubble"
    	            },
    	            "onclick": {
    	                "enable": true,
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
