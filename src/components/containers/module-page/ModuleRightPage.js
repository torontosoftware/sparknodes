import React from 'react';

class ModuleRightPage extends React.Component {
  render() {
    return (
      <div className="right col-12 col-md-7 col-lg-8">
        {this.props.children}
      </div>
    );
  }
}

export default ModuleRightPage;
