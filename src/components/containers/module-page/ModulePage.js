import React from 'react';

import ModuleRightPage from './ModuleRightPage';
import ModuleLeftPage from './ModuleLeftPage';
import ModuleSectionList from '../ModuleSectionList';

import LinkedListIntroLeft from '../../modules/linked-lists/sections/LinkedListIntroLeft';
import LinkedListIntroRight from '../../modules/linked-lists/sections/LinkedListIntroRight';
import LinkedListNodeLeft from '../../modules/linked-lists/sections/LinkedListNodeLeft';

class ModulePage extends React.Component {
  state = {
    showModuleList: false
  };

  moduleListButtonHandler = () => {
    this.setState({
      showModuleList: !this.state.showModuleList
    });
  }

  render() {
    document.querySelector('body').className = 'theme-dark'
    return (
      <div className="module-page container-fluid">
        <button className="btn module-list-btn" onClick={this.moduleListButtonHandler}>
          <i class="material-icons">
          more_vert
          </i>
        </button>
        <ModuleSectionList show={this.state.showModuleList}/>
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
