import React, { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../assets/fluent-icons'
import './input.scss'

function Input({ overlay }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewInput, setViewInput] = useState(false)
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(inputRef.current.value)
    inputRef.current.value = ''
  }

  useEffect(() => {
    if (inputRef.current && viewInput) {
      inputRef.current.focus()
    }
  }, [viewInput])

  return (
    <form 
      className={`
        ${viewInput ? 'showed' : ''} 
        ${!overlay ? 'not' : ''} 
        input-field
      `}
      onSubmit={handleSubmit}
    >
      {viewInput && <input 
        type="text" 
        placeholder='Search' 
        ref={inputRef}
        onBlur={() => setViewInput(false)} 
      />}
      <SearchIcon 
        className={overlay ? 'overlay' : ''}
        onClick={() => setViewInput(prev => !prev)}
      />
    </form>
  )
}

export default Input