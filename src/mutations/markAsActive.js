import gql from 'graphql-tag';
const MARK_AS_ACTIVE = gql`
  mutation markAsActive($id: String!) {
    markAsActive(id: $id) {
      id,
      isActive,
    }
  }`
;

export default MARK_AS_ACTIVE;