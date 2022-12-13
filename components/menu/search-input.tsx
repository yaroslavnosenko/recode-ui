import {
  Box,
  Container,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

export const SearchInput = () => {
  const [value, setValue] = useState<string>('')
  return (
    <Box>
      <Container maxW="container.sm">
        <InputGroup variant="filled">
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} />
          </InputLeftElement>
          <Input
            placeholder="Search in menu..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          {value && (
            <InputRightElement cursor="pointer" onClick={() => setValue('')}>
              <Icon as={FiX} />
            </InputRightElement>
          )}
        </InputGroup>
      </Container>
    </Box>
  )
}
