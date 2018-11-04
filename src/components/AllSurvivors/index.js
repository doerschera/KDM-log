import React from 'react';
import { Query } from 'react-apollo';
import SurvivorSummary from '../SurvivorSummary';
import ALL_SURVIVORS from '../../queries/allSurvivors';

const AllSurvivors = () => (
  <div className="all-survivors">
    <Query query={ALL_SURVIVORS}>
      {
        ({ loading, error, data }) => {
          if (loading) {
            return <div>Loading...</div>
          }

          if (error) {
            return console.log(error)
          }

          const activeSurvivors = data.survivors.filter((survivor) => survivor.isActive);
          return (
            data.survivors.map(survivor => (
              <SurvivorSummary key={survivor.id} survivor={survivor} disableAdd={activeSurvivors.length >= 4} />
            ))
          );
        }
      }
    </Query>
  </div>
);

export default AllSurvivors;
