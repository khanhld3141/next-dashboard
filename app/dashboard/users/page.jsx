import React from 'react'
import Search from '../../ui/dashboard/components/search/Search'
import styles from './user.module.css'
import Button from '../../ui/dashboard/components/button/Button'
import Pagination from '../../ui/dashboard/components/pagination/Pagination'
import Image from 'next/image'
import Link from 'next/link'
const User = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={'Search a user'} />
        <Link href={'/dashboard/users/add'}>
          <Button text="Add new" color="#5d57c9" size='15px' />
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Action</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
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
              <span>john@gmail.com</span>
            </td>
            <td>
              <span>Oct 29, 2023</span>
            </td>
            <td>
              <span>Client</span>
            </td>
            <td>
              <span>active</span>
            </td>
            <td>
              <div className={styles.action}>
                <Button text="View" size="15" color="teal" />
                <Button text="Detail" size="15" color="crimson" />
              </div>
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
              <span>john@gmail.com</span>
            </td>
            <td>
              <span>Oct 29, 2023</span>
            </td>
            <td>
              <span>Client</span>
            </td>
            <td>
              <span>active</span>
            </td>
            <td>
              <div className={styles.action}>
                <Button text="View" size="15" color="teal" />
                <Button text="Detail" size="15" color="crimson" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default User