const reducer=(user=[],action)=>{
    switch (action.type) {
        case 'GET_USER':
            console.log(action.payload)
            return action.payload;

        case 'CREATE_USER':
            console.log(action.payload);
            return [...user,action.payload];


        default:
            return user;
    }
}

export default reducer;