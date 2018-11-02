import React, { PureComponent } from 'react';
import { string, array } from 'prop-types';
import classNames from 'classnames';
import lantern from '../../lantern-dark-grey.svg';

import './styles.scss';

export default class Sidebar extends PureComponent {
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
    const {
      context,
      options,
      navigationText,
    } = this.props;

    const expanded = this.state.expanded;
    return(
      <div className={classNames('sidebar', { expanded })}>
        <img src={lantern} alt="lantern" onClick={this.onSidebarToggle} />
        <div className="content">
          <div className="header context">{context}</div>
          <div className="options">
            {options.map((option, i) => (
              <div className="option" onClick={option.onClick} id={i}>
                {option.name}
              </div>
            ))}
          </div>
          <div className="header">{navigationText}</div>
        </div>
      </div>
    )
  }
}
