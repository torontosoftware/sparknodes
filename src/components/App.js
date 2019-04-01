import React from 'react';
import '../styles/styles.scss';
import ModuleCardList from './containers/ModuleCardList';

class App extends React.Component {
  render() {
    return(
      <div>
       <h1 className="text-center">sparknodes</h1>
       <h2 className="text-center">a visual intro to the theory of
       computation, data structures, and algorithms.</h2>
       <div>
         <ModuleCardList/>
       </div>
      </div>
    );
  }
}

export default App;
