import React from 'react';
import _ from 'lodash';
import ModuleCard from './ModuleCard';
import { moduleList } from '../modules';

class ModuleCardList extends React.Component {

  componentDidMount() {
  }

  renderCardList() {
    return (
      _.values(_.mapValues(moduleList, (module) => {
        return (
          <div key={module.name} className="col-12 col-sm-6 col-md-4">
            <ModuleCard module={module}/>
          </div>
        );
      }))
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.renderCardList()}
        </div>
      </div>
    );
  }
};

export default ModuleCardList;
