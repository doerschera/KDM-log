import React from 'react';
import { func, object, oneOfType, string, number } from 'prop-types';
import { Mutation } from 'react-apollo';

import './styles.scss';

const InvisibleInput = ({
  mutation,
  onChange,
  value,
  variables
}) => (
  <Mutation mutation={mutation} variables={variables}>
    {(mutation) =>
      <input
        className="invisible-input value"
        onChange={onChange}
        value={value}
        onBlur={mutation} />
    }
  </Mutation>
);

InvisibleInput.propTypes = {
  mutation: object,
  onChange: func,
  value: oneOfType([string, number]),
  variables: object,
};

export default InvisibleInput;
