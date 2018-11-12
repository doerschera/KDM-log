import gql from 'graphql-tag';
const UPDATE_BRAIN = gql`
  mutation updateBrain($id: String!, $value: Int!, $injured: Boolean) {
    updateBrain(id: $id, value: $value, injured: $injured) {
      id
    }
  }`
  ;

export default UPDATE_BRAIN;
