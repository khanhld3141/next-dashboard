'use client'
import React from 'react'
import styles from './pagination.module.css'
import Button from '../button/Button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
const Pagination = ({ count }) => {
  const searchParam = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter()
  const page = searchParam.get("page") || 1
  const params = new URLSearchParams(searchParam)
  const ITEM_PER_PAGE = 5;
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count
  const handleChangePage = (type) => {
    type === 'prev' ?
      params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1)
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
      <Button onClick={() => handleChangePage('prev')} disabled={!hasPrev} className={!hasPrev ? styles.disable : ''} size="15px" text="Previous" color="#2ecc71" />
      <Button onClick={() => handleChangePage('next')} disabled={!hasNext} className={!hasNext ? styles.disable : ''} size="15px" text="Next" color="#2ecc71" />
    </div>
  )
}

export default Pagination