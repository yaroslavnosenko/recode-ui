import {
  Box,
  BoxProps,
  ChakraComponent,
  HStack,
  IconButton,
  Avatar,
} from '@chakra-ui/react'
import { FiBell, FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { LayoutContainer } from 'components/app'
import { APP_ROUTES } from 'configs'

interface Props extends BoxProps {
  onMenuClick: () => void
  name: string
}

export const Header: ChakraComponent<'div', Props> = ({
  name,
  onMenuClick,
  ...props
}: Props) => {
  return (
    <LayoutContainer as="header" position="fixed" top="0" zIndex={1} {...props}>
      <HStack h="20" justify="space-between" ml="-3">
        <HStack spacing="0">
          <Box display={{ lg: 'none' }}>
            <IconButton
              aria-label="notifications"
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
              icon={<FiBell />}
              bg="transparent"
            />
          </Link>
          <Link to={APP_ROUTES.ME}>
            <Avatar bg="teal.500" size="sm" name={name} />
          </Link>
        </HStack>
      </HStack>
    </LayoutContainer>
  )
}
