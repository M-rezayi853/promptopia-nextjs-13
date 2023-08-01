import '@styles/globals.css'
import { FC, ReactNode } from 'react'
import localFont from 'next/font/local'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: 'پرامتوپیا',
  description: 'کشف و به اشتراک گذاری درخواست های هوش مصنوعی',
}

interface Props {
  children: ReactNode
}

const iranYekan = localFont({
  src: [
    {
      path: './fonts/woff2/IRANYekanWebExtraBlack.woff2',
      weight: '950',
    },
    {
      path: './fonts/woff2/IRANYekanWebBlack.woff2',
      weight: '900',
    },
    {
      path: './fonts/woff2/IRANYekanWebExtraBold.woff2',
      weight: '800',
    },
    {
      path: './fonts/woff2/IRANYekanWebBold.woff2',
      weight: '700',
    },
    {
      path: './fonts/woff2/IRANYekanWebMedium.woff2',
      weight: '500',
    },
    {
      path: './fonts/woff2/IRANYekanWebRegular.woff2',
      weight: '400',
    },
    {
      path: './fonts/woff2/IRANYekanWebLight.woff2',
      weight: '300',
    },
    {
      path: './fonts/woff2/IRANYekanWebThin.woff2',
      weight: '100',
    },
    {
      path: './fonts/woff/IRANYekanWebExtraBlack.woff',
      weight: '950',
    },
    {
      path: './fonts/woff/IRANYekanWebBlack.woff',
      weight: '900',
    },
    {
      path: './fonts/woff/IRANYekanWebExtraBold.woff',
      weight: '800',
    },
    {
      path: './fonts/woff/IRANYekanWebBold.woff',
      weight: '700',
    },
    {
      path: './fonts/woff/IRANYekanWebMedium.woff',
      weight: '500',
    },
    {
      path: './fonts/woff/IRANYekanWebRegular.woff',
      weight: '400',
    },
    {
      path: './fonts/woff/IRANYekanWebLight.woff',
      weight: '300',
    },
    {
      path: './fonts/woff/IRANYekanWebThin.woff',
      weight: '100',
    },
  ],
  variable: '--font-iranYekan',
})

const RootLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <html lang='fa' dir='rtl' className={`${iranYekan.variable}`}>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
