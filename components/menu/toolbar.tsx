import { Box, Container, HStack, Link } from '@chakra-ui/react'

const CATEGORIES = ['Pizza', 'Deserts', 'Cakes', 'Coffee']

export const Toolbar = () => {
  return (
    <Box pos="fixed" w="full" py="4" borderTopWidth="1px" bottom="0" left="0">
      <Container maxW="container.sm">
        <HStack spacing="6">
          {CATEGORIES.map((item) => (
            <Link
              key={item}
              _hover={{ textDecoration: 'none' }}
              fontWeight="500"
            >
              {item}
            </Link>
          ))}
        </HStack>
      </Container>
    </Box>
  )
}
