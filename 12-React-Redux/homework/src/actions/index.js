// import { useInsertionEffect } from "react"


export function getMovies(title){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
        .then(response => response.json())
        .then(movies => dispatch({type: 'GET_MOVIES', payload: movies}));
    };
}
export function getMovieDetail(imbdID){
    return function (dispatch){
        return fetch (`http://www.omdbapi.com/?apikey=d1dcdf9c&i=${imbdID}`)
        .then (response => response.json())
        .then (detail => {
            dispatch({type: 'GET_MOVIE_DETAIL', payload: detail})
            console.log(detail)
        })        
    }
}

export function addMovieFavorite(title){
    return {
        type: 'ADD_MOVIE_FAVORITE',
        payload: title
    }
}

export function removeMovieFavorite(id){
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        payload: id
    }
}
