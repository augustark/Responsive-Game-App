import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { SearchIcon } from '../../assets/fluent-icons'
import './input.scss'

function Input({ overlay }) {
  const [viewInput, setViewInput] = useState(false)
  const inputRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${inputRef.current.value}`)
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