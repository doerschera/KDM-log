import React, { Fragment } from 'react';
import { bool } from 'prop-types';

const Conditional = ({
  children,
  condition,
}) => {
  if (condition) {
    return <Fragment>{children}</Fragment>;
  }

  return null;
};

Conditional.propTypes = {
  condition: bool,
};

export default Conditional;
