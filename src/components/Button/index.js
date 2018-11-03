import React from 'react';
import { string, bool, func } from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Button = ({
  disabled,
  onClick,
  title,
}) => (
  <div className={classNames('button', { disabled })} onClick={onClick}>
    {title}
  </div>
);

Button.propTypes = {
  disabled: bool,
  onClick: func,
  title: string,
};

export default Button;