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
    	            "value": 160,
    	            "density": {
    	                "enable": false
    	            }
    	        },
              /*
              "color": {
                "value" : "#bddce1"
              },*/
    	        "size": {
    	            "value": 3,
    	            "random": true,
    	            "anim": {
    	                "speed": 4,
    	                "size_min": 0.3
    	            }
    	        },
    	        "line_linked": {
    	            "enable": false
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
