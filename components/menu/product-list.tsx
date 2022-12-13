import {
  Box,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useContext } from 'react'

import { MenuContext, PlusMinus } from 'components/menu'
import { Product } from 'mock/types'

interface ItemProps {
  product: Product
  hideLine?: boolean
}

const Item = ({ product, hideLine }: ItemProps) => {
  const bgColor = useColorModeValue('gray.100', 'dark.800')
  const { getQuantity, addProduct, removeProduct } = useContext(MenuContext)
  const quantity = getQuantity(product.id)
  const isActive: boolean = quantity !== 0

  return (
    <Box pos="relative" cursor="pointer" onClick={() => addProduct(product)}>
      <HStack spacing="6" alignItems="flex-start">
        <Stack flex={1}>
          <Heading size="sm">{product.name}</Heading>
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

      {isActive && (
        <PlusMinus
          mt="4"
          quantity={quantity}
          onMinus={() => removeProduct(product.id)}
          onPlus={() => addProduct(product)}
        />
      )}

      {isActive && !hideLine && (
        <Box pos="absolute" left="-6" top="0" w="4px" h="full" bg="teal.500" />
      )}
    </Box>
  )
}

interface Props {
  products: Product[]
  hideLine?: boolean
}

export const ProductList = ({ products, hideLine }: Props) => {
  return (
    <Stack spacing={6} divider={<StackDivider />}>
      {products.map((product) => (
        <Item key={product.id} product={product} hideLine={hideLine} />
      ))}
    </Stack>
  )
}
