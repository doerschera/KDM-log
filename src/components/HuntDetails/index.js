import React, { PureComponent } from 'react';
import { string, object } from 'prop-types';
import Button from '../Button';
import HitLocationInput from '../HitLocationInput';

import './styles.scss';

export default class HuntDetails extends PureComponent {
  static propTypes = {
    survivor: object,
  }

  state = {
    updateDamage: false,
    resetValues: false,
  }

  toggleUpdateFlag = () => this.setState((prevState) => ({ updateDamage: !prevState.updateDamage }))

  toggleResetFlag = () => this.setState((prevState) => ({ resetValues: !prevState.resetValues }))

  render() {
    const { survivor } = this.props;
    const updateButtonTitle = this.state.updateDamage ? 'Save Damage' : 'Update Damage';
    return (
      <div className="hunt-details">
        <div className="name">{survivor.name}</div>
        <div className="hit-locations">
          {survivor.hitLocations.map(location => (
            <HitLocationInput
              updateDamage={this.state.updateDamage}
              resetValues={this.state.resetValues}
              hitLocation={location}
              key={`${location.id}-${location.type}`} />
          ))}
          <Button title={updateButtonTitle} onClick={this.toggleUpdateFlag} />
          <Button title="Reset Values" onClick={this.toggleResetFlag} />
        </div>
      </div>
    );
  }
}
