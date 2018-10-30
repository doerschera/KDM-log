import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const SURVIVOR_NAME = gql`
  {
    survivors {
      id
      name
    }
  }`
;

const SurvivorList = () => (
  <Query query={SURVIVOR_NAME}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <div>Loading...</div>
        }

        if (error) {
          return <div>{error}</div>
        }

        return (
          data.survivors.map(survivor => <div key={survivor.id}>{survivor.name}</div>)
        )
      }
    }
  </Query>
);

export default SurvivorList;