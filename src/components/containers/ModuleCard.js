import React from 'react';

class ModuleCard extends React.Component {
  render() {
    return (
      <div>{this.props.module.name}</div>
    );
  }
}

export default ModuleCard;
