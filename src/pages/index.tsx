import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Title
} from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { KeyboardEvent, useRef } from 'react'
import colors from '../color'
import { categories } from '../data'

const App = () => {
  const ref = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const search = () => {
    if (ref.current) {
      router.push(`https://www.google.com/search?q=${ref.current.value}`)
    }
  }

  return (
    <Stack spacing={36}>
      <Box bg={colors.sage.hex} w="100%" py="5rem">
        <Container>
          <Stack>
            <Title order={1} color={colors.ink.hex}>
              Amazon Pharmacy Data Services
            </Title>
            <Text
              style={{
                fontSize: '1.1rem'
              }}
              color={colors.jade.hex}
            >
              The portal to view, manage and consume datasets.
            </Text>

            <Group align="flex-end" w="min(max(66%, 30rem), 90vw)" mt="2rem">
              <Input
                ref={ref}
                size="md"
                placeholder="Name or ID of the dataset"
                icon={<IconSearch size={16} />}
                style={{
                  flexGrow: 1,
                  boxShadow: '0 2px 4px hsl(0deg 0% 64% / 10%)'
                }}
                onKeyUp={(e: KeyboardEvent<Element>) => {
                  if (e.key === 'Enter') {
                    search()
                  }
                }}
              />
              <Button
                size="md"
                sx={{
                  'background': colors.summer.hex,
                  ':hover': {
                    background: colors.summer.hex,
                    opacity: 0.8
                  }
                }}
                onClick={search}
              >
                Search
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
      {/* <Divider my="sm" /> */}
      <Container>
        <Stack spacing={'xl'}>
          {categories.map((c, i) => {
            return (
              <Stack key={i}>
                <Title order={3} color={colors.ink.hex}>
                  {c.name}
                </Title>
                <SimpleGrid
                  breakpoints={[
                    { maxWidth: 1480, cols: 3, spacing: 'md' },
                    { maxWidth: 980, cols: 2, spacing: 'sm' },
                    { maxWidth: 600, cols: 1, spacing: 'sm' }
                  ]}
                  cols={3}
                >
                  {c.data.map((cat, i) => {
                    return (
                      <Card
                        p="md"
                        radius="sm"
                        withBorder
                        miw={120}
                        key={i}
                        component={'a'}
                        href={cat.url}
                        sx={theme => ({
                          transition: 'all 0.2s',
                          [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
                            ':hover': {
                              transform: 'scale(1.02)',
                              boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.05)'
                            }
                          }
                        })}
                      >
                        <Stack h={'100%'}>
                          <Title order={5}>{cat.title}</Title>
                          <Text style={{ flexGrow: 1 }}>
                            {cat.description ?? ''}
                          </Text>
                        </Stack>
                      </Card>
                    )
                  })}
                </SimpleGrid>
              </Stack>
            )
          })}
        </Stack>
      </Container>
    </Stack>
  )
}

export default App
