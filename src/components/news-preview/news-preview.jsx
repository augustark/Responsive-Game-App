import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../loading/loading'
import fetchNews from '../../utils/fetchApi/gameNewsApi'
import './news-preview.scss'
import { ls_placeholder } from '../../assets/fluent-icons'

function NewsPreview() {
  const { data, isFetching, isError } = useQuery('news', fetchNews, { keepPreviousData: true })

  if (isFetching) return <Loading/>
  if (isError) return <h1>Error ...</h1>

  return (
    <div className='news-preview'>
      <h1>Latest News</h1>
      <div className='news-cards'>
        {data.articles.map((article, idx) => (
          <div key={idx} className='news-card'>
            <a href={article.url} target='_blank' rel='noreferrer'>
              <img src={article.urlToImage || ls_placeholder} alt=''/>
              <div className='info'>
                <span>{new Date(article.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric'})}</span>
                <h2>{article.title.length > 55 ? article.title.slice(0, 55) + '...' : article.title}</h2>
                <p>{article.description}</p>
                <span>Source: {article.source.name}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsPreview