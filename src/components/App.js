import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';
import ModuleCardList from './containers/ModuleCardList';

class App extends React.Component {
  render() {
    return(
      <div className="main container-fluid">
       <div className="row">
         <div className="col-12">
          <h1 className="text-center">sparknodes</h1>
         </div>
         <div className="col-12">
         <h2 className="text-center">a visual intro to the theory of
         computation, data structures, and algorithms.</h2>
         </div>
       </div>
       <div className="row">
        <ModuleCardList/>
       </div>
      </div>
    );
  }
}

export default App;
