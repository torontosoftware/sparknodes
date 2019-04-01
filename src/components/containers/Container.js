import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Landing from './Landing';
import ModuleLanding from './ModuleLanding';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.scss';


class Container extends React.Component {
  render() {
    const { location } = this.props
    return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route path="/" exact component={Landing}/>
              <Route path="/modules" exact component={ModuleLanding}/>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(Container);
