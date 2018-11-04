import gql from 'graphql-tag';
const ACTIVE_SURVIVORS = gql`
  query activeSurvivors {
    activeSurvivors {
      id
      name
      survival {
        value
        skills
        canSpend
      }
      movement {
        value
        accuracy
        strength
        evasion
        luck
        speed
      }
      brain {
        value
      }
      hitLocations {
        damage
        armor
        type
      }
    }
  }`
  ;

export default ACTIVE_SURVIVORS;
