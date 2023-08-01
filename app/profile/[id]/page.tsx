'use client'

import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useSearchParams, useParams } from 'next/navigation'

import Profile from '@components/Profile'

interface Props {}

const UserProfilePage: NextPage<Props> = () => {
  const searchParams = useSearchParams()
  const userName = searchParams.get('name')
  const params = useParams()

  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)

      const data = await response.json()

      setUserPosts(data)
    }

    if (params?.id) fetchPosts()
  }, [params.id])

  return (
    <Profile
      name={userName}
      desc={`به صفحه نمایه شخصی شده ${userName} خوش آمدید. درخواست‌های استثنایی ${userName} را کاوش کنید و از قدرت تخیل آنها الهام بگیرید.`}
      data={userPosts}
    />
  )
}

export default UserProfilePage
