import React, { PureComponent } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { string, array } from 'prop-types';
import classNames from 'classnames';
import lantern from '../../lantern-dark-grey.svg';

import './styles.scss';

class Sidebar extends PureComponent {
  static propTypes = {
    context: string,
    options: array,
    navigationText: string,
  };

  state = { expanded: false }

  onSidebarToggle = () => {
    this.setState((prevState) => ( { expanded: !prevState.expanded }));
  }

  render() {
    const { location } = this.props;
    const expanded = this.state.expanded;
    const activeSection = location.pathname.includes('/hunt') ? 'hunt' : 'settlement';
    return(
      <div className={classNames('sidebar', { expanded })}>
        <img src={lantern} alt="lantern" onClick={this.onSidebarToggle} />
        <div className="content">
          <Link to="/hunt" className={classNames('header-link', { active: activeSection === 'hunt' })}>
            <div className="header">Hunt</div>
          </Link>
          <div className="options">
            <NavLink to="/hunt/survivors" className="option-link" activeClassName="active">
              <div className="option">All Survivors</div>
            </NavLink>
            <NavLink to="/hunt/active" className="option-link" activeClassName="active">
              <div className="option">Active Survivors</div>
            </NavLink>
          </div>
          <Link to="/settlement" className={classNames('header-link', { active: activeSection === 'settlement' })}>
            <div className="header">Settlement</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar);
