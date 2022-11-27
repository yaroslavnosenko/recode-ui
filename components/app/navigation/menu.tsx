import { Button, Icon, Link, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { PropsWithChildren, useMemo } from 'react'
import { IconType } from 'react-icons'
import {
  FiCalendar,
  FiClipboard,
  FiClock,
  FiDollarSign,
  FiPackage,
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
  const router = useRouter()
  const active: boolean = useMemo(
    () => router.pathname.split('/')[2] === href.split('/')[2],
    [href, router.pathname]
  )
  return (
    <NavLink to={href}>
      <Link _hover={{ textDecoration: 'none' }}>
        <Button
          size="md"
          w="100%"
          justifyContent="flex-start"
          variant={active ? 'solid' : 'ghost'}
          colorScheme={active ? 'gray' : undefined}
          color={active ? 'blue.600' : undefined}
          fontWeight="normal"
          fontSize="sm"
        >
          <Icon boxSize="4" as={icon} me="4" />
          {children}
        </Button>
      </Link>
    </NavLink>
  )
}

export const Menu = () => {
  return (
    <Stack py="4" spacing="1" overflow="scroll" as="menu" flex="1" px="4" m="0">
      <MenuItem icon={FiCalendar} href={APP_ROUTES.ORDERS}>
        Calendar
      </MenuItem>
      <MenuItem icon={FiDollarSign} href={APP_ROUTES.ORDERS}>
        Orders
      </MenuItem>
      <MenuItem icon={FiShoppingBag} href={APP_ROUTES.ORDERS}>
        Services
      </MenuItem>
      <MenuItem icon={FiPackage} href={APP_ROUTES.ORDERS}>
        Suppliers
      </MenuItem>
      <MenuItem icon={FiUsers} href={APP_ROUTES.ORDERS}>
        Customers
      </MenuItem>
      <MenuItem icon={FiClock} href={APP_ROUTES.ORDERS}>
        Schedules
      </MenuItem>
      <MenuItem icon={FiClipboard} href={APP_ROUTES.ORDERS}>
        Form
      </MenuItem>
    </Stack>
  )
}
