import React from 'react';
import ModuleCardList from './ModuleCardList';

class ModuleLanding extends React.Component {
  render() {
    document.querySelector('body').className = 'theme-light';
    return (
      <div className="landing top container-fluid">
        <div className="col-12">
         <h2 className="text-center">sparknodes</h2>
        </div>
        <ModuleCardList/>
      </div>
    );
  }
};

export default ModuleLanding;
