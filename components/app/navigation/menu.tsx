import { Button, Icon, Stack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { IconType } from 'react-icons'
import {
  FiBell,
  FiBox,
  FiFolder,
  FiSettings,
  FiShoppingBag,
  FiUsers,
} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import { APP_ROUTES } from 'configs/routes'

interface MenuItemProps {
  href: string
  icon: IconType
}

const MenuItem = ({
  href,
  icon,
  children,
}: PropsWithChildren<MenuItemProps>) => {
  return (
    <NavLink to={href}>
      {({ isActive }) => (
        <Button
          size="md"
          w="100%"
          justifyContent="flex-start"
          variant={isActive ? 'solid' : 'ghost'}
          colorScheme={isActive ? 'teal' : undefined}
          fontWeight="normal"
          fontSize="sm"
        >
          <Icon boxSize="4" as={icon} me="4" />
          {children}
        </Button>
      )}
    </NavLink>
  )
}

export const Menu = () => {
  return (
    <Stack
      p="6"
      spacing="1"
      as="menu"
      flex="1"
      m="0"
      overflowY="scroll"
      css={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <MenuItem icon={FiBell} href={APP_ROUTES.ORDERS}>
        Orders
      </MenuItem>
      <MenuItem icon={FiFolder} href={APP_ROUTES.CATEGORIES}>
        Categories
      </MenuItem>
      <MenuItem icon={FiShoppingBag} href={APP_ROUTES.PRODUCTS}>
        Products
      </MenuItem>
      <MenuItem icon={FiUsers} href={APP_ROUTES.EMPLOYEES}>
        Employees
      </MenuItem>
      <MenuItem icon={FiBox} href={APP_ROUTES.PLACEMENTS}>
        Placements
      </MenuItem>
      <MenuItem icon={FiSettings} href={APP_ROUTES.SETTINGS}>
        Settings
      </MenuItem>
    </Stack>
  )
}
