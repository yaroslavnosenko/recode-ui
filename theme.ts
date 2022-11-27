import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'OutfitVariable', sans-serif`,
    body: `'OutfitVariable', sans-serif`,
  },
  styles: { global: { body: { bg: 'gray.50', color: 'gray.900' } } },
})
