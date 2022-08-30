import React from 'react'

const Label = ({text,htmlFor,className}) => {
  return (
    <label htmlFor={htmlFor} className={("text-sm font-medium text-gray-600 truncate ")+className}>{text}</label>
  )
}

export default Label