import { FC } from 'react'
import Image from 'next/image'

interface Props {}

const loading: FC<Props> = (): JSX.Element => {
  return (
    <div className='w-full flex-center'>
      <Image
        src={'/assets/icons/loader.svg'}
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
    </div>
  )
}

export default loading
