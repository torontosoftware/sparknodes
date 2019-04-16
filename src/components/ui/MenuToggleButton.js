import React from 'react';

class MenuToggleButton extends React.Component {
  state = {
    invertColor: false,
    viewHeight: window.innerHeight
  };

  checkInvertColor = () => {
    let scrollTop = document.querySelector('.module-page').scrollTop;
    let scrollTopRes = Math.floor((scrollTop + 30) / this.state.viewHeight) % 2;
    this.setState({
      invertColor: (scrollTopRes == 0 ? true : false)
    })
  }

  setViewHeight = () => {
    this.setState({
      viewHeight: window.innerHeight
    });
  }

  componentDidMount() {
    let modulePage = document.querySelector('.module-page');
    modulePage.addEventListener('scroll', this.checkInvertColor);
    window.addEventListener('resize', this.setViewHeight);
  }

  componentWillUnmount() {
    let modulePage = document.querySelector('.module-page');
    modulePage.removeEventListener('scroll', this.checkInvertColor);
    window.removeEventListener('resize', this.setViewHeight);
  }

  render() {
    let style = `btn module-list-btn ${(this.state.invertColor ? 'invert' : '')}`;
    return (
      <div>
        <button className={style} onClick={this.props.onClick}>
          <i className="material-icons">
          more_vert
          </i>
        </button>
      </div>
    );
  }
}

export default MenuToggleButton;
