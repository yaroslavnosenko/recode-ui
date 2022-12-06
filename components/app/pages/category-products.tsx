import { Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { Layout, LayoutContainer } from 'components/app'
import { APP_ROUTES } from 'configs'

export const CategoryProducts = () => {
  return (
    <Layout>
      <LayoutContainer py="6">
        <Heading noOfLines={1}>
          <Text as="span" fontWeight="normal">
            <Link to={APP_ROUTES.PRODUCTS}>Products</Link>
            {' / '}
          </Text>
          Milkshakes
        </Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
      </LayoutContainer>
    </Layout>
  )
}
