import { extractUniqueDetails } from '../utils/extractUniqueDetails.js'

const fetchFilms = async () => {
  try {
    const response = await fetch('http://localhost:3000/public/trailerflix.json')
    const data = await response.json()
    const uniqueDetails = extractUniqueDetails(data)
    return uniqueDetails
  } catch (e) {
    console.error(e)
  }
}

export { fetchFilms }
