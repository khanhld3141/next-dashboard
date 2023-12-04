import React from 'react'
import styles from './button.module.css'
const Button = ({ text, color,size ,className,onClick}) => {
    return (
        <button onClick={onClick} className={`${styles.container} ${className}`} style={{ backgroundColor: color ,fontSize:size}}>
            {text}
        </button>
    )
}

export default Button