import React from 'react';
import { Link } from 'react-router-dom';

class ModuleCard extends React.Component {
  render() {
    return (
      <Link className="module-card" to={`/modules/${this.props.module.name}`}>
        <div className="title">
          {this.props.module.name}
        </div>
      </Link>
    );
  }
}

export default ModuleCard;
