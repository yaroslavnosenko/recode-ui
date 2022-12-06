import {
  Box,
  Grid,
  Heading,
  IconButton,
  useColorModeValue,
  Text,
  HStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'
import { FiEyeOff, FiMoreVertical, FiMove } from 'react-icons/fi'

import { Product } from 'types'
import { reorder } from 'utils'

const data: Product[] = [
  {
    id: 'prod1',
    name: 'Vanilla ice cream',
    price: 2.5,
    photo: 'http://www.encoretheclub.sk/img/lo5.jpg',
    description: 'Vanilla ice cream with chocolate filling',
  },
  {
    id: 'prod2',
    name: 'Berry ice cream',
    price: 5.99,
    description: 'Natural ice cream made from berries',
  },
  {
    id: 'prod3',
    name: 'Brownie with raspberries',
    price: 16.7,
    photo: 'http://www.encoretheclub.sk/img/lo4.jpg',
  },
  { id: 'prod4', name: 'Cheesecake', price: 19.9 },
]

interface RowProps {
  product: Product
  index: number
}

const template = 'auto 1fr 10rem auto'

const Row = ({ product, index }: RowProps) => {
  const bg = useColorModeValue('gray.100', 'dark.800')
  return (
    <Draggable draggableId={product.id} index={index}>
      {(provided) => (
        <Box
          py="2"
          minW="xl"
          boxSizing="content-box"
          px={{ base: 6, lg: 12 }}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Grid
            borderWidth={1}
            bg={bg}
            pr="4"
            borderRadius="md"
            templateColumns={template}
            alignItems="center"
            columnGap={6}
            minW="xl"
          >
            <Box
              boxSize={20}
              rounded="md"
              bgSize="cover"
              bgPos="center"
              bgColor="teal.500"
              borderRightRadius={0}
              bgImage={'url(' + product.photo + ')'}
            />
            <Box>
              <Heading noOfLines={1} size="sm">
                {product.name}
              </Heading>
              <Text noOfLines={1} opacity="0.5">
                {product.description}
              </Text>
            </Box>
            <Text>{product.price} EUR</Text>
            <HStack spacing={1}>
              <IconButton
                bg="transparent"
                aria-label="hide"
                icon={<FiEyeOff />}
              />
              <IconButton
                bg="transparent"
                aria-label="more"
                icon={<FiMoreVertical />}
              />
              <IconButton
                bg="transparent"
                aria-label="move"
                icon={<FiMove />}
                {...provided.dragHandleProps}
              />
            </HStack>
          </Grid>
        </Box>
      )}
    </Draggable>
  )
}

export const ProductTable = () => {
  const [items, setItems] = useState<Product[]>(data)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }
    const quotes = reorder(items, result.source.index, result.destination.index)
    setItems(quotes)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((prod, index) => (
              <Row key={prod.id} product={prod} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  )
}
