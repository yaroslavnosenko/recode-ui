import { useQuery } from '@apollo/client'
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useBoolean,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { Navigation, Header } from 'components/app'
import { APP_ROUTES } from 'configs'
import { useToken } from 'hooks'
import { USER_QUERY } from 'queries'
import { Query_Root, Query_RootUsers_By_PkArgs } from 'types'

const HeaderDesktopWidth = 'calc(100% - var(--chakra-space-56))'

export const Layout = ({ children }: PropsWithChildren) => {
  const [nav, setNav] = useBoolean()

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
    <>
      {data && (
        <>
          <Navigation
            user={data}
            onClose={setNav.off}
            display={{ base: 'none', lg: 'flex' }}
          />
          <Drawer isOpen={nav} onClose={setNav.toggle} placement="left">
            <DrawerOverlay />
            <DrawerContent>
              <Navigation
                user={data}
                onClose={setNav.off}
                position="relative"
                w="100%"
              />
            </DrawerContent>
          </Drawer>
        </>
      )}
      <Header
        width={{ base: '100%', lg: HeaderDesktopWidth }}
        left={[0, 0, 0, 56]}
        onMenuClick={setNav.toggle}
        name={data?.name || ''}
      />
      <Box as="main" pt="20" pl={[0, 0, 0, 56]} minH="100vh">
        {children}
      </Box>
    </>
  )
}
