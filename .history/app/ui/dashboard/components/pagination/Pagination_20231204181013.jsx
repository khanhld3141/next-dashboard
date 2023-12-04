'use client'
import React from 'react'
import styles from './pagination.module.css'
import Button from '../button/Button'
import { useParams, usePathname, useRouter } from 'next/navigation'
const Pagination = () => {
  const searchParam = useParams()
  const pathname = usePathname();
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParam)
  const ITEM_PER_PAGE=5;
  const hasPrev=
  const hasNext=
  return (
    <div className={styles.container}>
        <Button className={!hasPrev ? styles.disable} size="15px" text="Previous" color="#9c4560"/>
        <Button size="15px" text="Next" color="#9c4560"/>
    </div>
  )
}

export default Pagination