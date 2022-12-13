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

interface Product {
  id: string
  name: string
  description: string
  price: number
  image?: string
}

interface Category {
  id: string
  name: string
  products: Product[]
}

const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Beer Meals',
    products: [
      {
        id: 'p1',
        name: 'Marinated pork ribs',
        description:
          "Spicy pork ribs with Jack Daniel's BBQ 800/30 g / contains: 1, 10",
        price: 18.2,
        image:
          'https://imageproxy.wolt.com/menu/menu-images/5f8c114a67be99e0ce74556e/56d88fc4-1368-11eb-97f4-f65eedb088da_3820_andiamo_taverna_foto_pub_5.jpeg',
      },
      {
        id: 'p2',
        name: 'Fried smoked meatballs',
        description:
          'In crunchy panko breadcrumbs with peeled sesame, served on iceberg lettuce with homemade bacon mayonnaise 80/80/30 g / contains: 1,3,7,10,11',
        price: 10.2,
        image:
          'https://imageproxy.wolt.com/menu/menu-images/5f8c114a67be99e0ce74556e/10faa2cc-8837-11ec-bbbc-16586e00f27d_3332_foto_wolt_4.jpeg?w=600',
      },
    ],
  },
  {
    id: '2',
    name: 'Deserts',
    products: [
      {
        id: 'p3',
        name: 'Cheesecake',
        description: 'Famous cheesecake 100 g / contains: 1, 3, 7',
        price: 4.6,
        image:
          'https://imageproxy.wolt.com/menu/menu-images/5f8c114a67be99e0ce74556e/f2c4be04-2e33-11eb-8616-760598b4960e_3820_andiamo_taverna_foto_jedal_81.jpeg',
      },
      {
        id: 'p4',
        name: 'Chocolate cheesecake',
        description:
          'Chocolate variant of the famous cheesecake 100 g / contains: 1, 3, 7',
        price: 4.6,
        image:
          'https://imageproxy.wolt.com/menu/menu-images/5f8c114a67be99e0ce74556e/1552f7d8-2e34-11eb-a9fd-f6112158adca_3820_andiamo_taverna_foto_jedal_83.jpeg',
      },
      {
        id: 'p5',
        name: 'Pancakes',
        description:
          'With Nuttella, homemade whipped cream and almonds 150 g / contains: 1, 3, 7, 8',
        price: 5,
        image:
          'https://imageproxy.wolt.com/menu/menu-images/5f8c114a67be99e0ce74556e/405fa4cc-136c-11eb-bf8d-d6e72c1adee4_3820_andiamo_taverna_foto_jedal_78.jpeg',
      },
    ],
  },
  {
    id: '3',
    name: 'Drinks',
    products: [
      {
        id: 'p5',
        name: 'Whiskey Smash',
        description:
          'Roe & Co Irish Whiskey, Noilly Prat, Mint & Greens Syrup, Orange Bitters',
        price: 5,
      },
      {
        id: 'p6',
        name: 'Aviation',
        description:
          'Boatyard Irish Double Gin, Créme De Violette, Luxardo Maraschino, Lemon',
        price: 6.5,
      },
      {
        id: 'p7',
        name: 'Hurricane',
        description:
          'Bacardi Carta Blanca, Bacardi Cuatro, Appleton Estate, Lemon, Hudson Fashionola',
        price: 5,
      },
    ],
  },
]

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

export const Categories = () => {
  return (
    <Container maxW="container.sm">
      <Stack spacing="12" mt="8">
        {CATEGORIES.map((cat) => (
          <Box key={cat.id}>
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
