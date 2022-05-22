import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchUsers()
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (e) {
        console.log(e);
    }
}

export const getUserById = (userID) => async (dispatch) =>{
    try {
        const {data} = await api.fetchUserById(userID)
        dispatch({type: 'FETCH_USER', payload: data})
    } catch (error) {
        console.log(error)
    }
}