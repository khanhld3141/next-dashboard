import React from 'react'
import styles from './button.module.css'
const Button = ({ text, color,size ,className}) => {
    return (
        <button className={`${styles.container} ${className}`} style={{ backgroundColor: color ,fontSize:size}}>
            {text}
        </button>
    )
}

export default Button