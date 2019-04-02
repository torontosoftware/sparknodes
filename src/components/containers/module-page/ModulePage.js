import React from 'react';
import ModuleRightPage from './ModuleRightPage';
import ModuleLeftPage from './ModuleLeftPage';

class ModulePage extends React.Component {
  render() {
    return (
      <div className="module-page">
        <ModuleLeftPage/>
        <ModuleRightPage/>
      </div>
    );
  }
}

export default ModulePage;
