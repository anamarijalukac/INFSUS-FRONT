const reducer=(user=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL':

            return action.payload;


        case 'FETCH_USER':
            return action.payload;


        default:
            return user;
    }
}

export default reducer;