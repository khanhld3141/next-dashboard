import React from 'react'
import Search from '../../ui/dashboard/components/search/Search'
import styles from './user.module.css'
import Button from '../../ui/dashboard/components/button/Button'
import Pagination from '../../ui/dashboard/components/pagination/Pagination'
import Image from 'next/image'
import Link from 'next/link'
import { fetchUser } from '../../lib/data'
const User = async ({searchParams}) => {
  const users = await fetchUser();
  const q=searchParams?.query || ""
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
          {users && users.map(user => (
            <tr key={user._id}>
              <td>
                <div className={styles.profile}>
                  <div className={styles.avatar}>
                    <Image priority className={styles.img} width={40} height={40} src={user.img} alt="avatar" />
                  </div>
                  <span className={styles.name}>{user.name}</span>
                </div>
              </td>
              <td>
                <span>{user.email}</span>
              </td>
              <td>
                <span>{user.createdAt?.toString().slice(4,16)}</span>
              </td>
              <td>
                <span>{user.isAdmin ? 'Admin' :'Client'}</span>
              </td>
              <td>
                <span>{user.isActive ? 'active' : ''}</span>
              </td>
              <td>
                <div className={styles.action}>
                  <Link href={`/dashboard/users/${user._id}`}><Button text="View" size="15" color="teal" /></Link>
                  <Button text="Delete" size="15" color="crimson" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default User