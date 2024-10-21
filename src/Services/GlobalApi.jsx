import axios from "axios";
const api_key=import.meta.env.VITE_API_KEY;

const movieBaseUrl= "https://api.themoviedb.org/3"

const movieByGenreBaseURL=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const movieBySearchUrl= 'https://api.themoviedb.org/3/search/movie';

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/movie/week?api_key="+api_key+"&language=en");

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId,
    movieBySearchUrl,
    api_key
}