import React from 'react';
import ModuleCardList from './ModuleCardList';

class ModuleLanding extends React.Component {
  render() {
    return (
      <div className="page light">
        <div className="landing top container-fluid">
          <div className="col-12">
           <h2 className="text-center">sparknodes</h2>
          </div>
          <ModuleCardList/>
        </div>
      </div>
    );
  }
};

export default ModuleLanding;
