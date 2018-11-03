import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { object, func, bool } from 'prop-types';
import classNames from 'classnames';
import lantern from '../../lantern-dark-grey.svg';

import './styles.scss';

const Sidebar = ({
  expanded,
  location,
  onSidebarToggle,
}) => {
  const activeSection = location.pathname.includes('/hunt') ? 'hunt' : 'settlement';
  return (
    <div className={classNames('sidebar', { expanded })}>
      <img src={lantern} alt="lantern" onClick={onSidebarToggle} />
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

Sidebar.propTypes = {
  expanded: bool,
  location: object,
  onSidebarToggle: func,
};

export default withRouter(Sidebar);
