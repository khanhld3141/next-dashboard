import React from 'react'
import styles from './pagination.module.css'
import Button from '../button/Button'
const Pagination = () => {
  return (
    <div className={styles.container}>
        <Button className={styles.disable} size="15px" text="Previous" color="#9c4560"/>
        <Button size="15px" text="Next" color="#9c4560"/>
    </div>
  )
}

export default Pagination