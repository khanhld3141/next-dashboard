import React from 'react'
import styles from './card.module.css'
import { MdPeople } from 'react-icons/md'
const Card = ({ cards }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <MdPeople />
                </div>
                <div className={styles.right}>
                    <span className={styles.title}>{cards.title}</span>
                    <span className={styles.number}>{cards.number}</span>
                    <span className={styles.info}>
                        <span className={cards.change > 0 ? styles.positive : styles.negative}>
                            {cards.change} %
                        </span>
                        <span> {cards.change > 0 ? "more " : "less "}
                            than previous week</span>
                    </span>
                </div>
            </div >
        </div >
    )
}

export default Card