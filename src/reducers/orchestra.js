const reducer = (movies = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;


        case 'FETCH_ORCHESTRA':
            return action.payload;


        default:
            return movies;
    }
}

export default reducer;