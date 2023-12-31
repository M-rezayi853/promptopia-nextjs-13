'use client'

import { FormEvent, useState, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter, useSearchParams } from 'next/navigation'

import Form from '@components/Form'

interface Props {}

export interface Post {
  prompt: string
  tag: string
}

const UpdatePromptPage: NextPage<Props> = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState<Post>({
    prompt: '',
    tag: '',
  })

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`)

      const data = await response.json()

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      })
    }

    if (promptId) getPromptDetails()
  }, [promptId])

  const updatePrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitting(true)

    if (!promptId) return alert('Prompt ID not found')

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
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
      type='به روز رسانی'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export default UpdatePromptPage
