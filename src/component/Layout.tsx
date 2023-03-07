import { Box, Group, Tabs } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { IconExternalLink } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import colors from '../color'
import { ClassName } from '../font'

export default function Layout(props: { children: ReactNode }) {
  const router = useRouter()

  return (
    <div className={`${ClassName}`}>
      <Group
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          background: 'white',
          zIndex: 100,
          color: colors.concrete.hex
        }}
      >
        <Box
          component="a"
          href="https://pharmacy.amazon.com"
          mx="2rem"
          sx={{
            backgroundImage:
              'url(https://assets.prod.apex.wolfgang.a2z.com/assets/ap-logo-full-color.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '185px',
            height: '28px',
            my: 'auto'
          }}
        />
        <Tabs
          value={router.asPath}
          onTabChange={val => router.push(val as string)}
          variant="outline"
          radius="xs"
          h="4rem"
          style={{
            flexGrow: 1
          }}
          styles={{
            root: {
              height: '100%'
            },

            tab: {
              'color': colors.ink.hex,
              'border': 'none',
              'borderBottom': `4px solid transparent`,
              'fontSize': '1rem',
              '&[data-active]': {
                borderColor: colors.teal.hex
              }
            },
            tabsList: {
              height: '100%',
              borderBottom: 'none'
            }
          }}
        >
          <Tabs.List pr="1rem">
            {/* <Tabs.Tab value="/">
              <Box
                mx="2rem"
                sx={{
                  backgroundImage:
                    'url(https://assets.prod.apex.wolfgang.a2z.com/assets/ap-logo-full-color.svg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  width: '185px',
                  height: '28px',
                  my: 'auto'
                }}
              />
            </Tabs.Tab> */}
            <Tabs.Tab value="/">Homepage</Tabs.Tab>
            <Tabs.Tab value="/dataset">Dataset</Tabs.Tab>
            <Tabs.Tab value="/poap">POAP</Tabs.Tab>
            <Tabs.Tab value="/permissions">Permissions</Tabs.Tab>
            <Tabs.Tab
              value="https://w.amazon.com/bin/view/AP_DAPP/Engagement_model/#HOncallTickets28SIM-T29"
              ml="auto"
              rightSection={<IconExternalLink size={14} />}
            >
              Contact
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Group>

      <Box component="main" mb="xl">
        {props.children}
      </Box>
    </div>
  )
}
