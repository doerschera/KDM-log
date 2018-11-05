import React from 'react';
import { object } from 'prop-types';

import './styles.scss';

const Survival = ({
  survival
}) => (
  <div className="survival">
    <div className="value">{survival.value}</div>
    {survival.skills.map(skill => (
      <span className="skill">{skill}</span>
    ))}
  </div>
);

Survival.propTypes = {
  survival: object,
};

export default Survival;
