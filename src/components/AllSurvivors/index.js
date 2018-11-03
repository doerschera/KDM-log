import React from 'react';
import { Query } from 'react-apollo';
import SurvivorSummary from '../SurvivorSummary';
import ALL_SURVIVORS from '../../queries/allSurvivors';

const AllSurvivors = () => (
  <Query query={ALL_SURVIVORS}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <div>Loading...</div>
        }

        if (error) {
          return console.log(error)
        }

        return (
          data.survivors.map(survivor => <SurvivorSummary key={survivor.id} survivor={survivor} />)
        )
      }
    }
  </Query>
);

export default AllSurvivors;
