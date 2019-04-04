import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from './containers/Container';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <Container/>
      </BrowserRouter>
    );
  }
}

export default App;
