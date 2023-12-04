import React from 'react'
import styles from './add.module.css'
import {addProduct} from '../../../lib/action'
const AddProduct = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <div className={styles.input}>
                    <input type="text" placeholder='title' name='title' required />
                    <select name="cate" id="cate" required>
                        <option value="general">Choose a Category</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                    </select>
                    <input type="number" name='price' placeholder='price' required />
                    <input type="number" name='stock' placeholder='stock' required />
                    <input type="text" name='color' placeholder='color' required />
                    <input type="text" name='size' placeholder='size' required />
                </div>
                <textarea name="desc" id="desc" placeholder='Description' cols="30" rows="10"></textarea>
                <button className={styles.button} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddProduct