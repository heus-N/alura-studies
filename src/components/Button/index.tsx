import React from 'react'
import style from './Button.module.scss'

interface Props{
  children?: any, 
  type?: "submit" | "reset" | "button" | undefined, 
  onClick?: () => void
}

function Button({onClick, type, children} : Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao} >
      {children}
    </button>
  )
}

export default Button