'use client'

import { FormEvent, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import Form from '@components/Form'

interface Props {}

export interface Post {
  prompt: string
  tag: string
}

const CreatePromptPage: NextPage<Props> = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState<Post>({
    prompt: '',
    tag: '',
  })

  const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitting(true)

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form
      type='ایجاد'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePromptPage
