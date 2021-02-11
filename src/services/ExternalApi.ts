
import axios from 'axios'
export const trending = 'https://api.themoviedb.org/3/trending/all/day?api_key=ca5d667528ca51e527d9e4f7830d97d2'
export const latest = 'https://api.themoviedb.org/3/discover/movie?api_key=ca5d667528ca51e527d9e4f7830d97d2&language=en-US&include_adult=false'
export const getAllGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=ca5d667528ca51e527d9e4f7830d97d2&language=en-US'

export const getLinkForMoviesForGenres = async(genre:string) =>{
    let result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=ca5d667528ca51e527d9e4f7830d97d2&language=en-US&include_adult=false&with_genres=comedy`
    );
    console.log(result);
}