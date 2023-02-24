// import 'virtual:windi.css'
// import './index.css'

import {
  Accordion,
  Badge,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title
} from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { categories } from './data'

const App = () => {
  return (
    <Container>
      <div
        style={{
          padding: '1rem'
        }}
      >
        <Title order={1}>Portal</Title>
      </div>
      <Accordion defaultValue={categories[0].name}>
        {categories.map(c => {
          return (
            <Accordion.Item value={c.name}>
              <Accordion.Control>{c.name}</Accordion.Control>
              <Accordion.Panel>
                <SimpleGrid
                  breakpoints={[
                    { maxWidth: 1480, cols: 3, spacing: 'md' },
                    { maxWidth: 980, cols: 2, spacing: 'sm' },
                    { maxWidth: 600, cols: 1, spacing: 'sm' }
                  ]}
                  cols={3}
                  mt={'0.5rem'}
                >
                  {c.data.map(i => {
                    return (
                      <Card p="md" radius="sm" withBorder miw={120}>
                        <Stack h={'100%'}>
                          <Title order={5}>{i.title}</Title>
                          <Text style={{ flexGrow: 1 }}>
                            {i.description ?? ''}
                          </Text>
                          <Button
                            component="a"
                            href={i.url}
                            variant="default"
                            // color="dark"
                            radius="md"
                            rightIcon={<IconArrowRight size={16} />}
                          >
                            View
                          </Button>
                        </Stack>
                      </Card>
                    )
                  })}
                </SimpleGrid>
              </Accordion.Panel>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </Container>
  )
}

export default App
