import React from 'react'
import { useEffect } from 'react'
import { DarkLogo, LightLogo } from '../../assets/fluent-icons'
import useStore from '../../store'
import './loading.scss'

function Loading() {
  const isDark = useStore(state => state.isDark)

  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden'
    return () => {
      document.querySelector('body').style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='loading'>
      {isDark ? <DarkLogo/> : <LightLogo/>}
      <p>Loading...</p>
    </div>
  )
}

export default Loading