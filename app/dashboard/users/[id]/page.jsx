
import Image from 'next/image'
import React from 'react'
import styles from './detailuser.module.css'
import { fetchDetailUser } from '../../../lib/data'
import { updateUser } from '../../../lib/action'
const DetailUser = async ({ params }) => {
  const user = await fetchDetailUser(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image priority className={styles.img} width={300} height={300} src={user.img ||'/noavatar.png'} alt="avatar" />
        <span className={styles.name}>{user.name}</span>
      </div>

      <form action={updateUser} className={styles.form}>
        <div className={styles.input}>
          <input type="hidden" name='id' value={user._id} />
          <input placeholder={user.name} type="text" name='name'/>
          <input placeholder={user.email} type="text" name='email' />
          <input placeholder={user.password} type="password" name='password'/>
          <input placeholder={user.phone} type="text" name='phone' />
          <select name="isAdmin" id="isAdmin" >
            <option value="general">is Admin ?</option>
            <option selected={user.isAdmin} value={true}>Yes</option>
            <option selected={!user.isAdmin} value={false}>No</option>
          </select>
          <select name="isActive" id="isActive" >
            <option value="general">is Active ?</option>
            <option selected={user.isActive} value={true}>Yes</option>
            <option selected={!user.isActive} value={false}>No</option>
          </select>
        </div>
        <textarea placeholder={user.address} name="address" id="address" cols="30" rows="10"></textarea>
        <button className={styles.button} type='submit'>Update</button>
      </form>
    </div>
  )
}

export default DetailUser