import React from 'react'
import styles from './dashboard.module.css'
import { cards } from '../lib/data'
import Card from '../ui/dashboard/components/card/Card'
import Transaction from '../ui/dashboard/components/transaction/Transaction'
import Chart from '../ui/dashboard/components/chart/Chart'
import RightBar from '../ui/dashboard/components/rightbar/RightBar'
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.card}>
          {cards.map((card) => (
            <Card key={card.id} cards={card} />
          ))}
        </div>
        <Transaction/>
        <Chart/>
      </div>
      <div className={styles.slice}>
          <RightBar/>
      </div>
    </div>
  )
}

export default Dashboard