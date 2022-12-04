import { Grid, Stack } from '@chakra-ui/react'

const Headers = () => {
  return <Grid></Grid>
}

const Row = () => {
  return <Grid></Grid>
}

export const EmployeeTable = () => {
  return (
    <Stack>
      <Headers />
      {[1, 2, 3, 4].map((key) => (
        <Row key={key} />
      ))}
    </Stack>
  )
}
