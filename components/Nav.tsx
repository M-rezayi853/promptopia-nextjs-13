'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

interface Props {}

interface Provider {
  id: string
  name: string
}

const Nav: FC<Props> = (): JSX.Element => {
  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setUpProviders()
  }, [session])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href={'/'} className='flex gap-2 flex-center'>
        <Image
          src={'/assets/images/logo.svg'}
          alt='Promptopia Logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>پرامتوپیا</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href={'/create-prompt'} className='black_btn'>
              ایجاد پست
            </Link>

            <button
              type='button'
              onClick={() => signOut()}
              className='outline_btn'
            >
              خروج از حساب
            </button>

            <Link href={'/profile'}>
              <Image
                src={session?.user.image}
                alt='profile'
                width={37}
                height={37}
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: Provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  ورود
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              alt='profile'
              width={37}
              height={37}
              className='rounded-full'
              onClick={() => {
                setToggleDropdown((prev) => !prev)
              }}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href={'/profile'}
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  پروفایل من
                </Link>

                <Link
                  href={'/create-prompt'}
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  ایجاد پست
                </Link>

                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}
                  className='mt-5 w-full black_btn'
                >
                  خروج از حساب
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: Provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  ورود
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav