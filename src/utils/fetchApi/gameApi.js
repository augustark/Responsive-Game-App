import axios from "axios"
import { insertFilter, insertSorter } from "./gameUtils"

let PORT = process.env.PORT || 3000
let PROXY

if (process.env.NODE_ENV === 'development') {
  PROXY = `http://localhost:${PORT}`
} else {
  PROXY = '/api'
}

// const createAccessToken = async () => {
//   let ACCESS_TOKEN

//   const getAccessToken = async () => {
//     const TWITCH_CLIENT_ID = process.env.REACT_APP_IGDB_CLIENT_ID
//     const TWITCH_CLIENT_SECRET = process.env.REACT_APP_IGDB_CLIENT_SECRET
  
//     const tokenRes = await axios({
//       url: `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
//       method: 'POST'
//     })
//     return await tokenRes.data 
//   }

//   if (!ACCESS_TOKEN) {
//     ACCESS_TOKEN = await getAccessToken()
//   }

//   const expiration = new Date().setSeconds(ACCESS_TOKEN?.expires_in)
//   const today = new Date()

//   if (today === expiration) {
//     ACCESS_TOKEN = await getAccessToken()
//   }

//   return `Bearer ${ACCESS_TOKEN.access_token}`
// }

const fetchGames = async ({ queryKey }) => {
  const { body, page, filter, request, sort } = queryKey[1]
  const offset = page && page === 1 ? 1 : ((page * 10) * 2 ) - 20
  const limit = !request && `limit ${page ? 21 : 13};` 
  const pagination = !request && `offset ${page ? offset : 1};`

  let customBody = page && insertFilter(body, filter)
  customBody = !sort ? customBody : insertSorter(customBody, sort.option, sort.order)

  const response = await axios({
    url: `${PROXY}/games`,
    method: 'POST', 
    headers: {
      "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
      "Authorization": process.env.REACT_APP_IGDB_TOKEN
    },
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
  const response = await axios({
    url: `${PROXY}/games`,
    method: 'POST', 
    headers: {
      "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
      "Authorization": process.env.REACT_APP_IGDB_TOKEN
    },
    data: `fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, first_release_date, themes.name; limit 25; search "${queryKey[1]}";`
  })
  return response.data
}
