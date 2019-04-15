import React from 'react';
import ModuleCardList from './ModuleCardList';

class ModuleLanding extends React.Component {
  render() {
    document.querySelector('body').className = 'theme-light';
    return (
      <div className="landing container-fluid">
        <div className="top">
          <div className="col-12">
           <h2 className="bold text-center">sparknodes</h2>
           <h3 className="text-center">a visual intro to the theory of
           computation, data structures, and algorithms.</h3>
          </div>
        </div>
        <ModuleCardList/>
      </div>
    );
  }
};

export default ModuleLanding;
