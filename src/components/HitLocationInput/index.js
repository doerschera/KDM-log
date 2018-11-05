import React, { PureComponent } from 'react';
import { object, bool } from 'prop-types';
import { Mutation } from 'react-apollo';
import classNames from 'classnames';
import hasHeavyInjury from '../../helpers/hasHeavyInjury';
import hasLightInjury from '../../helpers/hasLightInjury';
import UPDATE_DAMAGE from '../../mutations/updateDamage';

import './styles.scss';

export default class HitLocationInput extends PureComponent {
  static propTypes = {
    hitLocation: object,
    resetValues: bool,
    updateDamage: bool,
  }

  static defaultProps = {
    hitLocation: {}
  }

  constructor(props) {
    super(props);

    this.state = {
      damageCount: this.props.hitLocation.damage,
      resetValues: this.props.resetValues,
      updateDamage: this.props.updateDamage,
      value: this.props.hitLocation.armor,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.resetValues && this.props.resetValues !== prevProps.resetValues) {
      this.setState({ value: this.props.hitLocation.armor });
    }
  }

  clearInput = () => this.setState({ value: ''});

  calculateDamage = (mutation) => {
    const { hitLocation } = this.props;
    const heavyDamage = hasHeavyInjury({ damage: this.state.damageCount, armor: hitLocation.armor, type: hitLocation.type});
    const lightDamage = hasLightInjury({ damage: this.state.damageCount, armor: hitLocation.armor, type: hitLocation.type});
    let damageValue = hitLocation.armor - this.state.damageCount;

    if (lightDamage) damageValue = '/';
    if (heavyDamage) damageValue = 'X';

    this.setState({ value: damageValue});

    return mutation;
  };

  onBlur = (mutation) => {
    return this.calculateDamage(mutation);
  }

  onChange = (e) => {
    const value = parseInt(e.target.value);
    let damageCount = this.state.damageCount + value;
    if (!value) {
      damageCount = '';
    }
    debugger;
    this.setState((prevState) => ({ value, damageCount }));
  }

  render() {
    const value = this.props.updateDamage ? this.state.damageCount : this.state.value;
    return (
      <div className={classNames('hit-location-input', { focused: this.state.focused })}>
        <Mutation mutation={UPDATE_DAMAGE} variables={{ damage: this.state.damageCount, id: this.props.hitLocation.id }}>
          {
            (mutation) => (
              <input
                className={classNames(this.props.hitLocation.type)}
                placeholder=""
                value={value}
                onChange={this.onChange}
                onFocus={this.clearInput}
                onBlur={(mutation) => this.onBlur(mutation)} />
            )
          }
        </Mutation>
      </div>
    );
  }
}