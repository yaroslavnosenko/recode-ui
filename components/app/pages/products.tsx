import { Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { Layout, LayoutContainer, SelectCategoryList } from 'components/app'
import { APP_ROUTES } from 'configs'

export const Products = () => {
  const navigate = useNavigate()

  const onSelect = (categoryId: string) =>
    navigate(APP_ROUTES.CATEGORY_PRODUCTS.replace(':category', categoryId))

  return (
    <Layout>
      <LayoutContainer py="6">
        <Heading>Products</Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <SelectCategoryList onSelect={onSelect} />
      </LayoutContainer>
    </Layout>
  )
}
