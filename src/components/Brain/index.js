import React, { PureComponent} from 'react';
import { object } from 'prop-types';
import classNames from 'classnames';
import { Mutation } from 'react-apollo';
import InvisibleInput from '../InvisibleInput';
import UPDATE_BRAIN from '../../mutations/updateBrain';

import './styles.scss';

export default class Brain extends PureComponent {
  static propTypes = {
    brain: object,
  }

  constructor(props) {
    super(props);
    
    this.state = {
      injured: this.props.brain.injured,
      value: this.props.brain.value || 0
    }
  }

  updateValue = (e) => this.setState({ value: e.target.value });

  toggleInjured = (mutation) => (
    this.setState((prevState) => (
      { injured: !prevState.injured }
    ), () => mutation)
  )

  render() {
    const { brain } = this.props;
    const { injured, value } = this.state;
    return (
      <div className="brain">
        <InvisibleInput
          mutation={UPDATE_BRAIN}
          onChange={this.updateValue}
          value={this.state.value}
          variables={{ id: brain.id, value: parseInt(value) }} />
        <div>{this.state.value >= 3 ? 'Insane!' : ''}</div>
        <div className="checkbox-wrapper">
          <Mutation mutation={UPDATE_BRAIN} variables={{ id: brain.id, value: parseInt(value), injured }}>
            {(mutation) => (
              <div
                className={classNames('checkbox', { checked: injured })}
                onClick={(mutation) => this.toggleInjured(mutation)} />
            )}
          </Mutation>
          <span className="checkbox-label">Brain Damage</span>
        </div>
      </div>
    );
  }
}
