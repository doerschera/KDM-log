import React, { PureComponent } from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

export default class TogglePane extends PureComponent {
  static propTypes = {
    children: node,
    expanded: bool,
    title: string,
  };

  static defaultProps = {
    expanded: false,
  }

  constructor(props) {
    super(props);

    this.state = { expanded: props.expanded };
  }

  togglePane = () =>  this.setState((prevState) => ({ expanded: !prevState.expanded }));

  render() {
    return(
      <div className={classNames('toggle-pane', { expanded: this.state.expanded })}>
        <div className="header" onClick={this.togglePane}>{this.props.title} <span className="arrow">&#9660;</span></div>
        <div className="pane">{this.props.children}</div>
      </div>
    )
  }
}
