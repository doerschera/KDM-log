import React from 'react';
import { string, object } from 'prop-types';
import Button from '../Button';
import HitLocationInput from '../HitLocationInput';

import './styles.scss';

const HuntDetails = ({
  survivor,
  id,
}) => {
  return (
    <div className="hunt-details">
      <div className="name">{survivor.name}</div>
      <div className="hit-locations">
        {survivor.hitLocations.map(location => (
          <HitLocationInput hitLocation={location} key={`${id}-${location.type}`} />
        ))}
        <Button title="Update Armor" />
        <Button title="Reset Values" />
      </div>
    </div>
  );
};

HuntDetails.propTypes = {
  survivr: object,
  id: string,
};

export default HuntDetails;
