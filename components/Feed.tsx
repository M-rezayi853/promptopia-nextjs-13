'use client'

import { FC, useState, useEffect, ChangeEventHandler } from 'react'

import PromptCard from './PromptCard'
import { Post } from '@app/types/types'

interface Props {}

export interface ListCardPrompts {
  data?: Post[]
  handleEdit?(): void
  handleDelete?(): void
  handleTagClick?(tag: string): void
}

const PromptCardList: FC<ListCardPrompts> = ({
  data,
  handleTagClick,
}): JSX.Element => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed: FC<Props> = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([])

  // Search states
  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')

      const data = await response.json()

      setPosts(data)
    }

    fetchPosts()
  }, [])

  const filterPrompts = (textSearch) => {
    const regex = new RegExp(textSearch, 'i') // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    )
  }

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value)
        setSearchedResults(searchResult)
      }, 500)
    )
  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName)

    const searchResult = filterPrompts(tagName)
    setSearchedResults(searchResult)
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='یک برچسب یا یک نام کاربری را جستجو کنید'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* All prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  )
}

export default Feed
