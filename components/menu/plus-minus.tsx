import { HStack, IconButton, StackProps, Text } from '@chakra-ui/react'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface Props extends StackProps {
  quantity: number
  onPlus: () => void
  onMinus: () => void
}

export const PlusMinus = ({ onMinus, onPlus, quantity, ...other }: Props) => {
  return (
    <HStack spacing={0} {...other}>
      <IconButton
        onClick={(event) => {
          event.stopPropagation()
          onMinus()
        }}
        aria-label="minus"
        icon={<FiMinus strokeWidth={3} />}
      />
      <Text textAlign="center" minW="10">
        {quantity}
      </Text>
      <IconButton
        onClick={(event) => {
          event.stopPropagation()
          onPlus()
        }}
        aria-label="minus"
        icon={<FiPlus strokeWidth={3} />}
      />
    </HStack>
  )
}
