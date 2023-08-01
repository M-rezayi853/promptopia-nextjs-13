import { Dispatch, FC, FormEvent, SetStateAction } from 'react'
import Link from 'next/link'

import { Post } from '@app/create-prompt/page'

interface Props {
  type: string
  post: Post
  setPost: Dispatch<SetStateAction<Post>>
  submitting: boolean
  handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void>
}

const Form: FC<Props> = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}): JSX.Element => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-right'>
        <span className='blue_gradient'>{type} پست</span>
      </h1>

      <p className='dese text-right max-w-md mt-4'>
        {type} و دستورات شگفت انگیز را با جهان به اشتراک بگذارید، و اجازه دهید
        تخیل شما با هر پلتفرم مجهز به هوش مصنوعی اجرا شود.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex-col gap-7 glassmorphism flex'
      >
        <label>
          <span className='font-semibold text-base text-gray-700'>
            درخواست هوش مصنوعی شما
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='درخواست خود را اینجا بنویسید...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-semibold text-base text-gray-700'>
            برچسب بزنید{' '}
            <span className='font-normal'>(#محصول، #توسعه_وب، #ایده)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#برچسب بزنید'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={'/'} className='text-gray-500 text-sm'>
            لغو
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
