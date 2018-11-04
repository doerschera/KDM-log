import gql from 'graphql-tag';
const HIT_LOCATIONS = gql`
  query HitLocations($id: String!) {
    hitLocations(id: $id) {
      id
      damage
      armor
      type
    }
  }`
  ;

export default HIT_LOCATIONS;
