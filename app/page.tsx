import { NextPage } from 'next'

import Feed from '@components/Feed'

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        کشف و به اشتراک بگذارید
        <br />
        <span className='orange_gradient'>درخواست های مجهز به هوش مصنوعی</span>
      </h1>

      <p className='desc text-center'>
        پرمتوپیا یک ابزار منبع باز هوش مصنوعی برای دنیای مدرن برای کشف، ایجاد و
        به اشتراک گذاری اعلان های خلاقانه است.
      </p>

      <Feed />
    </section>
  )
}

export default HomePage
