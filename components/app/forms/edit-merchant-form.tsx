import { gql, useMutation, useApolloClient, useQuery } from '@apollo/client'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useToken } from 'hooks'
import { USER_QUERY } from 'queries'
import {
  Merchants_Set_Input,
  Mutation_RootInsert_Merchants_OneArgs,
  Query_Root,
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
  const { data, loading } = useQuery<Query_Root>(USER_QUERY, {
    variables: { id },
  })
  setValue('userId', id)
  useEffect(() => {
    setValue('name', data?.users_by_pk?.merchant?.name)
    setValue('slug', data?.users_by_pk?.merchant?.slug)
    setValue('lang', data?.users_by_pk?.merchant?.lang)
    setValue('currency', data?.users_by_pk?.merchant?.currency)
    setValue('address', data?.users_by_pk?.merchant?.address)
    setValue('phone', data?.users_by_pk?.merchant?.phone)
    setValue('wifi', data?.users_by_pk?.merchant?.wifi)
  }, [data, setValue])

  const [save] =
    useMutation<Mutation_RootInsert_Merchants_OneArgs>(MERCHANT_MUTATION)

  const onSave = (input: FormData) =>
    save({ variables: { input } }).finally(() =>
      client.refetchQueries({ include: [USER_QUERY] })
    )

  return (
    <Box as="form" onSubmit={handleSubmit(onSave)}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
        <Box>
          <FormControl isRequired isDisabled={loading}>
            <FormLabel mb="0">Display name</FormLabel>
            <Input
              variant="flushed"
              placeholder="Merchant"
              {...register('name')}
            />
          </FormControl>

          <FormControl mt="6" isRequired>
            <FormLabel mb="0">Unique name</FormLabel>
            <Input
              variant="flushed"
              placeholder="your_bussiness"
              {...register('slug')}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormLabel mb="0">Language</FormLabel>
            <Select
              variant="flushed"
              placeholder="Language"
              {...register('lang')}
            >
              <option value="sk">Slovenský</option>
              <option value="en">English</option>
            </Select>
          </FormControl>

          <FormControl mt="6" isRequired>
            <FormLabel mb="0">Currency</FormLabel>
            <Select
              variant="flushed"
              placeholder="Currency"
              {...register('currency')}
            >
              <option value="EUR">EUR - Euro</option>
              <option value="USD">USD - US Dollar</option>
            </Select>
          </FormControl>
        </Box>
      </SimpleGrid>

      <FormControl mt="6">
        <FormLabel mb="0">Address</FormLabel>
        <Input
          variant="flushed"
          placeholder="Address"
          {...register('address')}
        />
      </FormControl>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }} mt="6">
        <FormControl>
          <FormLabel mb="0">Phone</FormLabel>
          <Input variant="flushed" placeholder="Phone" {...register('phone')} />
        </FormControl>

        <FormControl>
          <FormLabel mb="0">Wifi Password</FormLabel>
          <Input
            variant="flushed"
            placeholder="********"
            {...register('wifi')}
          />
        </FormControl>
      </SimpleGrid>

      <Button mt={6} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  )
}
