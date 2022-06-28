import React from 'react'
import { useQuery } from 'react-query'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Dropdown, Filter, FilterBtn } from '../../components'
import useViewport from '../../utils/custom-hooks/useViewport'
import './GameDirectory.scss'

import shallow from "zustand/shallow"

import fetchGames from '../../utils/fetchApi/gameApi'
import { useDirectoryStore } from '../../store'
import { ChevLeftIcon, ChevRightIcon } from '../../assets/fluent-icons'
import { useEffect } from 'react'
import { navigate } from '../../utils/fetchApi/gameUtils'

function GameDirectory() {
  const { width, breakpoint } = useViewport('830px')
  const filter = useDirectoryStore((state) => state.filter, shallow)
  const sort = useDirectoryStore((state) => state.sort, shallow)
  const { title, body, page } = useDirectoryStore((state) => state.collection, shallow)
  const config = { filter, body, page, sort }
  const setPage = useDirectoryStore((state) => state.setPage)

  const response = useQuery(['directory', config], fetchGames, { keepPreviousData: true })

  const activeClassName = ({ isActive }) => isActive ? 'active' : ''
  const prev = () => setPage(page - 1)
  const next = () => setPage(page + 1)

  const { pathname } = useLocation()
  const setCollection = useDirectoryStore((state) => state.setCollection)
  
  useEffect(() => {
    if (pathname.includes('coming')) {
      setCollection(navigate('coming'))
    } else if (pathname.includes('recent')) {
      setCollection(navigate('recent'))
    } else if (pathname.includes('popular')) {
      setCollection(navigate('popular'))
    } else {
      setCollection(navigate(''))
    }
  }, [pathname, setCollection])

  return (
    <div className='directory'>
      {width > breakpoint && <Filter/>}
      <div className='game-directory'>
        <div className='header'>
          <h1>{title}</h1>
        </div>
        <div className='options'>
          <div className='toggle-content'>
            <NavLink className={activeClassName} to='/games' end>Featured</NavLink>
            <NavLink className={activeClassName} to='/games/coming'>Coming Soon</NavLink>
            <NavLink className={activeClassName} to='/games/recent'>Recently Released</NavLink>
            {width > breakpoint && (
              <div className='pagination'>
                <button disabled={page === 1} onClick={prev}><ChevLeftIcon/></button>
                <span>{page}</span>
                <button disabled={response.isPreviousData} onClick={next}><ChevRightIcon/></button>
              </div>
            )}
          </div>
          <div className='filters'>
            <Dropdown/>
            {width < breakpoint && <FilterBtn/>}
          </div>
        </div>
        <Outlet context={response}/>
        {width < breakpoint && (
          <div className='pagination'>
            <button disabled={page === 1} onClick={prev}>Prev</button>
            <button disabled={response.isPreviousData} onClick={next}>Next</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default GameDirectory