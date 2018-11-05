import React from 'react';
import { object } from 'prop-types';

import './styles.scss';

const Movement = ({
  movement,
}) => (
  <div className="movement">
    <div className="value">{movement.value}</div>
    <div className="ability">
      <div className="ability-title">Accuracy</div>
      <div className="ability-value">{movement.accuracy || 0}</div>
    </div>
    <div className="ability">
      <div className="ability-title">Strength</div>
      <div className="ability-value">{movement.strength || 0}</div>
    </div>
    <div className="ability">
      <div className="ability-title">Evasion</div>
      <div className="ability-value">{movement.evasion || 0}</div>
    </div>
    <div className="ability">
      <div className="ability-title">Luck</div>
      <div className="ability-value">{movement.luck || 0}</div>
    </div>
    <div className="ability">
      <div className="ability-title">Speed</div>
      <div className="ability-value">{movement.speed || 0}</div>
    </div>
  </div>
);

Movement.propTypes = {
  movement: object,
};

export default Movement;
