import gql from 'graphql-tag';
const UPDATE_DAMAGE = gql`
  mutation updateDamage($id: String!, $damage: Int!) {
    updateDamage(id: $id, damage: $damage) {
      id
      damage
      armor
      type
    }
  }`
  ;

export default UPDATE_DAMAGE;
