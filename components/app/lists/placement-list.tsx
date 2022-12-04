import {
  SimpleGrid,
  AspectRatio,
  HStack,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'
import QRCode from 'react-qr-code'

const Item = () => {
  return (
    <HStack borderWidth="1px" p="4" borderRadius="md" spacing={6}>
      <AspectRatio w="24" ratio={1}>
        <QRCode size={96} value="asdkjlasjdlasjdlsj" />
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
