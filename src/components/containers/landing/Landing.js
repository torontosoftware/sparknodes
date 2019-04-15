import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesLanding from './ParticlesLanding';

class Landing extends React.Component {
  render() {
    document.querySelector('body').className = 'theme-dark'
    return(
      <div>
        <div className="landing full-height">
          <ParticlesLanding className="full-height"/>
         <div className="middle">
           <div className="row">
             <div className="col-12">
              <h1 className="text-center">sparknodes</h1>
             </div>
             <div className="col-12">
               <h4 className="text-center">a visual intro to the theory of
               computation, data structures, and algorithms.</h4>
             </div>
             <div className="col-12 text-center">
              <Link className="btn" to="/sparknodes/modules">
                GET STARTED
              </Link>
             </div>
           </div>
         </div>
        </div>
      </div>
    );
  }
}

export default Landing;
