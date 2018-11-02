import gql from 'graphql-tag';
const ALL_SURVIVORS = gql`
  {
    survivors {
      id
      name
      survival {
        value
      }
      movement {
        value
      }
      brain {
        value
      }
      hitLocations {
        damage
        armor
        type
      }
      huntXP
      isActive
    }
  }`
;

export default ALL_SURVIVORS;
