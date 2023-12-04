'use client'
import React from 'react'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import Search from '../components/search/Search'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <span className={styles.title}>{pathname.split('/').pop()}</span>
      <div className={styles.menu}>
        <Search placeholder={'Search'}/>
        <div className={styles.icons}>
          <MdOutlineChat size={20} title="Chat"/>
          <MdNotifications size={20} title="Notification"/>
          <MdPublic size={20} title="Public"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar