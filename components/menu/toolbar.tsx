import {
  Box,
  Container,
  HStack,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

import { DATA } from 'mock/data'

interface Props {
  active: string | undefined
  registerTrigger: (id: string) => (el: any) => void
}

export const Toolbar = ({ registerTrigger, active }: Props) => {
  const bg = useColorModeValue('white', 'dark.900')

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
      </Container>
    </Box>
  )
}
