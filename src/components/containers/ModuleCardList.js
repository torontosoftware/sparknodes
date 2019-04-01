import React from 'react';
import _ from 'lodash';
import ModuleCard from './ModuleCard';
import { moduleList } from '../modules';

class ModuleCardList extends React.Component {

  componentDidMount() {
    console.log(moduleList);
  }

  renderCardList() {
    return (
      _.values(_.mapValues(moduleList, (module) => {
        console.log(module);
        return (
          <ModuleCard module={module}/>
        )
      }))
    );
  }

  render() {
    console.log(this.renderCardList());
    return (
      <div className="">
        {this.renderCardList()}
      </div>
    );
  }
};

export default ModuleCardList;
