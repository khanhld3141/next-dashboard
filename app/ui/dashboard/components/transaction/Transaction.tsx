import React from 'react'
import styles from './transaction.module.css'
import Image from 'next/image'
const Transaction = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Latest Transaction</div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.profile}>
                                <div className={styles.avatar}>
                                    <Image priority className={styles.img} width={40} height={40} src={" https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg"} alt="avatar" />
                                </div>
                                <span className={styles.name}>Rose</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>pending</span>
                        </td>
                        <td>
                            <span className={styles.date}>04.12.2023</span>
                        </td>
                        <td>
                            <span className={styles.amount}>
                                $ 3.200
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.profile}>
                                <div className={styles.avatar}>
                                    <Image priority className={styles.img} width={40} height={40} src={" https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg"} alt="avatar" />
                                </div>
                                <span className={styles.name}>Dennis Thomas Lula</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>done</span>
                        </td>
                        <td>
                            <span className={styles.date}>04.12.2023</span>
                        </td>
                        <td>
                            <span className={styles.amount}>
                                $ 3.200
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.profile}>
                                <div className={styles.avatar}>
                                    <Image priority className={styles.img} width={40} height={40} src={" https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg"} alt="avatar" />
                                </div>
                                <span className={styles.name}>Dennis Thomas Lula</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
                        </td>
                        <td>
                            <span className={styles.date}>04.12.2023</span>
                        </td>
                        <td>
                            <span className={styles.amount}>
                                $ 3.200
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transaction