import React from 'react';

class MenuToggleButton extends React.Component {
  state = {
    invertColor: false,
    viewHeight: window.innerHeight
  };

  checkInvertColor = () => {
    let scrollTop = window.scrollY;
    let scrollTopRes = Math.floor((scrollTop + 30) / this.state.viewHeight) % 2;
    this.setState({
      invertColor: (scrollTopRes === 0 ? true : false)
    });
  }

  setViewHeight = () => {
    this.setState({
      viewHeight: window.innerHeight
    });
  }

  onClick = () => {
    this.setState({
      invertColor: (this.props.invertWhiteAuto ? true : false)
    });
    this.props.onClick();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkInvertColor);
    window.addEventListener('resize', this.setViewHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkInvertColor);
    window.removeEventListener('resize', this.setViewHeight);
  }

  render() {
    let style = `btn module-list-btn ${(this.state.invertColor ? 'invert' : '')}`;
    return (
      <div>
        <button className={style} onClick={this.onClick}>
          <i className="material-icons">
          more_vert
          </i>
        </button>
      </div>
    );
  }
}

export default MenuToggleButton;
