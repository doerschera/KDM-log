import gql from 'graphql-tag';
const UPDATE_BRAIN = gql`
  mutation updateBrain($id: String!, $value: Int!) {
    updateBrain(id: $id, value: $value) {
      id
    }
  }`
  ;

export default UPDATE_BRAIN;
