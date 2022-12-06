import {
  Box,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'
import { FiMoreVertical, FiMove } from 'react-icons/fi'

import { reorder } from 'utils'

interface ItemProps {
  cat: Category
  index: number
}

const Item = ({ cat, index }: ItemProps) => {
  const bg = useColorModeValue('gray.100', 'dark.800')
  return (
    <Draggable draggableId={cat.id} index={index}>
      {(provided) => (
        <Box py="2" ref={provided.innerRef} {...provided.draggableProps}>
          <HStack borderWidth={1} bg={bg} p="2" borderRadius="md" spacing={4}>
            <IconButton
              bg="transparent"
              aria-label="move"
              icon={<FiMove />}
              {...provided.dragHandleProps}
            />
            <Box flex={1}>
              <Heading noOfLines={1} size="sm" fontWeight="500" lineHeight={10}>
                {cat.name}
              </Heading>
            </Box>
            <IconButton
              bg="transparent"
              aria-label="more"
              icon={<FiMoreVertical />}
            />
          </HStack>
        </Box>
      )}
    </Draggable>
  )
}

interface Category {
  id: string
  name: string
}

export const CategoryList = () => {
  const [items, setItems] = useState<Category[]>([
    { id: '1', name: 'Milkshakes' },
    { id: '2', name: 'Coffee' },
    { id: '3', name: 'Drinks' },
    { id: '4', name: 'Deserts' },
  ])

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
            {items.map((cat, index) => (
              <Item key={cat.id} cat={cat} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  )
}
