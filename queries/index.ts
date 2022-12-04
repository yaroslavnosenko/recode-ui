import { gql } from '@apollo/client'

export const USER_QUERY = gql`
  query ($id: uuid!) {
    users_by_pk(id: $id) {
      name
      id
      merchant {
        id
        name
        slug
        lang
        currency
        phone
        address
        wifi
      }
    }
  }
`
