import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/react'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
    },
    colors: {
      brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
      },
    },
    fonts: {
      heading: `'Outfit', sans-serif`,
      body: `'Outfit', sans-serif`,
    },
  },
  baseTheme
)
