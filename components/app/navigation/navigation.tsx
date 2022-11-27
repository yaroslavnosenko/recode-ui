import {
  Box,
  Heading,
  Stack,
  Link,
  StackDivider,
  ChakraComponent,
  StackProps,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import { Menu } from './menu'

import { APP_ROUTES } from 'configs'

interface Props extends StackProps {
  onClose: () => void
}

export const Navigation: ChakraComponent<'div', Props> = ({
  onClose,
  ...props
}: Props) => {
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
      <HStack p="6" mr="-3" justify="space-between">
        <NavLink to={APP_ROUTES.APP}>
          <Link
            className="font-medium text-2xl"
            display="block"
            _hover={{ textDecoration: 'none' }}
          >
            Recode
          </Link>
        </NavLink>
        <IconButton
          display={{ base: 'block', lg: 'none' }}
          onClick={onClose}
          icon={<FiX />}
          bg="none"
          aria-label="close"
        />
      </HStack>
      <Menu />
      <NavLink to={APP_ROUTES.SETTINGS}>
        <Link _hover={{ textDecoration: 'none' }}>
          <Box p="6">
            <Heading as="p" size="xs" noOfLines={1}>
              ENCORE LOUNGE BAR
            </Heading>
          </Box>
        </Link>
      </NavLink>
    </Stack>
  )
}
