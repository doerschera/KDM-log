import React from 'react';
import { object, bool } from 'prop-types';
import { Mutation } from 'react-apollo';
import classNames from 'classnames';
import {
  hasLightInjury,
  hasHeavyInjury,
} from '../../helpers';
import MARK_AS_ACTIVE from '../../mutations/markAsActive';
import MARK_AS_INACTIVE from '../../mutations/markAsInactive';
import Button from '../Button';

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
  disableAdd,
  survivor,
}) => {
  const {
    isActive,
    survival,
    movement,
    huntXP,
    hitLocations,
    id,
    name,
  } = survivor;
  let status = 'Inactive';
  let buttonMutation = MARK_AS_ACTIVE;
  let buttonTitle = 'Add To Hunt';
  if (isActive) {
    status = 'Active';
    buttonMutation = MARK_AS_INACTIVE;
    buttonTitle = 'Skip Hunt';
  }
  return (
    <div className={classNames('survivor-summary', { active: isActive })}>
      <div className="status">{status}</div>
      <div className="info-wrapper">
        <div className="name">
          <div>{name}</div>
        </div>
        <div className="health">
          <div>{`Survival: ${survival.value}`}</div>
          <div>{`Movement: ${movement.value}`}</div>
          <div>{`Hunt XP: ${huntXP || 0}`}</div>
          <div>{getInjuries(hitLocations)}</div>
        </div>
        <div className="actions">
          <Button title="View Details" />
          <Mutation mutation={buttonMutation} variables={{ id }}>
            {mutation => <Button title={buttonTitle} disabled={disableAdd && !isActive} onClick={mutation} />}
          </Mutation>
        </div>
      </div>
    </div>
  );
}

SurvivorSummary.propTypes = {
  disableAdd: bool,
  survivor: object,
};

export default SurvivorSummary;
