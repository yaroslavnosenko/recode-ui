import {
  Box,
  Container,
  HStack,
  useColorModeValue,
  Link,
  Button,
  Text,
  Icon,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { FiBell } from 'react-icons/fi'

import { MenuContext } from 'components/menu'
import { DATA } from 'mock/data'

interface Props {
  active: string | undefined
  onMakeOrder: () => void
  registerTrigger: (id: string) => (el: any) => void
}

export const Toolbar = ({ registerTrigger, active, onMakeOrder }: Props) => {
  const bg = useColorModeValue('white', 'dark.900')
  const { getSum, order } = useContext(MenuContext)

  return (
    <Box
      pos="fixed"
      w="full"
      borderTopWidth="1px"
      bottom="0"
      left="0"
      bg={bg}
      pb="env(safe-area-inset-bottom)"
    >
      <Container maxW="container.sm">
        <HStack spacing="6" py="4">
          {DATA.map((cat) => {
            const isActive = active === cat.id
            return (
              <Link
                key={cat.id}
                _hover={{ textDecoration: 'none' }}
                fontWeight="500"
                ref={registerTrigger(cat.id)}
                opacity={isActive ? 1 : 0.5}
              >
                {cat.name}
              </Link>
            )
          })}
        </HStack>
        {order.length !== 0 && (
          <Box pb="6" pt="2">
            <Button
              onClick={onMakeOrder}
              size="lg"
              colorScheme="teal"
              display="flex"
              w="full"
              justifyContent="space-between"
              fontSize="md"
              px="4"
            >
              <HStack spacing={4}>
                <Icon strokeWidth={2.5} as={FiBell} />
                <Text>Make Order</Text>
              </HStack>
              <Text fontWeight="normal">{getSum().toFixed(2)} €</Text>
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  )
}
