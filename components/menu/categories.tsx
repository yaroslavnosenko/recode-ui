import { Box, Container, Heading, Stack } from '@chakra-ui/react'

import { ProductList } from 'components/menu'
import { DATA } from 'mock/data'

interface Props {
  registerSection: (id: string) => (el: any) => void
}

export const Categories = ({ registerSection }: Props) => {
  return (
    <Container maxW="container.sm">
      <Stack spacing="0">
        {DATA.map((cat) => (
          <Box key={cat.id} py="6" ref={registerSection(cat.id)}>
            <Heading fontWeight="600" size="md" mb="6">
              {cat.name}
            </Heading>
            <ProductList products={cat.products} />
          </Box>
        ))}
      </Stack>
    </Container>
  )
}
