
// import { apiKey } from "./secrets.js"

const apiKey = ''

const searchTerm = 'batman'

const movieID = 'tt2975590'

const getMoviesBySearchTerm = async (searchTerm) => 
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
    .then((res) => res.json())
    .then((getMoviesBySearchTerm) => console.log(getMoviesBySearchTerm))

const getMovieDetailsById = async (movieID) => 
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`)
    .then((res) => res.json())
    .then((movieData) => console.log(movieData))