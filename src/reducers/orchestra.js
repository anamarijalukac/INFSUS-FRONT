const reducer = (orchestra = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;


        case 'FETCH_ORCHESTRA':
            return action.payload;

        case 'CREATE':
            console.log("ide novi orkestar from reducer")
            console.log(action.payload)

            return [...orchestra, action.payload];


        default:
            return orchestra;
    }
}

export default reducer;