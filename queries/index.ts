import { gql } from '@apollo/client'

export const USER_QUERY = gql`
  query ($id: uuid!) {
    users_by_pk(id: $id) {
      name
      email
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

export const EMPLOYEES_QUERY = gql`
  query ($id: uuid!) {
    users_by_pk(id: $id) {
      merchant {
        id
        employees {
          id
          username
          name
          pin
        }
      }
    }
  }
`
