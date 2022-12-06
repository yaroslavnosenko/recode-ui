import {
  SimpleGrid,
  AspectRatio,
  HStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { QRCode } from 'react-qrcode'

const Item = () => {
  const bg = useColorModeValue('gray.100', 'dark.800')
  const color = useColorModeValue('dark.900', '#ffffff')
  return (
    <HStack borderWidth={1} bg={bg} p="4" borderRadius="md" spacing={6}>
      <AspectRatio w="20" ratio={1}>
        <QRCode
          margin={0}
          value="adfksdflsdjfsdlkfjlksdjflksdjflksdjflksdjfiejflsdkjflsiefjs"
          color={{ dark: color, light: '#ffffff00' }}
        />
      </AspectRatio>
      <Box>
        <Heading noOfLines={1} size="md">
          Table 1
        </Heading>
        <Text noOfLines={1} opacity="0.5">
          Delivered
        </Text>
      </Box>
    </HStack>
  )
}

export const PlacementList = () => {
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={6}>
      {[0, 1, 2, 3].map((key) => (
        <Item key={key} />
      ))}
    </SimpleGrid>
  )
}
