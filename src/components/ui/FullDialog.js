import React from 'react';

class FullDialog extends React.Component {
  render() {
    return (
      <div className="full-dialog">
        {this.props.children}
      </div>
    );
  }
}

export default FullDialog;
