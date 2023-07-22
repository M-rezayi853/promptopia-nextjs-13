import '@styles/globals.css'
import { FC, ReactNode } from 'react'

export const metadata = {
  title: 'پرمتوپیا',
  description: 'کشف و به اشتراک گذاری درخواست های هوش مصنوعی',
}

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <html lang='fa'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
