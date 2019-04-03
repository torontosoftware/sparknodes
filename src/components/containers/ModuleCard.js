import React from 'react';
import { Link } from 'react-router-dom';

class ModuleCard extends React.Component {
  render() {
    const {name, title} = this.props.module;
    return (
      <Link className={`module-card ${name}`} to={`/modules/${name}`}>
        <div className="title">
          {title}
        </div>
      </Link>
    );
  }
}

export default ModuleCard;
