import {
  SimpleGrid,
  HStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Avatar,
  IconButton,
  Skeleton,
} from '@chakra-ui/react'
import { FiMoreVertical } from 'react-icons/fi'

import { Employee } from 'types'

interface ItemProps {
  employee: Employee
  onSelect: (employee: Employee) => void
}

const Item = ({ employee, onSelect }: ItemProps) => {
  const bg = useColorModeValue('gray.100', 'dark.800')
  return (
    <HStack borderWidth={1} bg={bg} p="4" borderRadius="md" spacing={4}>
      <Avatar name={employee.name} />
      <Box flex={1}>
        <Heading noOfLines={1} size="sm">
          {employee.name}
        </Heading>
        <Text noOfLines={1} opacity="0.5">
          {employee.username}
        </Text>
      </Box>
      <IconButton
        bg="transparent"
        aria-label="more"
        icon={<FiMoreVertical />}
        onClick={() => onSelect(employee)}
      />
    </HStack>
  )
}

interface ListProps {
  employees: Employee[] | undefined
  onSelect: (employee: Employee) => void
}

export const EmployeeList = ({ employees, onSelect }: ListProps) => {
  return !employees ? (
    <Loading />
  ) : employees.length === 0 ? (
    <EmptyState />
  ) : (
    <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={6}>
      {employees.map((employee) => (
        <Item key={employee.id} employee={employee} onSelect={onSelect} />
      ))}
    </SimpleGrid>
  )
}

const Loading = () => {
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={6}>
      {[0, 1, 2].map((key) => (
        <Skeleton key={key} />
      ))}
    </SimpleGrid>
  )
}

const EmptyState = () => {
  return <Box>Empty</Box>
}
