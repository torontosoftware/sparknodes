import React from 'react';

class MenuToggleButton extends React.Component {
  state = {
    invertColor: false
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      console.log(window);
    });
  }

  render() {
    return (
      <div>
        <button className="btn module-list-btn" onClick={this.props.onClick}>
          <i className="material-icons">
          more_vert
          </i>
        </button>
      </div>
    );
  }
}

export default MenuToggleButton;
