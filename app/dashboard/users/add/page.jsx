import React from 'react'
import styles from './add.module.css'
const AddUser = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <div className={styles.input}>
                    <input type="text" placeholder='name' name='name' required />
                    <input type="text" placeholder='email' name='email' required />
                    <input type="password" name='password' placeholder='password' required />
                    <input type="text" name='phone' placeholder='phone' required />
                    <select name="isAdmin" id="isAdmin">
                        <option value="general">is Admin ?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <select name="isActive" id="isActive">
                        <option value="general">is Active ?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <textarea name="address" id="address" placeholder='Address' cols="30" rows="10"></textarea>
                <button className={styles.button} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddUser