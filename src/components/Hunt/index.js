import React, { PureComponent } from 'react';
import Layer from '../Layer';

import './styles.scss';

export default class Hunt extends PureComponent {

  state = { showAllSurvivors: false, showActiveSurvivors: true }

  allSurvivors = () => (
    this.setState({ showAllSurvivors: true })
  )

  get sidebarOptions() {
    return [
      { name: 'All Survivors', onClick: this.allSurvivors },
      { name: 'Active Survivors' }
    ]
  }

  render() {
    return (
      <div className="hunt">
        <span className="page-title">Hunt</span>
        
      </div>
    )
  }
}