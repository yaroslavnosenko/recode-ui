import { gql, useMutation, useApolloClient } from '@apollo/client'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { useToken } from 'hooks'
import { USER_QUERY } from 'queries'
import {
  Merchants_Set_Input,
  Mutation_RootInsert_Merchants_OneArgs,
} from 'types'

type FormData = Merchants_Set_Input

const MERCHANT_MUTATION = gql`
  mutation ($input: merchants_insert_input!) {
    insert_merchants_one(
      object: $input
      on_conflict: {
        constraint: merchants_userId_key
        update_columns: [name, slug, lang, currency, phone, address, wifi]
      }
    ) {
      id
    }
  }
`

export const EditMerchantForm = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>()

  const client = useApolloClient()

  const { id } = useToken()
  setValue('userId', id)

  const [save] =
    useMutation<Mutation_RootInsert_Merchants_OneArgs>(MERCHANT_MUTATION)

  const onSave = (input: FormData) =>
    save({ variables: { input } }).finally(() =>
      client.refetchQueries({ include: [USER_QUERY] })
    )

  return (
    <Box as="form" onSubmit={handleSubmit(onSave)}>
      <SimpleGrid columns={[1, 1, 2]} gap={[4, 4, 8]}>
        <Box>
          <FormControl isRequired>
            <FormLabel>Display name</FormLabel>
            <Input placeholder="Merchant" {...register('name')} />
          </FormControl>

          <FormControl mt="4" isRequired>
            <FormLabel>Unique name</FormLabel>
            <Input placeholder="your_bussiness" {...register('slug')} />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormLabel>Language</FormLabel>
            <Select placeholder="Language" {...register('lang')}>
              <option value="sk">Slovenský</option>
              <option value="en">English</option>
            </Select>
          </FormControl>

          <FormControl mt="4" isRequired>
            <FormLabel>Currency</FormLabel>
            <Select placeholder="Currency" {...register('currency')}>
              <option value="EUR">EUR - Euro</option>
              <option value="USD">USD - US Dollar</option>
            </Select>
          </FormControl>
        </Box>
      </SimpleGrid>

      <FormControl mt="4">
        <FormLabel>Address</FormLabel>
        <Input placeholder="Address" {...register('address')} />
      </FormControl>

      <SimpleGrid columns={[1, 1, 2]} gap={[4, 4, 8]} mt="4">
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input placeholder="Phone" {...register('phone')} />
        </FormControl>

        <FormControl>
          <FormLabel>Wifi Password</FormLabel>
          <Input placeholder="********" {...register('wifi')} />
        </FormControl>
      </SimpleGrid>

      <Button mt={6} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  )
}
