import '@/css/tailwind.css'
import '@/css/prism.css'
import PlausibleProvider from 'next-plausible'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="elmghari.com">
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Analytics />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </PlausibleProvider>
  )
}
