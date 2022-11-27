import {
  Box,
  Heading,
  Stack,
  Link,
  HStack,
  Avatar,
  StackDivider,
  ChakraComponent,
  StackProps,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { Menu } from './menu'

import { APP_ROUTES } from 'configs'

export const Navigation: ChakraComponent<'div', {}> = (props: StackProps) => {
  return (
    <Stack
      as="nav"
      borderRightWidth="1px"
      position="fixed"
      top="0"
      left="0"
      h="100%"
      maxH="100%"
      w="56"
      spacing="0"
      divider={<StackDivider />}
      zIndex={2}
      {...props}
    >
      <NavLink to={APP_ROUTES.APP}>
        <Link
          className="font-medium text-2xl"
          display="block"
          p="6"
          _hover={{ textDecoration: 'none' }}
        >
          Recode
        </Link>
      </NavLink>
      <Menu />
      <NavLink to={APP_ROUTES.SETTINGS}>
        <Link _hover={{ textDecoration: 'none' }}>
          <HStack p="6" spacing="4">
            <Avatar rounded="md" boxSize="8" name={'IVAN'} bg="gray.900" />
            <Box flex="1">
              <Heading as="p" size="xs">
                NAME
              </Heading>
            </Box>
          </HStack>
        </Link>
      </NavLink>
    </Stack>
  )
}
