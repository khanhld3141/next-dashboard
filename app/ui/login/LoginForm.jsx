import React from 'react'
import styles from './login.module.css'
import { FaGoogle, FaGithub } from 'react-icons/fa'
const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.title}>Login</div>
        <input className={styles.input} type="text" placeholder='username' name='username' />
        <input className={styles.input} type="password" placeholder='password' name='password' />
        <button className={styles.button}>Login</button>
        <div className={styles.anotherLogin}>
          <FaGoogle />
          <FaGithub />
        </div>
      </div>
    </div>
  )
}

export default LoginForm