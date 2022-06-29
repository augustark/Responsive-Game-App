const date = new Date()
const TODAY_YEAR = new Date(date.getFullYear(), 0).getTime()/1000
const TODAY_MONTH = new Date(date.getFullYear(), date.getMonth()).getTime()/1000
const LAST_DAY_OF_MONTH = new Date(date.getFullYear(), date.getMonth() + 1, 0).getTime()/1000
const LAST5YEARS = new Date(date.getFullYear() - 5, 0).getTime()/1000
const DATE_TODAY = Math.floor(date.getTime()/1000)

export const heroParams = `
  fields artworks.*, cover.*, first_release_date, game_modes.*, name, platforms, player_perspectives.*, rating, release_dates.*, screenshots.*, similar_games, slug, storyline, summary, themes.name, total_rating, updated_at, url, videos.*, websites.*; where artworks != null & cover != null & first_release_date > ${TODAY_YEAR} & rating > 75 & total_rating > 70; sort rating desc;
`

export const featuredParams = `
  fields artworks.*, cover.*, genres.*, name, platforms, screenshots, total_rating, total_rating_count, first_release_date, themes.name; where artworks != null & cover != null & genres != null & rating >= 75 & first_release_date >= ${LAST5YEARS} & total_rating >= 80; sort first_release_date desc;
`

export const popularParams = `
  fields artworks.*, cover.*, genres.*, name, platforms, screenshots, total_rating, total_rating_count, first_release_date, themes.name; where artworks != null & cover != null & genres != null & first_release_date > ${TODAY_YEAR} & total_rating > 70; sort total_rating desc;
`

export const upcomingParams = `
  fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, release_dates.date, themes.name, first_release_date; where artworks != null & cover != null & genres != null & first_release_date > ${DATE_TODAY}; sort first_release_date asc;
`

export const recentlyReleasedParams = `
  fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, first_release_date, themes.name; where artworks != null & cover != null & genres != null & first_release_date < ${DATE_TODAY}; sort first_release_date desc;
`

export const topMonthParams = `
  fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, first_release_date, rating, total_rating, themes.name; where artworks != null & cover != null & genres != null & first_release_date > ${TODAY_YEAR} & first_released_date < ${LAST_DAY_OF_MONTH}; sort total_rating asc; limit 15;
`

export const findGame = (id) => `
  fields artworks.*, cover.*, first_release_date, game_modes.*, genres.*, name, platforms.*, player_perspectives.*, rating, release_dates.*, screenshots.*, similar_games.cover.*, similar_games.genres.*, similar_games.name, similar_games.first_release_date, slug, storyline, summary, themes.name, total_rating, updated_at,url, videos.*, websites.*; where id = ${id};
`

export const topRatedParams = `
  fields artworks.*, cover.*, genres.*, platforms, screenshots, name, first_release_date, rating, total_rating; where artworks != null & cover != null & genres != null & first_release_date > ${TODAY_MONTH} & first_release_date < ${LAST_DAY_OF_MONTH} & total_rating > 75; sort total_rating desc;
`