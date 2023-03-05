import { Center, Title } from '@mantine/core'
import colors from '../color'

export default function WIP() {
  return (
    <Center w="100%" mih="20vh">
      <Title order={2} color={colors.jade.hex}>
        Working in progress
      </Title>
    </Center>
  )
}
