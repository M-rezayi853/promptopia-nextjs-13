'use client'

import { FC } from 'react'

import PromptCard from './PromptCard'
import { Post } from '@app/types/types'

interface Props {
  name: string
  desc: string
  data: Post[]
  handleEdit?(post: Post): void
  handleDelete?(post: Post): void
}

const Profile: FC<Props> = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}): JSX.Element => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-right'>
        <span className='blue_gradient'>پروفایل {name}</span>
      </h1>

      <p className='desc text-right'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data &&
          data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
      </div>
    </section>
  )
}

export default Profile
