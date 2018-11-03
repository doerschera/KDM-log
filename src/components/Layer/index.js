import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Hunt from '../Hunt';
import AllSurvivors from '../AllSurvivors';

import './styles.scss';

const Layer = () => (
  <div className="layer">
    <div className="body">
      <Switch>
        <Route exact path="/hunt" component={Hunt} />
        <Route exact path="/hunt/survivors" component={AllSurvivors} />
      </Switch>
    </div>
    <Sidebar />
  </div>
);

export default Layer;
