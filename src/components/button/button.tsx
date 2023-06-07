import { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.module.css'

const Button: FC<ButtonHTMLAttributes<any>> = (props) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  )
}

export default Button
