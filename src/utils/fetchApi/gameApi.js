import axios from "axios"
import { insertFilter, insertSorter } from "./gameUtils"

let PORT = process.env.PORT || 3000
let PROXY

if (process.env.NODE_ENV === 'development') {
  PROXY = `http://localhost:${PORT}`
} else {
  PROXY = '/api'
}

const instance = axios.create({
  baseURL: `${PROXY}`,
  method: 'POST',
  headers: {
    "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
    "Authorization": process.env.REACT_APP_IGDB_TOKEN,
  },
})

const fetchGames = async ({ queryKey }) => {
  const { body, page, filter, request, sort } = queryKey[1]
  const offset = page && page === 1 ? 1 : ((page * 10) * 2 ) - 20
  const limit = !request && `limit ${page ? 21 : 10};` 
  const pagination = !request && `offset ${page ? offset : 1};`

  let customBody = page && insertFilter(body, filter)
  customBody = !sort ? customBody : insertSorter(customBody, sort.option, sort.order)
  
  const response = await instance({
    url: '/games',
    data: `
      ${page ? customBody : body}
      ${limit}
      ${pagination}
    `
  })
  return response.data
}

export default fetchGames

export const fetchGamesBySearch = async ({ queryKey }) => {
  const response = await instance({
    url: '/games',
    data: `fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, first_release_date, themes.name; limit 25; search "${queryKey[1]}";`
  })
  return response.data
}