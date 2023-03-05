import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Layout from '../component/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'var(--ember)',
        headings: {
          fontFamily: 'var(--ember-display)'
        },
        spacing: {
          xs: 4,
          sm: 8,
          md: 16,
          lg: 24,
          xl: 32
        }
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}

export default App
