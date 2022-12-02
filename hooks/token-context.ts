import jwt_decode from 'jwt-decode'
import { createContext, useContext } from 'react'

export const TokenContext = createContext<string>('')

interface Token {
  token: string
  id: string
  role: string
}

export const useToken = (): Token => {
  const token = useContext(TokenContext)
  const decoded: any = jwt_decode(token)
  const hasura = decoded['https://hasura.io/jwt/claims']
  const id = hasura['x-hasura-user-id']
  const role = hasura['x-hasura-role']
  return { token, id, role }
}
