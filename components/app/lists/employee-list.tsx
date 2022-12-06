import {
  SimpleGrid,
  HStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Avatar,
  IconButton,
} from '@chakra-ui/react'
import { FiMoreVertical } from 'react-icons/fi'

interface Props {
  name: string
}

const Item = ({ name }: Props) => {
  const bg = useColorModeValue('gray.100', 'dark.800')
  return (
    <HStack borderWidth={1} bg={bg} p="4" borderRadius="md" spacing={4}>
      <Avatar name={name} />
      <Box flex={1}>
        <Heading noOfLines={1} size="sm">
          {name}
        </Heading>
        <Text noOfLines={1} opacity="0.5">
          yaroslav_nosenko
        </Text>
      </Box>
      <IconButton
        bg="transparent"
        aria-label="more"
        icon={<FiMoreVertical />}
      />
    </HStack>
  )
}

export const EmployeeList = () => {
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={6}>
      {['Nicole Price', 'Willie Mendoza', 'Eric Cooper', 'Perry Armstrong'].map(
        (user) => (
          <Item key={user} name={user} />
        )
      )}
    </SimpleGrid>
  )
}
