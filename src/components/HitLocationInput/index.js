import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import classNames from 'classnames';
import hasHeavyInjury from '../../helpers/hasHeavyInjury';
import hasLightInjury from '../../helpers/hasLightInjury';

import './styles.scss';

export default class HitLocationInput extends PureComponent {
  static propTypes = {
    hitLocation: object,
  }

  static defaultProps = {
    hitLocation: {}
  }

  constructor(props) {
    super(props);

    this.state = { value: this.props.hitLocation.armor }
  }

  clearInput = () => this.setState({ value: ''});

  calculateDamage = () => {
    const { hitLocation } = this.props;
    const heavyDamage = hasHeavyInjury({ damage: this.state.value, armor: hitLocation.armor, type: hitLocation.type});
    const lightDamage = hasLightInjury({ damage: this.state.value, armor: hitLocation.armor, type: hitLocation.type});
    let damageValue = hitLocation.armor - this.state.value;

    if (lightDamage) damageValue = '/';
    if (heavyDamage) damageValue = 'X';

    return this.setState({ value: damageValue});
  };

  onChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <div className={classNames('hit-location-input', { focused: this.state.focused })}>
        <input
          className={classNames(this.props.hitLocation.type)}
          placeholder=""
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.clearInput}
          onBlur={this.calculateDamage} />
      </div>
    );
  }
}