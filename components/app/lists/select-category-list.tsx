import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

interface ItemProps {
  cat: Category
  onSelect: (id: string) => void
}

const Item = ({ cat, onSelect }: ItemProps) => {
  const bg = useColorModeValue('gray.100', 'dark.800')
  return (
    <Box
      cursor="pointer"
      borderWidth={1}
      bg={bg}
      p="4"
      borderRadius="md"
      onClick={() => onSelect(cat.id)}
    >
      <Heading noOfLines={1} size="sm">
        {cat.name}
      </Heading>
      <Text noOfLines={1} opacity="0.5">
        {cat.products} Products
      </Text>
    </Box>
  )
}

interface Category {
  id: string
  name: string
  products: number
}

interface Props {
  onSelect: (id: string) => void
}

export const SelectCategoryList = ({ onSelect }: Props) => {
  const [items] = useState<Category[]>([
    { id: '1', name: 'Milkshakes', products: 8 },
    { id: '2', name: 'Coffee', products: 12 },
    { id: '3', name: 'Drinks', products: 5 },
    { id: '4', name: 'Deserts', products: 3 },
  ])
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={6}>
      {items.map((cat) => (
        <Item cat={cat} key={cat.id} onSelect={onSelect} />
      ))}
    </SimpleGrid>
  )
}
