const reducer = (orchestra = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':

            return action.payload;


        case 'FETCH_ORCHESTRA':
            return action.payload;

        case 'CREATE':


            return [...orchestra, action.payload];

        case 'DELETE':
            return orchestra.filter((o)=>o._id!==action.payload);

        case 'UPDATE':

            return orchestra.map((o) => o._id === action.payload._id ? action.payload : o)


        default:
            return orchestra;
    }
}

export default reducer;