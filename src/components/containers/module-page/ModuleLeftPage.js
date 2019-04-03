import React from 'react';

class ModuleLeftPage extends React.Component {
  render() {
    return (
      <div className="left col-12 col-md-5 col-lg-4">
        {this.props.children}
        <hr/>
      </div>
    );
  }
}

export default ModuleLeftPage;
