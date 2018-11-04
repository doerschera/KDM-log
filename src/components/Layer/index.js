import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Hunt from '../Hunt';
import AllSurvivors from '../AllSurvivors';

import './styles.scss';

export default class Layer extends Component {
  state = { expanded: true }

  onSidebarToggle = () => {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  }

  hideSidebar = () => {
    this.setState({ expanded: false });
  }

  shouldComponentUpdate() {
    // FIX ME: insures that new component renders when route changes
    // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
    return true;
  }

  render() {
    return (
      <div className="layer">
        <Sidebar onSidebarToggle={this.onSidebarToggle} expanded={this.state.expanded} />
        <div className="layer-body">
          <Switch>
            <Route exact path="/hunt/survivors" component={AllSurvivors} />
            <Route exact path="/hunt" component={Hunt} />
          </Switch>
        </div>
      </div>
    );
  }
}
