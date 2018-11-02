import React from 'react';
import { object } from 'prop-types';
import classNames from 'classnames';
import {
  hasLightInjury,
  hasHeavyInjury,
} from '../../helpers';

import './styles.scss';

const getInjuries = (hitLocations) => {
  let lightInjury = false;
  let heavyInjury = false;

  hitLocations.forEach((location) => {
    if (!heavyInjury) heavyInjury = hasHeavyInjury(location);
    if (!lightInjury) lightInjury = hasLightInjury(location);
  });

  if (lightInjury && heavyInjury) return 'Light and heavy injuries';
  if (lightInjury) return 'Light injury';
  if (heavyInjury) return 'Heavy injury';

  return 'No injuries';
}

const SurvivorSummary = ({
  survivor
}) => (
  <div className={classNames('survivor-summary', { active: survivor.isActive })}>
    <div className="status">{survivor.isActive ? 'Hunt' : 'Inactive'}</div>
    <div className="info-wrapper">
      <div className="name">
        <div>{survivor.name}</div>
      </div>
      <div className="health">
        <div>{`Survival: ${survivor.survival.value}`}</div>
        <div>{`Movement: ${survivor.movement.value}`}</div>
        <div>{`Hunt XP: ${survivor.huntXP || 0}`}</div>
        <div>{getInjuries(survivor.hitLocations)}</div>
      </div>
      <div className="actions">
        <div className="button">View Details</div>
        <div className="button">Add To Hunt</div>
      </div>
    </div>
  </div>
);

SurvivorSummary.propTypes = {
  survivor: object,
};

export default SurvivorSummary;
