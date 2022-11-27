import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useBoolean,
  useBreakpoint,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import { Navigation, Header } from 'components/app'

const HeaderDesktopWidth = 'calc(100% - var(--chakra-space-56))'

export const Layout = ({ children }: PropsWithChildren) => {
  const [nav, setNav] = useBoolean()
  const bp = useBreakpoint()
  console.log(bp)
  return (
    <>
      <Navigation display={{ base: 'none', lg: 'flex' }} />
      <Drawer isOpen={nav} onClose={setNav.toggle} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <Navigation position="relative" w="100%" />
        </DrawerContent>
      </Drawer>
      <Header
        width={{ base: '100%', lg: HeaderDesktopWidth }}
        left={[0, 0, 0, 56]}
        onMenuClick={setNav.toggle}
      />
      <Box as="main" pt="16" pl={[0, 0, 0, 56]} minH="100vh">
        {children}
      </Box>
    </>
  )
}
