import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'OutfitVariable', sans-serif`,
    body: `'OutfitVariable', sans-serif`,
  },
  styles: {
    global: {
      html: { '-webkit-font-smoothing': 'auto' },
      body: { bg: 'gray.50', color: 'gray.900' },
    },
  },
})
