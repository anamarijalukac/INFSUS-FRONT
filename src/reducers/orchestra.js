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

       


        default:
            return orchestra;
    }
}

export default reducer;