import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
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
        bg: mode('white', '#131417')(props),
      },
      body: {
        color: mode('gray.900', 'gray.50')(props),
        bg: mode('white', '#131417')(props),
      },
    }),
  },
  components: {
    Drawer: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: mode('white', '#131417')(props),
        },
      }),
    },
  },
})
