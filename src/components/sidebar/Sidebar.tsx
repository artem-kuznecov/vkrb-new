'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Audiowide } from 'next/font/google'

import { t } from '@/utils/en_ru'
import logo from '@/assets/icons/logo.svg'
import arrowsLeft from '@/assets/icons/arrows-left.svg'
import arrowsRight from '@/assets/icons/arrows-right.svg'
import database from '@/assets/icons/database.svg'
import settings from '@/assets/icons/settings.svg'

import styles from './Sidebar.module.scss'

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' })

const Sidebar = (): React.JSX.Element => {
  const { theme } = useTheme()

  // * sidebar open state
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true)

  return (
    <div data-open={isSidebarOpen} className={cn(styles.sidebar, { [styles.dark]: theme === 'dark' })}>

      <header>
        <Image src={isSidebarOpen ? arrowsLeft : arrowsRight} alt='toggle' height={25} width={25} onClick={() => { setSidebarOpen(!isSidebarOpen) }}/>
        <Image src={logo} alt='logo' height={50} width={50} priority />
        <h1 data-brand className={audiowide.className}>lisa</h1>
      </header>

      <ul>
        <li data-name='knowledgebases'>
          <Link href='/'>
            <Image src={database} alt='toggle' height={35} width={35}/>
            <p>{t('Knowledgebases')}</p>
          </Link>
        </li>
        <li data-name='settings'>
          <Link href='/'>
            <Image src={settings} alt='toggle' height={35} width={35}/>
            <p>{t('Settings')}</p>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <Image src={database} alt='toggle' height={35} width={35}/>
            <p>Databases</p>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <Image src={database} alt='toggle' height={35} width={35}/>
            <p>Databases</p>
          </Link>
        </li>
      </ul>

      <footer>Footer</footer>
    </div>
  )
}

export { Sidebar }
