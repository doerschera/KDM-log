import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { Mutation } from 'react-apollo';
import KILL_SURVIVOR from '../../mutations/killSurvivor';
import Conditional from '../Conditional';
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
    isDeceased: false,
  }

  toggleUpdateFlag = () => this.setState((prevState) => ({ updateDamage: !prevState.updateDamage }))

  toggleResetFlag = () => this.setState((prevState) => ({ resetValues: !prevState.resetValues }))

  onKill = (mutation) => {
    this.setState({ isDeceased: true });
    return mutation;
  }

  render() {
    const { survivor } = this.props;
    const updateButtonTitle = this.state.updateDamage ? 'Save Damage' : 'Update Damage';
    return (
      <div className="hunt-details">
        <Conditional condition={this.state.isDeceased}>
          <div className="death"/>
        </Conditional>
        <div className="header">
          <div className="name">{survivor.name}</div>
          <Mutation mutation={KILL_SURVIVOR} variables={{ id: survivor.id }}>
            {(mutation) => <Button title="Death Becomes You" onClick={(mutation) => this.onKill(mutation)} /> }
          </Mutation>
        </div>
        <div className="hit-locations">
          {survivor.hitLocations.map(location => (
            <HitLocationInput
              updateDamage={this.state.updateDamage}
              resetValues={this.state.resetValues}
              hitLocation={location}
              key={`${location.id}-${location.type}`} />
          ))}
          <div className="buttons">
            <Button title={updateButtonTitle} onClick={this.toggleUpdateFlag} />
            <Button title="Reset Values" onClick={this.toggleResetFlag} />
          </div>
        </div>
      </div>
    );
  }
}
