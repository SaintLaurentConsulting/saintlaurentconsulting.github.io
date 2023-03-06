import { Tabs } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import colors from '../color'
import { ClassName } from '../font'

export default function Layout(props: { children: ReactNode }) {
  const router = useRouter()

  return (
    <div className={`${ClassName}`}>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          height: '4rem',
          left: 0,
          right: 0,
          background: colors.teal.hex,
          zIndex: 100,
          color: colors.concrete.hex
        }}
      >
        <Tabs
          value={router.asPath}
          onTabChange={val => router.push(val as string)}
          variant="outline"
          radius="xs"
          styles={{
            root: {
              height: '100%'
            },
            tab: {
              color: colors.dust.hex,
              border: 'none',
              borderBottom: '4px solid transparent',
              fontSize: '1rem'
            },
            tabsList: {
              height: '100%'
            }
          }}
        >
          <Tabs.List pr={'1rem'}>
            <Tabs.Tab value="/">Homepage</Tabs.Tab>
            <Tabs.Tab value="/explore">Explore</Tabs.Tab>
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
      </nav>
      <main>{props.children}</main>
    </div>
  )
}
