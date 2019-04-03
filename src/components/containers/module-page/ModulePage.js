import React from 'react';
import ModuleRightPage from './ModuleRightPage';
import ModuleLeftPage from './ModuleLeftPage';

import LinkedListIntroLeft from '../../modules/linked-lists/sections/LinkedListIntroLeft';
import LinkedListIntroRight from '../../modules/linked-lists/sections/LinkedListIntroRight';
import LinkedListNodeLeft from '../../modules/linked-lists/sections/LinkedListNodeLeft';

class ModulePage extends React.Component {
  render() {
    document.querySelector('body').className = 'theme-dark'
    return (
      <div className="module-page container-fluid">
        <div className="row">
          <ModuleLeftPage>
            <LinkedListIntroLeft/>
          </ModuleLeftPage>
          <ModuleRightPage>
            <LinkedListIntroRight/>
          </ModuleRightPage>
          <ModuleLeftPage>
            <LinkedListNodeLeft/>
          </ModuleLeftPage>
          <ModuleRightPage>
            <LinkedListIntroRight/>
          </ModuleRightPage>
        </div>
      </div>
    );
  }
}

export default ModulePage;
