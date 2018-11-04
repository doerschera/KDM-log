import React from 'react';
import { string, object } from 'prop-types';
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
      </div>
    </div>
  );
};

HuntDetails.propTypes = {
  survivr: object,
  id: string,
};

export default HuntDetails;
