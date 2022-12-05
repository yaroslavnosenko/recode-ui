import { AspectRatio, Box, BoxProps } from '@chakra-ui/react'

export const Phone = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      maxW={288}
      mx="auto"
      bgGradient="linear(to-r, teal.500, teal.500, yellow.500)"
      rounded="2xl"
      p="4px"
      {...props}
    >
      <AspectRatio rounded="2xl" overflow="hidden" ratio={288 / 568}>
        {children}
      </AspectRatio>
    </Box>
  )
}
