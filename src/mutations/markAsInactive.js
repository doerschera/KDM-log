import gql from 'graphql-tag';
const MARK_AS_INACTIVE = gql`
  mutation markAsInactive($id: String!) {
    markAsInactive(id: $id) {
      id,
      isActive,
    }
  }`
  ;

export default MARK_AS_INACTIVE;