import React from 'react';

class Footer extends React.Component {
  render() {
    const { pathname } = this.props.location;
    const modulePath = '/sparknodes/modules/';
    if (pathname.startsWith(modulePath) && pathname.length >= modulePath.length) {
      return <div></div>;
    } else {
      return (
        <div className="footer">
          Made with <i className="material-icons heart">favorite</i> by the Waffly Team.
        </div>
      )
    }
  }
}

export default Footer;
