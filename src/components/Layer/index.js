import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Hunt from '../Hunt';
import AllSurvivors from '../AllSurvivors';

import './styles.scss';

export default class Layer extends PureComponent {
  state = { expanded: false }

  onSidebarToggle = () => {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  }

  hideSidebar = () => {
    this.setState({ expanded: false });
  }

  render() {
    return (
      <div className="layer">
        <Sidebar onSidebarToggle={this.onSidebarToggle} expanded={this.state.expanded} />
        <div className="body" onClick={this.hideSidebar}>
          <Switch>
            <Route exact path="/hunt" component={Hunt} />
            <Route exact path="/hunt/survivors" component={AllSurvivors} />
          </Switch>
        </div>
      </div>
    );
  }
}
