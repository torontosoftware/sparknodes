import React from 'react';
import ModuleRightPage from './ModuleRightPage';
import ModuleLeftPage from './ModuleLeftPage';

class ModulePage extends React.Component {
  render() {
    document.querySelector('body').className = 'theme-dark'
    return (
      <div className="module-page container-fluid">
        <div className="row">
          <ModuleLeftPage/>
          <ModuleRightPage/>
        </div>
      </div>
    );
  }
}

export default ModulePage;
