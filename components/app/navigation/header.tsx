import {
  Box,
  BoxProps,
  ChakraComponent,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { FiBookOpen, FiBell, FiMenu } from 'react-icons/fi'

import { LayoutContainer } from 'components/app'

interface Props extends BoxProps {
  onMenuClick: () => void
}

export const Header: ChakraComponent<'div', Props> = ({
  onMenuClick,
  ...props
}: Props) => {
  return (
    <LayoutContainer as="header" position="fixed" top="0" zIndex={1} {...props}>
      <HStack h="20" justify="space-between" mx="-3">
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
          <IconButton
            aria-label="help"
            color="gray.500"
            icon={<FiBookOpen />}
            bg="transparent"
          />
          <IconButton
            aria-label="notifications"
            color="gray.500"
            icon={<FiBell />}
            bg="transparent"
          />
        </HStack>
      </HStack>
    </LayoutContainer>
  )
}
