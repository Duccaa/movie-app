import axios from 'axios';

const key = '?api_key=d2f459ed1ba89e59474937d6974425f0&language=en-US';
const base = 'https://api.themoviedb.org/3/';

export const getCoutryCodes = () => {
    return axios.get(`${base}configuration/countries${key}`)
}

export const getSimilarMovies = (id) => {
    return axios.get(`${base}movie/${id}/similar${key}`);
}

export const getPopularMovies = (page) => {
    return axios.get(`${base}movie/popular${key}&page=${page}`); 
}

export const getNowPlayingMovies = (page, code) => {
    return axios.get(`${base}movie/now_playing${key}&region=${code}&page=${page}`)
}

export const getDetails = (id) => {
    return axios.get(`${base}movie/${id}${key}`)
}

export const getVideos = (id) => {
    return axios.get(`${base}movie/${id}/videos${key}`)
}
