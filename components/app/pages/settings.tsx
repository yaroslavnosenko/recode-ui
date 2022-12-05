import { Heading, Text } from '@chakra-ui/react'

import { EditMerchantForm, Layout, LayoutContainer } from 'components/app'

export const Settings = () => {
  return (
    <Layout>
      <LayoutContainer py="6">
        <Heading>Settings</Heading>
        <Text opacity="0.5" mb="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae hic quas similique rem dolorem.
        </Text>
        <EditMerchantForm />
      </LayoutContainer>
    </Layout>
  )
}
