import {
  Box,
  Heading,
  Stack,
  Link,
  ChakraComponent,
  StackProps,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import { Menu } from './menu'

import { APP_ROUTES } from 'configs'
import { Users } from 'types'

interface Props extends StackProps {
  user: Users | null
  onClose: () => void
}

export const Navigation: ChakraComponent<'div', Props> = ({
  user,
  onClose,
  ...props
}: Props) => {
  const bg = useColorModeValue('gray.50', '#1b1f25')
  return (
    <Stack
      as="nav"
      position="fixed"
      top="0"
      left="0"
      h="100%"
      maxH="100%"
      w="56"
      spacing="0"
      zIndex={2}
      bg={bg}
      {...props}
    >
      <HStack p="6" justify="space-between">
        <NavLink to={APP_ROUTES.APP}>
          <Link display="block" _hover={{ textDecoration: 'none' }}>
            <Heading size="lg" fontSize="24" fontWeight="500" lineHeight={8}>
              Recode
            </Heading>
          </Link>
        </NavLink>
        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          onClick={onClose}
          icon={<FiX />}
          bg="none"
          mr="-3"
          aria-label="close"
        />
      </HStack>
      <Menu />
      <NavLink to={APP_ROUTES.SETTINGS}>
        <Link _hover={{ textDecoration: 'none' }}>
          <Box p="6">
            <Heading as="p" size="xs" noOfLines={1} textTransform="uppercase">
              {user?.merchant?.name}
            </Heading>
          </Box>
        </Link>
      </NavLink>
    </Stack>
  )
}
