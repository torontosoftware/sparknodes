import React from 'react';

class ModuleCard extends React.Component {
  render() {
    return (
      <div className="module-card">
        <div className="title">
          {this.props.module.name}
        </div>
      </div>
    );
  }
}

export default ModuleCard;
