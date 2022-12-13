import { Box, Container, Heading, Stack } from '@chakra-ui/react'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface Category {
  id: string
  name: string
  products: Product[]
}

const CATEGORIES: Category[] = [
  { id: '1', name: 'Pizza', products: [] },
  { id: '2', name: 'Deserts', products: [] },
  { id: '3', name: 'Cakes', products: [] },
  { id: '4', name: 'Coffee', products: [] },
]

const ProductItem = ({ product }: { product: Product }) => {
  return <Box>{product.name}</Box>
}

export const Categories = () => {
  return (
    <Container maxW="container.sm">
      {CATEGORIES.map((cat) => (
        <Box key={cat.id}>
          <Heading size="md" fontWeight="500">
            {cat.name}
          </Heading>
          <Stack>
            {cat.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </Stack>
        </Box>
      ))}
    </Container>
  )
}
