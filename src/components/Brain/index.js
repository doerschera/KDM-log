import React, { PureComponent} from 'react';
import { object } from 'prop-types';
import { Mutation } from 'react-apollo';
import UPDATE_BRAIN from '../../mutations/updateBrain';

import './styles.scss';

export default class Brain extends PureComponent {
  static propTypes = {
    brain: object,
  }

  constructor(props) {
    super(props);
    
    this.state = { value: this.props.brain.value || 0 }
  }

  updateValue = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <div className="brain">
        <Mutation mutation={UPDATE_BRAIN} variables={{ id: this.props.brain.id, value: parseInt(this.state.value) }}>
          {(mutation) =>
            <input
              className="value"
              onChange={this.updateValue}
              value={this.state.value}
              onBlur={mutation} />
          }
        </Mutation>
        <div>{this.state.value >= 3 ? 'Insane!' : ''}</div>
      </div>
    );
  }
}
