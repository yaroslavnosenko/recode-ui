import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  colors: {
    dark: {
      800: '#1b1f25',
      900: '#121418',
    },
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'system',
    cssVarPrefix: 'recode',
  },
  fonts: {
    heading: `'OutfitVariable', sans-serif`,
    body: `'OutfitVariable', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      html: {
        WebkitFontSmoothing: 'auto',
        bg: mode('white', 'dark.900')(props),
      },
      body: {
        color: mode('gray.900', 'gray.50')(props),
        bg: mode('white', 'dark.900')(props),
      },
    }),
  },
  components: {
    Drawer: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: mode('white', 'dark.900')(props),
        },
      }),
    },
    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: mode('white', 'dark.900')(props),
        },
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: 500,
      },
    },
    Container: {
      baseStyle: {
        px: 6,
      },
    },
  },
})
