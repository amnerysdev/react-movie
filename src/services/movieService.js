import { updateSearchCount as saveSearchCount, getTrendingMovies as fetchTrendingMovies } from '../appwrite'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

export const fetchMovies = async (query = '') => {
  const endpoint = query
    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

  const response = await fetch(endpoint, API_OPTIONS)

  if (!response.ok) {
    throw new Error(`TMDB request failed with status ${response.status}`)
  }

  const data = await response.json()
  return data.results || []
}

export const updateSearchCount = async (searchTerm, movie) => {
  return saveSearchCount(searchTerm, movie)
}

export const getTrendingMovies = async () => {
  return fetchTrendingMovies()
}
