'use client'
import React from 'react'
import styles from './pagination.module.css'
import Button from '../button/Button'
import { useParams, usePathname, useRouter } from 'next/navigation'
const Pagination = () => {
  const searchParam = useParams()
  const pathname = usePathname();
  const { replace } = useRouter()
  const page = searchParam.get("page") || 1
  const params = new URLSearchParams(searchParam)
  const ITEM_PER_PAGE = 5;
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  return (
    <div className={styles.container}>
      <Button className={!hasPrev ? styles.disable : ''} size="15px" text="Previous" color="#9c4560" />
      <Button size="15px" text="Next" color="#9c4560" />
    </div>
  )
}

export default Pagination