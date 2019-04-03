import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    document.querySelector('body').className = 'theme-dark';
    return(
      <div className="landing middle container-fluid">
       <div className="row">
         <div className="col-12">
          <h1 className="text-center">sparknodes</h1>
         </div>
         <div className="col-12">
           <h3 className="text-center">a visual intro to the theory of
           computation, data structures, and algorithms.</h3>
         </div>
         <div className="col-12 text-center">
          <Link className="btn" to="/modules">
            GET STARTED
          </Link>
         </div>
       </div>
      </div>
    );
  }
}

export default Landing;
