import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Landing from './Landing';
import ModuleLanding from './ModuleLanding';
import ModulePage from './module-page/ModulePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.scss';


class Container extends React.Component {
  componentDidUpdate = () => {
    const { location } = this.props;
    if (location.pathname && (location.pathname === '/sparknodes/' || location.pathname.startsWith('/sparknodes/modules/'))) {
      document.querySelector('body').className = 'theme-dark'
    } else {
      document.querySelector('body').className = 'theme-light';
    }
  }

  render() {
    const { location } = this.props;
    return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route path="/sparknodes/" exact component={Landing}/>
              <Route path="/sparknodes/modules" exact component={ModuleLanding}/>
              <Route path="/sparknodes/modules/:id" exact component={ModulePage}/>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(Container);
