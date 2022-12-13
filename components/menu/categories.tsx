import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { DATA } from 'mock/data'
import { Product } from 'mock/types'

const ProductItem = ({ product }: { product: Product }) => {
  const bgColor = useColorModeValue('gray.100', 'dark.800')

  return (
    <HStack spacing="6" alignItems="flex-start">
      <Stack flex={1}>
        <Heading fontWeight="500" size="sm">
          {product.name}
        </Heading>
        <Text opacity={0.5}>{product.description}</Text>
        <Text fontWeight="500" color="teal.500">
          {product.price.toFixed(2)} Euro
        </Text>
      </Stack>
      {product.image && (
        <Box
          boxSize="24"
          borderRadius="lg"
          backgroundPosition="center"
          backgroundSize="cover"
          bgColor={bgColor}
          bgImage={product.image}
        />
      )}
    </HStack>
  )
}

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
            <Stack spacing={6} divider={<StackDivider />}>
              {cat.products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  )
}
