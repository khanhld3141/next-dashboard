import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { deleteProduct } from '../../lib/action'
import { fetchProduct } from '../../lib/data'
import Button from '../../ui/dashboard/components/button/Button'
import Pagination from '../../ui/dashboard/components/pagination/Pagination'
import Search from '../../ui/dashboard/components/search/Search'
import styles from './products.module.css'
const Products = async ({ searchParams }) => {
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const { products, count } = await fetchProduct(q, page);

  console.log(products);
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
          {products && products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.profile}>
                  <div className={styles.avatar}>
                    <Image priority className={styles.img} width={40} height={40} src={" https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg"} alt="avatar" />
                  </div>
                  <span className={styles.name}>{product.title}</span>
                </div>
              </td>
              <td>
                <span>{product.desc}</span>
              </td>
              <td>
                <span>{Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND'
                }).format(product.price)}</span>
              </td>
              <td>
                <span>{product.createdAt?.toString().slice(4, 16)}</span>
              </td>
              <td>
                <span>{product.stock}</span>
              </td>
              <td>
                <div className={styles.action}>
                  <Link href={`dashboard/products/${product._id}`}>
                    <Button text="View" size="15" color="teal" />
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product._id} />
                    <Button text="Delete" size="15" color="crimson" />
                  </form>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      <Pagination count={count} />
    </div>

  )
}

export default Products