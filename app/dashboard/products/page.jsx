import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../../ui/dashboard/components/button/Button'
import Pagination from '../../ui/dashboard/components/pagination/Pagination'
import Search from '../../ui/dashboard/components/search/Search'
import styles from './products.module.css'
const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={'Search a product'} />
        <Link href={'/dashboard/products/add'}>
          <Button text="Add new" color="#5d57c9" size='15px' />
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
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
                <span className={styles.name}>Dennis Thomas</span>
              </div>
            </td>
            <td>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit....</span>
            </td>
            <td>
              <span>$ 3.200</span>
            </td>
            <td>
              <span>Oct 29, 2023</span>
            </td>
            <td>
              <span>20</span>
            </td>
            <td>
              <div className={styles.action}>
                <Button text="View" size="15" color="teal" />
                <Button text="Delete" size="15" color="crimson" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.profile}>
                <div className={styles.avatar}>
                  <Image priority className={styles.img} width={40} height={40} src={" https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg"} alt="avatar" />
                </div>
                <span className={styles.name}>Dennis Thomas</span>
              </div>
            </td>
            <td>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit....</span>
            </td>
            <td>
              <span>$ 3.200</span>
            </td>
            <td>
              <span>Oct 29, 2023</span>
            </td>
            <td>
              <span>20</span>
            </td>
            <td>
              <div className={styles.action}>
                <Button text="View" size="15" color="teal" />
                <Button text="Delete" size="15" color="crimson" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>

  )
}

export default Products