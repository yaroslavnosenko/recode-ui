import { Heading, Text } from '@chakra-ui/react'

import { EditMerchantForm, Layout, LayoutContainer } from 'components/app'

export const Start = () => {
  return (
    <Layout>
      <LayoutContainer py="8">
        <Heading>Hello!</Heading>
        <Text opacity="0.5" mb="8">
          Welcome to Recode QR Code Menu. Please finish your merchant details to
          get started.
        </Text>
        <EditMerchantForm />
      </LayoutContainer>
    </Layout>
  )
}
