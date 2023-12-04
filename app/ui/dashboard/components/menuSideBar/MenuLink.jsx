'use client'
import Link from 'next/link'
import React from 'react'
import styles from './menulink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({ items }) => {
  const pathname=usePathname()
  return (
    <div className={styles.menu}>
      <div className={styles.title}>{items.title}</div>
      <div className={styles.subMenu}>
        {items.lists.map((item) => (
          <Link key={item.id} className={`${styles.item} ${pathname===item.path && styles.active}`} href={item.path} >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.text}>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MenuLink