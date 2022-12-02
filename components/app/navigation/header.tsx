import { useQuery, gql } from '@apollo/client'
import {
  Box,
  BoxProps,
  ChakraComponent,
  HStack,
  IconButton,
  Avatar,
} from '@chakra-ui/react'
import { FiBell, FiMenu } from 'react-icons/fi'
import { Link, Navigate, useLocation } from 'react-router-dom'

import { LayoutContainer } from 'components/app'
import { APP_ROUTES } from 'configs'
import { useToken } from 'hooks'
import { Query_RootUsers_By_PkArgs, Query_Root } from 'types'

interface Props extends BoxProps {
  onMenuClick: () => void
}

const USER_QUERY = gql`
  query ($id: uuid!) {
    users_by_pk(id: $id) {
      name
      id
      merchant {
        id
      }
    }
  }
`

export const Header: ChakraComponent<'div', Props> = ({
  onMenuClick,
  ...props
}: Props) => {
  const { pathname } = useLocation()
  const { id } = useToken()
  const query = useQuery<Query_Root, Query_RootUsers_By_PkArgs>(USER_QUERY, {
    variables: { id },
  })

  const data = query.data?.users_by_pk
  const { loading } = query

  if (!loading && !data?.merchant && pathname !== APP_ROUTES.START)
    return <Navigate to={APP_ROUTES.START} replace />
  return (
    <LayoutContainer as="header" position="fixed" top="0" zIndex={1} {...props}>
      <HStack h="20" justify="space-between" ml="-3">
        <HStack spacing="0">
          <Box display={{ lg: 'none' }}>
            <IconButton
              aria-label="notifications"
              color="gray.900"
              icon={<FiMenu strokeWidth={3} />}
              bg="transparent"
              onClick={onMenuClick}
            />
          </Box>
          {/* <SearchInput display={{ base: 'none', md: 'block' }} /> */}
        </HStack>
        <HStack>
          <Link to={APP_ROUTES.ORDERS}>
            <IconButton
              aria-label="notifications"
              color="gray.500"
              icon={<FiBell />}
              bg="transparent"
            />
          </Link>
          <Link to={APP_ROUTES.ME}>
            <Avatar bg="gray.900" size="sm" name={data?.name || ''} />
          </Link>
        </HStack>
      </HStack>
    </LayoutContainer>
  )
}
