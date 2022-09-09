const initialState = {
    moviesLoaded: [],
    moviesFavorites: [],
    movieDetail: {},
};

// {type: 'MOVIES_FILTERED', payload: moviesFiltered}

export default function rootReducer(state = initialState, action) {
    switch (action.type){
        case 'GET_MOVIES':
            return {
                ...state,
                moviesLoaded: action.payload.Search,
            };
            case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                movieDetail: action.payload,
            };
            case 'ADD_MOVIE_FAVORITE':
            return {
                // tambien valido con spread operator
                // [...state, moviesFavorites, action.payload]
                ...state,
                moviesFavorites: state.moviesFavorites.concat(action.payload)
            };
            case 'REMOVE_MOVIE_FAVORITE':
                return {
                    ...state,
                    moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.id)
                }
          
        default: return state;
    }
};