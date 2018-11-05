import gql from 'graphql-tag';
const KILL_SURVIVOR = gql`
  mutation killSurvivor($id: String!) {
    killSurvivor(id: $id) {
      id,
    }
  }`
  ;

export default KILL_SURVIVOR;