import React, { PureComponent } from 'react';
import Sidebar from '../Sidebar';

import './styles.scss';

const sidebarOptions = [
  { name: 'All Survivors '},
  { name: 'Active Survivors' }
];

export default class Hunt extends PureComponent {

  render() {
    return (
      <div className="hunt">
        <span className="page-title">Survivors</span>
        <Sidebar expanded={true} options={sidebarOptions} />
      </div>
    )
  }
}