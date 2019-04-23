import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Container from './containers/Container';

class App extends React.Component {

  render() {
    const history = createBrowserHistory();
    history.listen((location, action) => {
      window.scrollTo(0, 0)
    });
    return(
      <Router history = {history}>
        <Container/>
      </Router>
    );
  }
}

export default App;
